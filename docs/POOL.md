# Pool actual de rosters

Esta versión trae un pool curado manualmente dentro de `index.html`.

Total de rosters curados: **35**.

| ID | Equipo | Año | Región | Champion/Rare | Tier |
|---|---:|---:|---|---|---:|
| `t1-2023` | T1 (T1) | 2023 | LCK | sí | 98 |
| `drx-2022` | DRX (DRX) | 2022 | LCK | sí | 93 |
| `edg-2021` | Edward Gaming (EDG) | 2021 | LPL | sí | 96 |
| `dwg-2020` | DAMWON Gaming (DWG) | 2020 | LCK | sí | 97 |
| `fpx-2019` | FunPlus Phoenix (FPX) | 2019 | LPL | sí | 95 |
| `ig-2018` | Invictus Gaming (IG) | 2018 | LPL | sí | 96 |
| `g2-2019-msi` | G2 Esports (G2) | 2019 | LEC | no | 94 |
| `rng-2018-msi` | Royal Never Give Up (RNG) | 2018 | LPL | no | 94 |
| `gen-2024-msi` | Gen.G (GEN) | 2024 | LCK | no | 96 |
| `hle-2025-fs` | Hanwha Life Esports (HLE) | 2025 | LCK | no | 95 |
| `blg-2026-fs` | Bilibili Gaming (BLG) | 2026 | LPL | no | 96 |
| `fnc-2018` | Fnatic (FNC) | 2018 | LEC | no | 91 |
| `ssw-2014` | Samsung White (SSW) | 2014 | LCK | sí | 99 |
| `tpa-2012` | Taipei Assassins (TPA) | 2012 | PCS | sí | 92 |
| `skt-2013` | SK Telecom T1 (SKT) | 2013 | LCK | sí | 96 |
| `skt-2015` | SK Telecom T1 (SKT) | 2015 | LCK | sí | 98 |
| `skt-2016` | SK Telecom T1 (SKT) | 2016 | LCK | sí | 97 |
| `ssg-2017` | Samsung Galaxy (SSG) | 2017 | LCK | sí | 95 |
| `skt-2017` | SK Telecom T1 (SKT) | 2017 | LCK | no | 94 |
| `koo-2015` | KOO Tigers (KOO) | 2015 | LCK | no | 93 |
| `rox-2016` | ROX Tigers (ROX) | 2016 | LCK | no | 95 |
| `ssb-2014` | Samsung Blue (SSB) | 2014 | LCK | no | 94 |
| `dk-2021` | DWG KIA (DK) | 2021 | LCK | no | 96 |
| `sn-2020` | Suning (SN) | 2020 | LPL | no | 92 |
| `wbg-2023` | Weibo Gaming (WBG) | 2023 | LPL | no | 91 |
| `jdg-2023-msi` | JD Gaming (JDG) | 2023 | LPL | no | 97 |
| `edg-2015-msi` | Edward Gaming (EDG) | 2015 | LPL | no | 93 |
| `rng-2021-msi` | Royal Never Give Up (RNG) | 2021 | LPL | no | 94 |
| `rng-2022-msi` | Royal Never Give Up (RNG) | 2022 | LPL | no | 95 |
| `tl-2019-msi` | Team Liquid (TL) | 2019 | LCS | no | 88 |
| `c9-2018` | Cloud9 (C9) | 2018 | LCS | no | 87 |
| `kt-2018` | KT Rolster (KT) | 2018 | LCK | no | 94 |
| `tes-2020` | Top Esports (TES) | 2020 | LPL | no | 93 |
| `mad-2021` | MAD Lions (MAD) | 2021 | LEC | no | 88 |
| `msf-2017` | Misfits Gaming (MSF) | 2017 | LEC | no | 86 |

## Medias / ratings

Las medias son editoriales: se asignaron manualmente con base en reputación histórica, rendimiento internacional y rol dentro del roster. En `index.html` se aplica `RATING_OFFSET = -3` para bajar el power global sin tener que tocar cada jugador. No vienen de Leaguepedia ni de una API oficial.

## Leaguepedia

`npm run sync:leaguepedia` descarga datos brutos de Leaguepedia hacia `public/data/leaguepedia_rosters.raw.json`. No reemplaza automáticamente el pool curado del juego porque eso rompería el balance: primero hay que revisar, limpiar roles, nombres y duplicados.