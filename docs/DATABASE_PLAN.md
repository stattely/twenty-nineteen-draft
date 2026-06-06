# Database Plan

This project is still static/local-first. The next scalable step is moving rosters and content into a database.

## Recommended structure

Use Cloudflare D1 for relational content:

- teams
- rosters
- players
- roster_players
- synergies
- chrono_powers
- objectives
- assets

Example schema:

```sql
CREATE TABLE teams (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  short TEXT NOT NULL,
  region TEXT,
  country TEXT
);

CREATE TABLE rosters (
  id TEXT PRIMARY KEY,
  team_id TEXT NOT NULL,
  year INTEGER NOT NULL,
  tournament TEXT NOT NULL,
  tier INTEGER NOT NULL,
  rarity TEXT DEFAULT 'normal',
  styles TEXT,
  logo_path TEXT
);

CREATE TABLE players (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  rating INTEGER NOT NULL,
  tags TEXT
);

CREATE TABLE roster_players (
  roster_id TEXT NOT NULL,
  player_id TEXT NOT NULL,
  PRIMARY KEY (roster_id, player_id)
);

CREATE TABLE chrono_powers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  cost INTEGER NOT NULL,
  text TEXT NOT NULL,
  effect_key TEXT
);
```

## Why no "Content Database coming soon" screen?

Not worth it yet. A visible empty screen adds noise for players. Better: keep the database plan in docs and migrate content when there is enough data to justify an admin/import flow.

## Migration approach

1. Keep current static data as fallback.
2. Add `public/data/rosters.seed.json`.
3. Later add a Worker endpoint `/api/rosters`.
4. If endpoint fails, use the static fallback.
5. Only then add admin tools or D1.
