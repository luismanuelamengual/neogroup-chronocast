# Música y efectos de sonido

## Dónde van los archivos

- Música: `art/source/music/<nombre>.mp3` (u `.ogg`, o los dos).
- Efectos (opcional): `art/source/sfx/<nombre>.mp3`. Un efecto sin archivo se sintetiza por código (`app/(protected)/(art)/utils/sfxSynth.ts`); un archivo con el mismo nombre lo reemplaza.
- Después: `yarn art`. Copia el audio a `public/audio/`, lo anota en `public/audio/manifest.json` y lista la música que falta.
- Para escuchar todo: `/dev/sounds` (solo en desarrollo).

Una pista que falta queda en silencio; no rompe nada.

## Pistas

| Archivo    | Dónde suena                                       | Qué buscar                                                   |
| ---------- | ------------------------------------------------- | ------------------------------------------------------------ |
| `menu`     | Menú, colección, mazos, tienda, salas, ranking    | Alegre y con aire de aventura; marimba, cuerdas, campanitas  |
| `campaign` | Lista y mapa de campañas                          | Viaje en el tiempo: misterioso pero luminoso, relojes, arpa  |
| `battle`   | Partidas (PvP, práctica y combates de campaña)    | Con ritmo y energía, 120–150 BPM, que no canse en loop       |
| `boss`     | El combate 10 de cada campaña (el jefe)           | Épico e intenso, coros y percusión                           |
| `victory`  | Victoria (una vez)                                | Fanfarria corta, 5–20 s, sin loop                            |
| `defeat`   | Derrota o empate (una vez)                        | Tema corto y triste, 5–20 s, sin loop                        |

## Efectos

Los nombres están en `SFX` de `app/(protected)/(art)/data/audio.ts`: `attack`, `hit`, `hero-hit`, `miss`, `armor`, `shield`, `heal`, `buff`, `stun`, `summon`, `death`, `spell`, `attach`, `trap-set`, `trap`, `move`, `chronos`, `draw`, `burn`, `fail`, `phase`, `step`, `victory-sting`, `defeat-sting`, `place`, `remove`, `ready`, `tick`, `button`, `cursor`, `menu-open`, `menu-close`, `coin`, `pack-open`, `card-flip` y `rare-reveal`.

## Formato

- MP3 128 kbps (96 alcanza), 44.1 kHz, estéreo: suena en todos lados, iPhone incluido.
- OGG Vorbis loopea sin corte y anda en Android y Chrome; si hay `.ogg` y `.mp3` del mismo nombre, el juego usa OGG donde se puede y MP3 en el resto.
- Las pistas que loopean, de 1:30 a 3:00 y menos de 3 MB. Buscar las marcadas "loop" o "seamless".
- Si una pista suena más fuerte que las demás: `MUSIC_LEVELS` en `app/(protected)/(art)/data/audio.ts` (por ejemplo `boss: 0.7`).

## Licencias

- CC0: ideal, no pide nada.
- CC-BY 3.0 / 4.0: sirve, con crédito.
- Evitar NC (no comercial), GPL y CC-BY-SA.
- Anotar cada pista en `art/source/music/CREDITS.md`: título, autor, URL y licencia.

## Cómo funciona

- Un solo contexto Web Audio con volumen de música, de efectos y silencio (`utils/sound.ts`), que se guardan en el dispositivo. Se cambian con el parlante del menú principal.
- El navegador bloquea el audio hasta el primer toque o tecla: ahí arranca solo. En segundo plano todo se pausa.
- Un tema entra con crossfade sobre el anterior. El del menú queda pausado durante una partida y sigue donde estaba al volver (hasta 3 minutos).
- La música se transmite desde un `<audio>` (no se carga entera en memoria) y pasa por el contexto, así el volumen funciona también en iPhone.
- El click de botones y links es global (`utils/uiSounds.ts`); un elemento dentro de `data-silent` no hace click (la batalla tiene sus propios sonidos).
- En la batalla, cada momento de la resolución suena con hasta 4 efectos distintos (`(battle)/utils/battleSounds.ts`).
