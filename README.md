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
