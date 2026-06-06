# Chrono Lab - Ideas para modo caótico

Estas ideas están pensadas para una versión desbloqueable después de 3 victorias. No usan nombres reales de polémicas para evitar convertir el juego en chisme/sanciones reales; son eventos ficticios inspirados en situaciones competitivas posibles.

1. Coach Sub: el Top rival no puede jugar y entra el coach. -8 power rival en Top.
2. Botlane Muted: el Bot y Support rival pierden coordinación. -3 sinergia rival.
3. Visa Diff: el rival juega con suplente aleatorio. Reemplaza un rol por rating 82-86.
4. Scrim Leak: ves el plan rival. +5% chance en el primer mapa.
5. Pause Abuse: se reinicia momentum del mapa actual.
6. Chrono Reset: paga coins para repetir el último mapa perdido una vez por run.
7. Tilt Check: si pierdes dos mapas seguidos, 50% de recuperar +3 power.
8. Crowd Buff: si juegas final, +2 clutch al azar.
9. Draft Disaster: el rival pierde un comfort pick. -2 rival en ese mapa.
10. Baron Call Gone Wrong: 20% de throw rival si tomó Baron.
11. Elder Flip: si el mapa llega a 38:00+, hay 25% de Elder steal.
12. Reverse Sweep Script: si vas 0-2 en BO5, desbloquea +6 comeback power.
13. Referee Delay: pausa narrativa; reduce tilt después de derrota.
14. Rookie Shock: jugador con menor rating puede activar upset bonus.
15. Chrono Tax: usar poderes baja recompensa final para que no sea gratis.

Implementación recomendada:
- desbloquear con `stats.wins >= 3`
- usar 1 Chrono activo por run
- cobrar 40-80 coins según poder
- registrar Chrono usado en historial para que el resultado no parezca limpio
