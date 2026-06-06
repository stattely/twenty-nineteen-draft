import fs from 'node:fs/promises';
import path from 'node:path';

const API = 'https://lol.fandom.com/api.php';
const OUT = path.join(process.cwd(), 'public', 'data', 'leaguepedia_rosters.raw.json');

const tournaments = [
  'Season 2 World Championship', 'Season 3 World Championship', '2014 Season World Championship',
  '2015 Season World Championship', '2016 Season World Championship', '2017 Season World Championship',
  '2018 Season World Championship', '2019 Season World Championship', '2020 Season World Championship',
  '2021 Season World Championship', '2022 Season World Championship', '2023 Season World Championship',
  '2024 Season World Championship', '2015 Mid-Season Invitational', '2016 Mid-Season Invitational',
  '2017 Mid-Season Invitational', '2018 Mid-Season Invitational', '2019 Mid-Season Invitational',
  '2021 Mid-Season Invitational', '2022 Mid-Season Invitational', '2023 Mid-Season Invitational',
  '2024 Mid-Season Invitational', '2025 First Stand Tournament'
];

function chunk(list, size) {
  const out = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}

function parseList(value) {
  return String(value || '').split(';;').map(x => x.trim()).filter(Boolean);
}

async function cargoQuery(where) {
  const params = new URLSearchParams({
    action: 'cargoquery',
    format: 'json',
    limit: '500',
    tables: 'TournamentRosters',
    fields: 'Tournament,Team,Short,Region,RosterLinks,Roles,Flags,IsComplete,OverviewPage',
    where
  });
  const res = await fetch(`${API}?${params}`, { headers: { 'User-Agent': '20-19-draft-local-tool/1.0' } });
  if (!res.ok) throw new Error(`Leaguepedia responded ${res.status}`);
  const data = await res.json();
  if (data.error) throw new Error(`${data.error.code}: ${data.error.info}`);
  return data.cargoquery || [];
}

const rows = [];
for (const part of chunk(tournaments, 4)) {
  const quoted = part.map(t => `'${t.replaceAll("'", "\\'")}'`).join(',');
  const where = `Tournament IN (${quoted})`;
  try {
    const result = await cargoQuery(where);
    rows.push(...result.map(x => x.title));
    console.log(`Fetched ${result.length} rows for ${part[0]} ...`);
  } catch (err) {
    console.warn(`Skipped batch starting ${part[0]}: ${err.message}`);
  }
}

const normalized = rows.map(row => ({
  tournament: row.Tournament,
  overviewPage: row.OverviewPage,
  team: row.Team,
  short: row.Short,
  region: row.Region,
  players: parseList(row.RosterLinks).map((name, i) => ({
    name,
    role: parseList(row.Roles)[i] || '',
    flag: parseList(row.Flags)[i] || ''
  })),
  isComplete: String(row.IsComplete) === '1' || String(row.IsComplete).toLowerCase() === 'true'
}));

await fs.mkdir(path.dirname(OUT), { recursive: true });
await fs.writeFile(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), count: normalized.length, rows: normalized }, null, 2));
console.log(`Saved ${normalized.length} rows to ${OUT}`);
console.log('Este archivo es materia prima. Revísalo antes de meterlo al pool del juego.');
