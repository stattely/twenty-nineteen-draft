# V2.7.1 Simulation restored

Root cause:
A previous merge duplicated western roster objects into `QUESTS`. Simulation calls `roundModifier()`, which expected every QUEST item to have `.ok()`. Roster objects do not, so simulation crashed with:

`TypeError: x.ok is not a function`

Fix:
- QUESTS now filters invalid objects with `.filter(q => q && typeof q.ok === 'function')`.
- `roundModifier()` also guards against invalid quest objects.
- Runtime test executes a full simulated run with instant waits.
