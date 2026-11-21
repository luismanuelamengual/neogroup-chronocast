# NeoGroup ChronoCast

Juego de cartas coleccionables **sin turnos**, al estilo de _Shadow Era_: en cada fase los dos jugadores programan a la vez 5 acciones y después se ejecutan en paralelo, paso por paso. Gana el primero que derrota al héroe rival. Se publica como PWA en Vercel y en Google Play como TWA.

El diseño completo (reglas, cartas, tienda, PvP, campañas, arquitectura y hoja de ruta) está en [`docs/PLAN.md`](docs/PLAN.md). Este repositorio va por la **fase 6**: sobre la base del proyecto (auth, i18n, PWA, base de datos, tema pastel, landing y menú principal) están el motor de combate, el formato de las cartas, un set de prueba de 30 cartas, la pantalla de batalla contra la CPU (`/practice`), la elección del héroe inicial con su starter (`/welcome`), el tutorial guiado, la colección (`/collection`), los mazos con su editor (`/decks`) la tienda (`/shop`: sobres, cartas sueltas, desbloqueos y venta), el PvP en línea (`/lobby`: salas públicas y privadas, partida rápida), el ranking (`/ranking`) y las campañas contra la CPU (`/campaign`: una por héroe inicial, de 10 combates con jefe final).

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **MUI** + **SASS** (un `index.scss` por componente, mobile-first)
- **Auth.js v5** (Google + email/contraseña con verificación por email y recupero de contraseña vía Resend)
- **@neogroup/neorm** para el acceso a datos (PostgreSQL; SQLite en memoria en los tests)
- **zustand** para los stores del cliente
- **Serwist** para PWA / offline
- Tipografías self-hosted en `public/fonts` (Lilita One y Nunito)
- UI en inglés (por defecto) y español

## Getting started

1. Instalar dependencias:

   ```bash
   yarn install
   ```

2. Crear el archivo de entorno y completar `AUTH_SECRET` (`openssl rand -base64 32`), las credenciales OAuth de Google, `RESEND_API_KEY` y los `DB_*`:

   ```bash
   cp .env.example .env
   ```

   - **Google OAuth**: en Google Cloud Console crear un OAuth Client (Web) con redirect URI `http://localhost:3000/api/auth/callback/google` (y la del dominio productivo).
   - Sin `RESEND_API_KEY` los mails no se envían: el link de verificación / reseteo se imprime en la consola del servidor.

3. Levantar PostgreSQL local (puerto 5434, para no chocar con Crisol), correr las migraciones y el seed (usuarios demo `demo@chronocast.app` y `rival@chronocast.app`, los dos con `demo1234`):

   ```bash
   yarn db:local:up
   yarn db:migrate      # crea la base si no existe
   yarn db:seed
   ```

   Los dos usuarios demo arrancan con 20.000 de oro y su starter para probar la tienda; con dos navegadores (o una ventana de incógnito) se puede jugar una partida PvP entre ellos. Para darle oro a otro jugador (por ejemplo tu cuenta de Google): `yarn db:gold <email> [cantidad]` (10.000 por defecto; nunca corre contra producción).

   Para recrear la base local desde cero: `yarn db:reset` y después `yarn db:seed`.

4. Levantar el servidor de desarrollo:

   ```bash
   yarn dev
   ```

## Project structure

Igual que en Crisol, el código está organizado en **módulos** dentro de `app/` (no hay carpeta `src/`). Cada módulo es un _route group_ de Next.js que encapsula todo lo relacionado con esa funcionalidad. Todo el código está en inglés; el español existe solo como traducción (`app/i18n/messages/es.ts`).

```
app/
  layout.tsx              Root layout (tema, fuentes, service worker, toasts, GTM)
  page.tsx                Entry point: landing pública o redirección al menú principal
  globals.scss            Tokens de diseño (fondos pastel, colores de facción y rareza, safe areas)
  components/             Componentes compartidos (ThemeRegistry, GameButton, GamePanel, Backdrop, Logo, Loading, PlayerAvatar)
  models/                 Modelos compartidos (User, UserDto, ApiResponse, ApiException)
  hooks/                  Hooks compartidos (useRequests, useNotifications, useLoadingData, useInstallPrompt...)
  utils/                  Utilidades compartidas (api-server, email, urls, users, environment, version)
  i18n/                   Idiomas: diccionarios, provider y helpers de servidor
  (auth)/                 Autenticación (login, registro, verificación de email, recupero de contraseña)
  (public)/               Landing, política de privacidad y borrado de cuenta (públicas)
  (pwa)/                  Manifest, service worker (Serwist), página offline, banner de instalación, assetlinks
  (protected)/            Módulos que requieren sesión
    components/AppShell/  Contenedor de las páginas autenticadas
    stores/users.ts       Store con el usuario logueado
    (home)/               Menú principal (/menu): oro, Prestigio y las secciones del juego
    (engine)/             Motor de combate puro (sin React ni base): estado, fases, palabras clave, efectos, reglas de mazo, rating, IA
    (onboarding)/         Primera visita (/welcome): elección del héroe inicial y apertura del starter
    (collection)/         Colección (/collection), mazos y editor (/decks): user_cards, decks, deck_cards
    (shop)/               Tienda (/shop): sobres con su sorteo y apertura, cartas sueltas, desbloqueos, venta y venta rápida
    (campaign)/           Campañas (/campaign): datos de cada campaña, progreso, verificación del resultado y premios
    (pvp)/                PvP en línea (/lobby, /match/<id>): salas, servidor autoritativo, plazos, polling, abandono, rating y oro
    (ranking)/            Ranking (/ranking): top 100 por Prestigio y ligas
    (battle)/             Pantalla de batalla y práctica contra la CPU (/practice): store, proyección, objetivos, animaciones y registro
    (cards)/              Catálogo: cards/** (un archivo por carta), defineCard, starters, CardView
    (art)/                Páginas de desarrollo: /dev/cards (todo el catálogo dibujado)
    (account)/            Perfil del jugador (nombre, idioma, borrado de cuenta)
proxy.ts                  Protección de rutas (middleware de Next.js — tiene que estar en la raíz)
database/migrations/      Migraciones (yarn db:migrate)
scripts/                  migrate / reset / seed / gold de la base, cards-index, duel, campaign y economy
tests/                    Tests (Vitest)
docs/PLAN.md              Plan de implementación
```

### Anatomía de un módulo

```
app/(module)/
  components/      Componentes del módulo — cada uno en su carpeta: index.tsx + index.scss
  models/          Entidades neorm (una por tabla) y tipos/DTOs del FE
  stores/          Stores zustand del módulo
  hooks/           Hooks del módulo — acá viven también las llamadas a la API (useRequests)
  utils/           Utilidades puras del módulo
  services/        Servicios del BE (lógica de negocio, queries)
  (pages)/         Páginas del módulo (route group: no afecta la URL)
  (api)/           Endpoints del módulo, en (api)/api/<verbNoun>/route.ts
```

Los imports siempre son absolutos con el alias `@/` (lo exige ESLint).

### API endpoints

Siempre `POST` con body JSON, nombre `verbNoun`, respuesta `{ success, data }` / `{ success: false, error: { name, message } }`. Los handlers se envuelven con `withApi` (público) o `withAuth` (requiere sesión, inyecta el `userId`) de `app/utils/api-server.ts`, y los errores se señalizan tirando `ApiException(messageKey, status)`. En el FE, `useRequests()` devuelve `executeRequest<T>(url, payload)`.

## Motor de combate

`app/(protected)/(engine)/` es TypeScript puro y determinístico (el azar sale de una semilla guardada en el estado), así que el mismo código corre en el navegador, en el servidor y en los tests.

- `createMatch({ seed, decks, setup? })` arma la partida (héroes, mazos mezclados, 7 cartas, fase 1 lista). `setup` permite arrancar con aliados, Cronos o vida extra (las situaciones adversas de las campañas).
- `resolvePhase(state, { a, b })` recibe las dos líneas de tiempo de 5 acciones y devuelve el nuevo estado y la lista de eventos (lo que la pantalla de batalla va a animar). Dentro de cada paso las acciones van de la más rápida a la más lenta (`instant`, `fast`, `normal`, `slow`); las de la misma velocidad son simultáneas: el daño cae junto al final del tramo.
- `projectTimeline(state, player, timeline)` simula la línea de un jugador con el rival quieto: sirve para la proyección en pantalla y para la IA.
- `validateDeck(deck)` aplica las reglas de mazo (1 héroe, 40 a 200 cartas contando al héroe, máximo 4 copias, restricciones).
- `planTimeline(state, player, style?)` arma una línea golosa (con un estilo: qué cartas primero, a quién atacar, si generar Cronos). `chooseTimeline(state, player, level)` es la CPU por niveles (`ai/levels.ts`): los niveles 1 y 2 juegan la línea golosa (con algún error a propósito); del 3 al 6 arman una candidata por estilo, la simulan contra las respuestas probables del rival (mirando solo su tablero, nunca su mano) una o dos fases adelante y se quedan con la mejor según `ai/evaluate.ts`. Es determinística: la misma partida da siempre la misma jugada.
- Las constantes de las reglas están todas en `(engine)/data/rules.ts`.

### La pantalla de batalla

`app/(protected)/(battle)/` corre la partida entera en el navegador con el motor (la práctica no guarda nada ni da premios):

- **Store** (`stores/battle.ts`, zustand): mulligan, la línea de tiempo que se está programando, el reloj de 90 s, la CPU (`planTimeline`) y la reproducción de la resolución.
- **Programar**: se toca una carta de la mano (jugarla en un slot u objetivo, o "Generar Cronos"), un aliado (atacar un slot rival o moverse a uno propio) o el héroe (arma o habilidad). Cada acción se valida con la **proyección** (`utils/projection.ts`): si fallaría aunque el rival no haga nada, no entra. El tablero muestra cómo queda (lo invocado o movido se ve translúcido) y cada casillero los Cronos que quedan. Tocar un casillero lo quita.
- **Resolver**: `resolvePhase(..., { frames: true })` devuelve una foto del tablero después de cada tramo de velocidad. La pantalla las reproduce una por una con sus animaciones (`utils/effects.ts`): el plan del rival que se da vuelta casillero por casillero, flechas de cada ataque (`AttackArrows`, punteadas si falla), embestidas, golpes, números flotantes, invocaciones, aliados que se deslizan al moverse, una nube donde muere uno, el tablero que tiembla con un golpe fuerte a un héroe y el cartel "Fase N". Botón ×2 y registro escrito (`utils/describeEvent.ts`).
- **Sonido**: cada momento de la resolución suena con hasta 4 efectos (`utils/battleSounds.ts`), más los de programar (poner y quitar acciones, Listo, el tic de los últimos 10 s). Música de batalla, de jefe en el combate 10 de cada campaña, y de victoria o derrota.
- La proyección (y la CPU) no ven las trampas boca abajo del rival.

## Cartas

Cada carta es un archivo en `app/(protected)/(cards)/cards/` que exporta `defineCard({...})`. La carpeta dice quién puede usarla:

| Carpeta               | Restricción                                   |
| --------------------- | --------------------------------------------- |
| `neutral/`            | Cualquier héroe                               |
| `factions/<faction>/` | Los héroes de esa facción                     |
| `classes/<class>/`    | Los héroes de esa clase                       |
| `heroes/<hero-id>/`   | El héroe (su archivo) y sus cartas exclusivas |

- El `id` es el nombre del archivo (kebab-case) y todo está en inglés. La lógica se escribe con los hooks (`onPlay`, `onEnter`, `onDeath`, `onPhaseStart`, `onTrigger`...) y los efectos reutilizables de `(engine)/effects`.
- `defineCard` valida el formato (campos por tipo, costo, precio dentro del rango de su rareza, vida de héroe entre 90 y 120) y tira error al importar si algo está mal.
- **Índice automático**: `yarn cards:index` regenera `cards/index.generated.ts` con un import por archivo. Corre solo antes de `yarn dev`, `yarn build` y `yarn test`, así que agregar una carta es solo crear su archivo. `yarn cards:index --check` falla si está desactualizado.
- **`/dev/cards`** (solo fuera de producción, con sesión iniciada) dibuja todo el catálogo con `CardView`.
- **El catálogo**: 500 cartas coleccionables (88 neutrales, 40 por facción, 25 por clase, 12 héroes con 5 cartas propias cada uno) con el reparto de rarezas del plan (170 comunes, 120 poco comunes, 90 raras, 55 épicas, 35 legendarias, 18 exóticas y 12 míticas), más las cartas de los 12 jefes de campaña. `tests/unit/cards.test.ts` controla esos números, que ninguna carta tenga stats por encima del presupuesto de su costo (la rareza no da números más grandes) y que cada carta se pueda jugar en una partida.
- **Textos en español**: `app/i18n/cards/es.ts` (`CARDS_ES`, por id: nombre, texto, frase y habilidad del héroe). `CardView` muestra la carta en el idioma del jugador con `translateCard`; lo que no está traducido sale en inglés.
- **`yarn duel`** juega 100 partidas CPU contra CPU (nivel 3) entre cada par de héroes starter y muestra el porcentaje de victorias, empates y fases promedio. `yarn duel all [partidas]` enfrenta a los 12 héroes entre sí y muestra la parte de victorias de cada uno; `yarn duel <heroA> <heroB> [partidas]` para un cruce puntual.

Starters (`(cards)/data/starters.ts`): Legate Varro (Bronze, guerrero), Ilyra Starweaver (Arcane, maga) y Kora Wildfang (Primal, cazadora), cada uno con su héroe + 39 cartas comunes y poco comunes. Los otros 9 héroes tienen un **mazo básico** en `(cards)/data/heroDecks.ts` (`basicDeck(heroId)`), que usan la CPU en las campañas y los scripts de balance.

### Arte

- **`yarn art:catalog`** escribe `art/catalog.csv` (`batch, file, width, height, prompt`, un lote por grupo) y `art/catalog.md` con el prompt de cada imagen: el estilo base, el toque de la facción (`scripts/art/factions.ts`) y el `art.subject` de la carta. Cartas en 1024 × 1280; los héroes tienen además un retrato de 1024 × 1024 (`<hero-id>-portrait`).
- Las imágenes generadas van en `art/source/cards/<archivo>.png` (o jpg/webp; la carpeta no se versiona). **`yarn art`** las recorta y achica a WebP en `public/cards/` y actualiza `public/cards/manifest.json`, mostrando cada imagen en el momento en que la procesa (`ok`, `sin cambios`, `falta`, `error`), una barra de progreso y al final lo que falta por lote. Solo procesa lo que cambió (`--force` para todo). **`yarn art --watch`** se queda mirando la carpeta y procesa cada imagen apenas aparece. Una carta sin imagen se dibuja con su color de facción.

## Base de datos

| Tabla                       | Contenido                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------- |
| `users`                     | Cuenta del jugador, más `rating` (Prestigio, arranca en 1200), `gold`, `pvpMatches` y `lastWinAt` |
| `email_verification_tokens` | Tokens de verificación de email                                                                   |
| `password_reset_tokens`     | Tokens de recupero de contraseña                                                                  |
| `user_cards`                | Copias de cada carta que tiene cada jugador (héroes incluidos)                                    |
| `decks` / `deck_cards`      | Mazos guardados: héroe, nombre y copias de cada carta                                             |
| `shop_unlocks`              | Rarezas desbloqueadas para comprar cartas sueltas                                                 |
| `matches`                   | Partidas PvP: sala, jugadores, mazos, estado del motor, planes, plazos, resultado y premios       |
| `campaign_progress`         | Combates ganados en la campaña de cada héroe (`stage`, de 0 a 10) y cuándo se completó            |

El catálogo de cartas no se guarda en la base: vive en el código y las tablas lo referencian por id.

En PostgreSQL los nombres de columna sin comillas quedan en minúscula (`heroId` vuelve como `heroid`): las filas crudas de `DB.table(...)` se leen con `column(row, 'heroId')` de `app/utils/rows.ts` (las entidades no lo necesitan).

## Colección y mazos

- **Primera visita**: si el jugador todavía no eligió héroe, `/menu` lo manda a `/welcome`. Ahí elige uno de los 3 héroes iniciales y `POST /api/chooseStarter` le da el héroe, sus 39 cartas y un mazo armado con ellas (una sola vez). Después puede jugar el tutorial (`/practice?tutorial=1`, una partida guiada con consejos) o ir al menú.
- **Colección** (`/collection`): todo el catálogo con lo que tiene el jugador (lo demás atenuado), filtros por tipo, facción, clase, rareza, costo, "usables por" un héroe y "solo las que tengo", y el detalle de cada carta.
- **Mazos** (`/decks`): lista con "listo para jugar" o "incompleto", nuevo mazo para cualquier héroe que tenga, editar y borrar. El **editor** (`/decks/<id>` o `/decks/new?hero=<id>`) muestra a la izquierda las cartas propias que puede usar ese héroe y a la derecha el mazo: nombre, contador X/40 (hasta 200), curva de costos, reglas rotas en vivo y la lista con +/−.
- Un mazo se puede guardar incompleto (y entonces no se puede jugar). Nunca se aceptan cartas desconocidas, un héroe que no tiene ni más copias de las que tiene (`POST /api/saveDeck`). Las reglas viven en `(collection)/utils/deckProblems.ts` (las de `validateDeck` más la propiedad de las cartas).
- La práctica ofrece los mazos listos del jugador (o los iniciales si no tiene ninguno).

## Tienda y economía

- **Sobres** (`(shop)/data/packs.ts`): Viajero (300), Cronista (800), Guardián (2.000), Eterno (5.000) y uno por facción (1.000), de 8 cartas, con las probabilidades de cada carta visibles en la tienda. El sorteo se hace en el servidor (`POST /api/buyPack`, con `utils/drawPack.ts`, determinístico por semilla) y la pantalla anima la apertura: las cartas boca abajo se dan vuelta de la rareza más baja a la más alta, las mejores brillan y las nuevas llevan un cartel. **Garantía**: después de 10 sobres Guardián o Eterno seguidos sin legendaria, el siguiente trae una (`users.packsWithoutLegendary`). Mientras el catálogo no tenga cartas de una rareza, sale la mejor disponible por debajo.
- **Cartas sueltas**: cada carta a su propio `price`. Las comunes están abiertas; las demás rarezas se desbloquean de a una y en orden (`(shop)/data/prices.ts`: 1.000, 3.000, 8.000, 20.000, 50.000 y 100.000). Ni los héroes ni las cartas premio de campaña (`reward: true`) se venden ni salen en sobres.
- **Venta**: el 15 % del precio, redondeado. Pide confirmación si la carta es épica o mejor, o si venderla deja incompleto un mazo guardado. La **venta rápida** vende las copias que pasan de 4 (de 1 si es `unique`) sin tocar las que usa algún mazo, y muestra el total antes de confirmar.
- Todo cambio de oro pasa por el servidor dentro de una transacción. Las APIs: `buyPack`, `unlockRarity`, `buyCard`, `sellCards`, `quickSell`.
- **`yarn economy [partidas por día] [% de victorias] [simulaciones]`**: el oro por día de un jugador típico (con los premios de `(shop)/data/gold.ts`), los días para desbloquear cada rareza y para completar la colección de cada héroe starter comprando sueltas o sobres (con venta rápida de las sobrantes).

## PvP y ranking

- **Lobby** (`/lobby`): partida rápida (se une a la sala pública más vieja o crea una), crear sala pública o privada (con un código de 6 letras, también por link `/lobby?code=XXXXXX`), lista de salas públicas abiertas y unirse por código. Una sala sin rival se cierra a los 10 minutos. Un jugador tiene una sola partida activa a la vez.
- **Servidor autoritativo** (`(pvp)/services/matches.ts`): la partida vive en `matches` con el estado del motor. Los clientes mandan el mulligan (`submitMulligan`, 30 s) y el plan de cada fase (`submitPlan`, saneado en el servidor) y consultan `getMatchState` cada 1,5 s (`(pvp)/utils/matchChannel.ts`, cambiable por WebSockets). La fase se resuelve en cuanto llegan los dos planes o cuando vence el plazo (más 3 s de gracia), en el pedido que llegue primero, con bloqueo optimista por `version`.
- **Información oculta**: cada jugador recibe el estado sin la mano ni las trampas del rival ni los mazos (`(pvp)/utils/redact.ts`); las cartas jugadas se revelan con la resolución.
- **Abandono y rendición**: si un jugador no programa nada en 3 fases seguidas pierde por abandono (si son los dos, nadie gana). Rendirse cuenta como derrota. Ninguno de los dos cobra oro.
- **Premios** (`(pvp)/utils/rewards.ts`): en partidas públicas, Prestigio por Elo y oro por resultado (más un extra por ganar a alguien más fuerte) y +100 por la primera victoria del día (UTC). Las privadas no mueven el Prestigio, pagan la mitad y, contra el mismo rival, solo las 3 primeras del día.
- **Nombres públicos**: apodo, o nombre e inicial del apellido; nunca el email.
- **Ranking** (`/ranking`): top 100 por Prestigio entre quienes jugaron al menos una partida pública, con su liga (`(pvp)/data/leagues.ts`) y la posición del jugador. Empates comparten el puesto.

## Campañas

- **Una por héroe** (`(campaign)/data/campaigns/<hero-id>.ts`, las 12), de 10 combates con una historia corta (en los diccionarios, `campaigns.<hero-id>`). Se juega con un mazo listo de ese héroe; ganar un combate desbloquea el siguiente. El mapa (`/campaign/<hero-id>`) muestra cada combate con su rival, dificultad, situación adversa y premios.
- **Dificultad** (`(campaign)/data/difficulty.ts`): el nivel de la CPU sube de 1 a 6 y cada combate puede darle al rival una ventaja de arranque (`cpuSetup`: aliados en juego, vida extra, ubicación, arma) o quitarle cartas al jugador (`playerSetup`). Hasta el combate 4 el rival juega un mazo al azar dentro de lo que puede usar; del 5 en adelante, su mazo básico (`basicDeck`). El 10 es un **jefe**: un héroe propio con poder pasivo y dos cartas que solo juega la CPU (`boss: true`: no aparecen en la colección, sobres ni tienda).
- **Sin trampas**: la partida corre en el navegador. Al empezar, `POST /api/startCampaignBattle` da la semilla en un ticket firmado (con `AUTH_SECRET`, vale 6 horas) que lleva el mazo. Al ganar, el cliente manda el ticket con su mulligan y sus líneas de tiempo a `POST /api/finishCampaignBattle`; el servidor **vuelve a jugar la partida** con el mismo motor y la misma IA (`(campaign)/utils/playCampaign.ts`) y solo paga si el jugador gana esa repetición.
- **Premios del primer triunfo** de cada combate: de 50 a 300 de oro, un sobre gratis en el 5 (Cronista) y en el 10 (Guardián), y al vencer al jefe la **carta exclusiva** del héroe (`reward: true`: no se vende ni sale en sobres). Volver a ganar un combate no paga nada.
- **`yarn campaign [hero-id] [partidas] [nivel del jugador]`**: qué tan seguido gana el mazo básico del héroe (jugado por la CPU al nivel 3, o el que se pase) cada combate de su campaña.

## Interfaz

Fondos claros y pastel (crema, lavanda, menta, celeste y durazno) con paneles blancos, para que las cartas, muy coloridas y con borde oscuro, resalten con alto contraste. Títulos y botones en Lilita One, texto en Nunito.

- **Tokens**: fondos, tinta (`--color-outline`), acentos, colores de facción (`--faction-*`), de rareza (`--rarity-*`) y de valores del juego (vida, Cronos, armadura, ataque) en `app/globals.scss`, espejados en `GAME_COLORS` del tema de MUI.
- **Sonido** (`app/(protected)/(art)/`): un solo contexto Web Audio con volumen de música, de efectos y silencio, guardados en el dispositivo (el parlante del menú principal). Los efectos sin archivo se sintetizan por código (`utils/sfxSynth.ts`), así el juego suena desde el primer día; la música es silencio hasta que haya archivos. Los archivos van en `art/source/music/` y `art/source/sfx/` y `yarn art` los copia a `public/audio/` (ver [art/music.md](art/music.md)). El click de botones es global (`utils/uiSounds.ts`). Para escuchar todo: `/dev/sounds` (solo en desarrollo).
- **Rendimiento**: las listas largas (colección, editor de mazos, tienda, venta) muestran las cartas de a 40 y cargan más al acercarse al final (`useIncrementalList`). En un celular de gama baja (4 núcleos o menos, o poca memoria: `utils/lowEnd.ts`) se apagan los desenfoques detrás de los diálogos, las cartas flotantes del fondo y las animaciones infinitas; con "reducir movimiento" del sistema, también.
- **Piezas**: `GameButton` (botón vivo con contorno de tinta: dorado, cian, magenta, lima, violeta o blanco), `GamePanel` (panel blanco con título), `Backdrop` (cartas de colores flotando detrás de los menús) y `Logo`.

## PWA

Manifest en `/manifest.webmanifest`, service worker de Serwist en `/serwist/sw.js`, página offline `/~offline` e íconos en `public/`. El arte de las cartas (`public/cards/`) se guarda en el service worker a medida que se usa.

### Google Play (Trusted Web Activity)

La app Android es una TWA generada con Bubblewrap en el repo aparte **`neogroup-chronocast-android`** (package `app.chronocast.twa`): su README explica la clave de firma, `bubblewrap update && bubblewrap build` y cómo sacar una versión nueva. Del lado web:

- `/privacy` y `/delete-account`: públicas con o sin sesión (`OPEN_PATHS` en `auth.config.ts`). El email de contacto sale de `CONTACT_EMAIL` (por defecto `support@chronocast.app`).
- Borrado de cuenta desde Mi perfil (`POST /api/deleteAccount`).
- Orientación horizontal (`orientation: landscape` en el manifiesto y aviso de "Girá el teléfono" en el navegador).
- `/.well-known/assetlinks.json` con `ANDROID_PACKAGE_NAME` y `ANDROID_SHA256_CERT_FINGERPRINTS`.
- Íconos (`favicon.ico`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`) y el ícono de la ficha (`art/store/icon-512.png`), dibujados por código con **`yarn icons`** (`scripts/icons/generate.ts`).
- **[docs/PLAY_STORE.md](docs/PLAY_STORE.md)**: los textos de la ficha en español e inglés, los gráficos, la clasificación de contenido, la seguridad de los datos y la checklist del primer release.

## Versiones

La versión sale de `package.json` (hoy **1.0.0**) y se ve abajo del menú principal junto al commit. Para cada release: subir la versión, deploy, tag `vX.Y.Z` y Release de GitHub con `ChronoCast.apk`. La app de Play solo necesita una versión nueva si cambia la TWA (íconos, colores, dominio): el juego se actualiza con cada deploy.

## Testing

```bash
yarn test
```

- `tests/unit` — diccionarios (mismas claves y placeholders en todos los idiomas), traductor e idiomas; el motor regla por regla (con cartas de prueba de `tests/support/testCards.ts`), cada carta del catálogo jugada en una partida, el índice al día, los starters legales, las reglas de mazo, el rating, la IA y sus niveles, las campañas (mazos legales, dificultad creciente, historias traducidas, repetición exacta); las fotos de la resolución, la proyección, los objetivos, el registro y las animaciones de la batalla; los sobres (contenido, probabilidades, garantía, facciones y rarezas faltantes), precios, desbloqueos y venta rápida.
- `tests/flows` — contra SQLite en memoria con las migraciones reales: borrado de cuenta (con su colección y mazos), valores iniciales del jugador, el starter (una sola vez), guardar, editar y borrar mazos, propiedad de las cartas y mazos ajenos; la tienda: comprar sobres, garantía, desbloqueos, cartas sueltas, venta y venta rápida sin romper mazos; el PvP (salas, mulligan y planes, plazos, abandono, rendición, premios, ranking); las campañas (combates bloqueados, verificación de la repetición, tickets falsos o vencidos, premios del primer triunfo, sobre del combate 5 y carta exclusiva del jefe).

## Idiomas (i18n)

Inglés (por defecto) y español. El jugador elige el idioma en **Mi perfil**.

- **Diccionarios**: `app/i18n/messages/es.ts` (referencia de la forma) y `en.ts` (debe tener la misma forma; el compilador y `tests/unit/i18n.test.ts` lo verifican). Las claves se usan con `t('grupo.clave', { param })`; un mensaje `{ one, other }` es un plural que se elige con `count`.
- **Componentes cliente**: `const t = useT()` (o `const { t, locale } = useI18n()`) de `app/i18n/I18nProvider`. **Servidor**: `const t = await getT()` de `app/i18n/server`.
- **Errores de la API**: `new ApiException('errors.clave', status, params)`; la respuesta los envía traducidos.
