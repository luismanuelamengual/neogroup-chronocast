# Ficha de Google Play y primer release

Todo lo que pide Play Console para publicar ChronoCast, listo para copiar. La app Android (TWA) está en el repo aparte `neogroup-chronocast-android` (ver su README).

## Datos de la app

| Campo                    | Valor                                                        |
| ------------------------ | ------------------------------------------------------------ |
| Nombre                   | ChronoCast                                                   |
| Package                  | `app.chronocast.twa`                                         |
| Categoría                | Juegos → Cartas                                              |
| Etiquetas                | Cartas coleccionables, Estrategia, Multijugador, Un jugador  |
| Idioma por defecto       | Español (Latinoamérica), `es-419`; traducción en inglés `en-US` |
| Gratis / pago            | Gratis. Sin anuncios. Sin compras con dinero real            |
| Política de privacidad   | `https://neogroup-chronocast.vercel.app/privacy`             |
| Borrado de cuenta        | `https://neogroup-chronocast.vercel.app/delete-account` (y desde el perfil) |
| Orientación              | Horizontal                                                   |

## Textos

### Español

**Descripción breve** (máx. 80 caracteres):

> Cartas sin turnos: programá 5 acciones y chocá en simultáneo con tu rival.

**Descripción completa**:

> **ChronoCast** es un juego de cartas coleccionables sin turnos. Los dos jugadores programan a la vez una línea de tiempo de 5 acciones y después se resuelven juntas, paso por paso: las más rápidas primero, y lo que choca en el mismo instante pasa al mismo tiempo. Leé a tu rival, anticipá su jugada y derrotá a su héroe.
>
> **Un héroe, un mazo, una estrategia**
> • 12 héroes de 6 facciones (Bronce, Arcana, Primal, Relojería, Neón y Vacío) y 4 clases (Guerrero, Mago, Cazador y Místico), cada uno con su habilidad y sus cartas exclusivas.
> • 500 cartas: aliados, hechizos, armas, armaduras, lugares y trampas, de común a mítica.
> • Mazos de 40 a 200 cartas. Generá Cronos descartando y gastalos en tus acciones.
>
> **Jugá como quieras**
> • Campañas: 10 combates por héroe contra la computadora, con un jefe al final y premios.
> • PvP: salas públicas y privadas, con ranking de Prestigio.
> • Práctica contra la CPU para probar tus mazos.
>
> **Coleccioná sin pagar**
> • El oro solo se gana jugando: abrí sobres, comprá cartas sueltas y vendé las repetidas.
> • Las probabilidades de cada sobre están siempre a la vista en la tienda.
>
> Sin anuncios y sin compras con dinero real.

### English

**Short description**:

> A turnless card game: program 5 actions and clash with your rival at once.

**Full description**:

> **ChronoCast** is a turnless collectible card game. Both players program a timeline of 5 actions at the same time, then both resolve together, step by step: the fastest first, and whatever clashes in the same instant happens at once. Read your rival, predict their move and defeat their hero.
>
> **One hero, one deck, one strategy**
> • 12 heroes from 6 factions (Bronze, Arcane, Primal, Clockwork, Neon and Void) and 4 classes (Warrior, Mage, Hunter and Mystic), each with its own ability and exclusive cards.
> • 500 cards: allies, spells, weapons, armor, locations and traps, from common to mythic.
> • Decks of 40 to 200 cards. Discard to build Chronos and spend it on your actions.
>
> **Play your way**
> • Campaigns: 10 battles per hero against the computer, with a boss at the end and rewards.
> • PvP: public and private rooms, with a Prestige ranking.
> • Practice against the CPU to try your decks.
>
> **Collect without paying**
> • Gold is only earned by playing: open packs, buy single cards and sell your duplicates.
> • The odds of every pack are always shown in the shop.
>
> No ads and no real-money purchases.

## Gráficos

| Recurso              | Tamaño                         | De dónde sale                                                   |
| -------------------- | ------------------------------ | --------------------------------------------------------------- |
| Ícono                | 512×512 PNG                    | `art/store/icon-512.png` (`yarn icons`)                         |
| Gráfico destacado    | 1024×500 PNG o JPG, sin transparencia | Prompt de abajo                                          |
| Capturas de teléfono | 2 a 8, 16:9 horizontal (1920×1080) | Las pantallas de la lista de abajo, con el arte real ya cargado |
| Capturas de tablet   | Opcional, 7" y 10"             | Las mismas, en 2560×1600                                        |

**Prompt del gráfico destacado** (el mismo estilo que `art/catalog.md`):

> Collectible card game key art, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, dramatic lighting, wide horizontal framing 1024x500, no text, no frame, no watermark. Six heroes from different eras (a roman legate in bronze armor, a starweaver mage with glowing constellations, a wild huntress with a sabertooth, a steampunk inventor, a neon cyber-ninja, a hooded void sorcerer) charging toward the center from both sides, where a giant turquoise hourglass cracks open into a time rift full of floating clock gears and cards. Soft pastel cream sky at the edges so the logo can go on top.

**Capturas sugeridas** (en este orden):

1. La batalla en plena resolución, con flechas de ataque y números de daño.
2. La programación de la línea de tiempo, con la proyección translúcida.
3. La colección con cartas de varias facciones.
4. La apertura de un sobre con una carta épica o mejor.
5. El mapa de una campaña con el jefe.
6. El editor de mazos con la curva de costos.

## Clasificación de contenido (cuestionario IARC)

- Categoría: Juego.
- Violencia: sí, **fantástica y caricaturesca** (criaturas y héroes que se atacan, sin sangre ni realismo).
- Sangre, contenido sexual, lenguaje vulgar, drogas, alcohol, tabaco: no.
- Apuestas simuladas: no. Los sobres al azar se compran solo con oro del juego, que no se puede comprar con dinero real ni cambiar por nada fuera del juego.
- Interacción entre usuarios: sí, partidas en línea. No hay chat; el apodo es lo único que ve el rival.
- Comparte la ubicación: no. Compras digitales: no.

Resultado esperado: PEGI 7 / ESRB Everyone 10+ o similar.

## Seguridad de los datos

| Pregunta                                  | Respuesta                                                                 |
| ----------------------------------------- | ------------------------------------------------------------------------- |
| ¿Recopila o comparte datos?               | Recopila; no comparte con terceros                                        |
| Datos recopilados                         | Información personal: correo, nombre y apodo (para la cuenta). Actividad en la app: partidas, colección y mazos (funcionalidad del juego) |
| Analítica                                 | Solo si está configurado `NEXT_PUBLIC_GTM_ID`: declarar "Actividad en la app → Interacciones" con fines de analítica |
| ¿Cifrado en tránsito?                     | Sí (HTTPS)                                                                |
| ¿Se pueden pedir que se borren?           | Sí: desde el perfil o en `/delete-account`                                |
| ¿Es obligatorio?                          | Sí, para tener cuenta                                                     |

## Público objetivo

Mayores de 13 años (no está dirigida a niños). Así no aplica la política de familias.

## Checklist del primer release (1.0.0)

1. Deploy en Vercel de la versión 1.0.0, con las variables de producción (ver `.env.example`).
2. Generar las imágenes con `art/catalog.md`, ponerlas en `art/source/cards/` y correr `yarn art`; commitear `public/cards/`.
3. (Opcional) Música y efectos según `art/music.md`, y `yarn art`.
4. En `neogroup-chronocast-android`: crear la clave, `bubblewrap update && bubblewrap build` (ver su README).
5. Configurar `ANDROID_PACKAGE_NAME` y `ANDROID_SHA256_CERT_FINGERPRINTS` en Vercel y revisar `/.well-known/assetlinks.json`.
6. En Play Console: crear la app, completar la ficha con este documento, la clasificación, la seguridad de los datos y el público objetivo.
7. Subir el `.aab` a **Prueba interna**, instalar desde Play y probar: login con Google, una partida, abrir un sobre, que abra sin barra de Chrome y en horizontal.
8. Pasar a **Prueba cerrada** (las cuentas personales nuevas necesitan 12 testers durante 14 días antes de producción) y después a **Producción**.
9. Crear el tag `v1.0.0` y la Release de GitHub con `ChronoCast.apk`.
