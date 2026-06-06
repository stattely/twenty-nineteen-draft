# 20:19 Draft — v12 stable

Proyecto fan-made de draft histórico de League of Legends. Esta versión conserva la base estable en un solo `index.html` y agrega mejoras visuales/UX sin volver a romper los botones.

## Correr local

```bash
npm install
npm run check
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Leaguepedia

```bash
npm run sync:leaguepedia
```

Ese comando genera `public/data/leaguepedia_rosters.raw.json`. No modifica el juego automáticamente; se usa para curar nuevos rosters antes de agregarlos al pool.

## Notas

- El pool actual está documentado en `docs/POOL.md`.
- Las medias son editoriales y se ajustan con `RATING_OFFSET` dentro de `index.html`.
- Los logos externos tienen fallback para no mostrar imagen rota.


## v15

- Agrega etiquetas y tooltips a las mini gráficas de Stats.
- Cada barra explica qué representa al pasar el mouse.
- Añade ayuda breve en tarjetas estadísticas para evitar confundir columnas como si fueran métricas independientes.


## v16 coherencia competitiva

- La simulación ahora se decide por destrucción del nexo, no por sumar objetivos.
- Swiss usa Bo1 y Bo3 en series de clasificación/eliminación; playoffs usa Bo3 y final Bo5 para ritmo arcade.
- Cada serie contiene mapas reales con marcador de serie: 2-0, 2-1, 3-0, 3-2, etc.
- Las duraciones ahora usan formato mm:ss.
- Objetivos como Nashor priorizan jungla y solo permiten support/otro rol como robo o pelea caótica.
- Eventos del historial y simulación se marcan en verde si son de tu draft y rojo si son del rival.


## v17/v18 Pro polish

- Simulación sin spoilers: eventos y resultado del mapa se ocultan hasta revelarse.
- Seed reproducible interna: las decisiones aleatorias de la run usan la seed activa.
- Tarjetas con tilt 3D/foil al estilo card reveal.
- Overlays de victoria/derrota por mapa y final de run.
- Stats e Historia con animaciones, barras, momentum chart y color por resultado.
- Iconos de posición reemplazados por los PNG enviados.


## v19 Mobile + No Spoiler Polish

- Reemplaza iconos de roles desde `IconsPositions.zip`.
- Ajusta layout para smartphone y tablet.
- Convierte los eventos no revelados en cartas cerradas para evitar spoilers.
- Reduce el mensaje de fin de run a una burbuja discreta.
- Refuerza tilt/foil de tarjetas en desktop.
- Mejora stats, historia y momentum con animaciones más visibles.
- Añade documento `docs/CHRONO_IDEAS.md` con 15 ideas para el modo Chrono.


## v21 verified

Cambios verificables:
- Footer y microline muestran `v21`.
- Los iconos de rol ya no son `<img>` con padding heredado; ahora son `role-glyph` con background directo desde `/assets/roles/*.png`.
- Los eventos ocultos muestran `Carta cerrada` y no revelan tipo, jugador ni equipo.
- `Sin simulación cargada` se muestra como burbuja discreta.
- Las cartas tienen clase `tilt-card` y hover 3D en desktop.


## V2.5 Five's Pick

- New title/copy: Welcome to Five’s Pick.
- Expanded Western pool with additional LEC/LCS rosters.
- Added colorful composition popovers.
- Added extra Chrono powers.
- Added reset icon next to Simular.
- Added `docs/ASSETS_GUIDE.md`.
- Added `docs/DATABASE_PLAN.md`.


## V2.6 Teams Final

- Adds Equipos tab with flipping team cards.
- Adds team rating cap and team tag balance.
- Adds uploaded western logos from Icons2.zip.
- Reuses existing logos when specific historical logo is missing.
- Fixes screen routing to keep Picks screen stable.


## V2.6.2 TEAM_PROFILES fix

- Moves TEAM_PROFILES before `boot()` so renderTeams cannot access it before initialization.
- Includes OG logo mapping.


## V2.6.3 Roster filters

- Fixes roster role icon alignment.
- Adds player tag colors and prime badges.
- Adds search and filters in Teams.
- Adds 3/5 column view toggle.
- Adds global wallet next to theme button.
- Patches several western player ratings/countries.


## V2.6.4 UI fixes

- Fixes market hover popovers so they expand inline instead of overlapping.
- Restores visible synergy popovers on player cards.
- Adds rich hover cards for player tags in draft and team roster views.


## V2.6.5 TAG_INFO fix

- Moves TAG_INFO before boot() so tag popovers can render during initial load.
- Fixes default screen fallback from picks to draft.


## V2.6.6 safe boot

- Moves `boot()` to the end of the script so no `const` data table can be accessed before initialization.
- Keeps V2.6.5 TAG_INFO fix, market popovers and roster filters.


## V2.6.7 version clean

- Cleans malformed labels like V2.6.5.3.
- Keeps safe boot at the end of the script.
- Adds BUILD_MARKER_V267_VERSION_CLEAN for deploy verification.


## V2.6.8 compact teams and custom flags

- Makes team cards smaller and cleaner.
- Moves back-side button upward so it is not clipped.
- Replaces OS flag emoji rendering with local CSS flags, because Windows often renders flag emojis as KR/CN text.
- Shortens composition popovers.


## V2.6.9 no-scroll popovers

- Removes internal scrollbars from composition popovers.
- Makes player/market hover panels shorter and clearer.
- Limits visible active/potential compositions to avoid card overlap.


## V2.7.0 simulation recovery

- Adds simulateSafe() wrapper so simulation errors no longer block the app.
- Lazy-renders Teams only when opening Equipos to avoid heavy hidden DOM during simulation.
- Fixes leftover setScreen('picks') calls.
- Keeps no-scroll compact popovers.


## V2.7.1 simulation restored

- Fixes simulation crash caused by roster objects duplicated inside QUESTS.
- Filters QUESTS to valid quest objects only.
- Adds runtime simulation test during generation.


## V2.8.0 final systems

- Adds ES/EN toggle.
- Adds bracket and line-by-line matchup in simulation.
- Adds more Chronos and incremental objectives.
- Restores western rosters into ROSTERS and cleans QUESTS.
- Updates difficulty handicap labels.
