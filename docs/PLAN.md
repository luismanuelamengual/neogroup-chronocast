# ChronoCast — Plan de implementación

Juego de cartas coleccionables al estilo _Shadow Era_, pero **sin turnos**: en cada fase los dos jugadores programan a la vez 6 acciones y después se ejecutan en paralelo, paso por paso. Se publica como PWA en Vercel y en Google Play como TWA, con la misma base técnica y la misma estructura de módulos que `neogroup-crisol`.

Este documento es el plan completo. Todavía no hay código: cada sección dice qué se construye, dónde vive y en qué fase de la hoja de ruta entra. Los números (daño, costos, precios, oro) son un punto de partida y se ajustan con los scripts de simulación (sección 15).

**Convención de idioma:** el documento está en español, pero **todo el código está en inglés**: carpetas, archivos, ids, nombres de cartas, palabras clave, tablas, constantes y prompts de arte. El español existe solo como traducción de la interfaz (sección 7.6). En este plan, los nombres que van en el código aparecen en `monospace` y en inglés.

---

## Índice

1. [Concepto y temática](#1-concepto-y-temática)
2. [Reglas del combate](#2-reglas-del-combate)
3. [Tipos de carta y palabras clave](#3-tipos-de-carta-y-palabras-clave)
4. [Héroes, clases y restricciones de cartas](#4-héroes-clases-y-restricciones-de-cartas)
5. [Rarezas](#5-rarezas)
6. [Reglas de mazo y starter pack](#6-reglas-de-mazo-y-starter-pack)
7. [Una carta = un archivo `.ts`](#7-una-carta--un-archivo-ts)
8. [El catálogo de 590 cartas](#8-el-catálogo-de-590-cartas)
9. [Arte: archivo de prompts y `yarn art`](#9-arte-archivo-de-prompts-y-yarn-art)
10. [Rating (el "ELO"), oro y niveles](#10-rating-el-elo-oro-y-niveles)
11. [Tienda](#11-tienda)
12. [PvP: salas y partidas](#12-pvp-salas-y-partidas)
13. [CPU: campañas por héroe](#13-cpu-campañas-por-héroe)
14. [Interfaz](#14-interfaz)
15. [Arquitectura del código](#15-arquitectura-del-código)
16. [Testing y balance](#16-testing-y-balance)
17. [PWA y Google Play (TWA)](#17-pwa-y-google-play-twa)
18. [Hoja de ruta por fases](#18-hoja-de-ruta-por-fases)
19. [Decisiones tomadas](#19-decisiones-tomadas)

---

## 1. Concepto y temática

El nombre **ChronoCast** sugiere magia del tiempo, y la mecánica central (programar el futuro y verlo desarrollarse) encaja con eso. Propuesta de mundo: la **Grieta del Tiempo** mezcló todas las eras y sus campeones pelean por controlarla. Cada facción es una era:

| Facción (id) | Nombre en pantalla | Era                 | Color dominante              | Identidad de juego                                                   |
| ------------ | ------------------ | ------------------- | ---------------------------- | -------------------------------------------------------------------- |
| `primal`     | Primigenia         | Prehistoria         | Verde lima / naranja         | Bestias grandes, crecer (+ataque/+vida), curación                    |
| `bronze`     | Imperio de Bronce  | Antigüedad          | Rojo / dorado                | Protectores, formaciones (bonos por aliados vecinos)                 |
| `arcane`     | Orden Arcana       | Medioevo mágico     | Azul / violeta               | Habilidades, daño directo, control (aturdir, silenciar)              |
| `clockwork`  | Engranaje          | Era del vapor       | Cobre / amarillo             | Objetos, construcciones, generación extra de Cronos                  |
| `neon`       | Neón               | Futuro              | Cian / magenta               | Velocidad (acciones Rápidas e Instantáneas), trampas, robo de cartas |
| `void`       | Vacío              | Fin de los tiempos  | Violeta oscuro / verde ácido | La pila de descarte: sacrificar y revivir aliados                    |
| `neutral`    | Errantes           | Viajeros del tiempo | Blanco / turquesa            | Cartas que entran en el mazo de cualquier héroe                      |

**Mover aliados entre slots para esquivar es una mecánica general**, disponible para todas las facciones (sección 2.4). Ninguna facción es "la del movimiento"; algunas cartas de cualquier facción pueden premiarlo o abaratarlo.

El recurso se llama **Cronos** (`chronos` en el código). Los nombres en pantalla son propuestas y cambian en los diccionarios de i18n sin tocar el código.

---

## 2. Reglas del combate

### 2.1 El tablero

Cada jugador tiene:

- **Héroe**: en su slot propio, **detrás** de la fila de aliados (más lejos del centro). Tiene **entre 50 y 65 de vida** según el héroe, una habilidad pasiva y una habilidad activa. **Empieza sin arma ni armadura**: las armas y armaduras son cartas que se juegan y se adjuntan al héroe, como en Shadow Era (un lugar para arma y uno para armadura).
- **5 slots de aliados** (1 a 5, en fila delante del héroe). Nunca más de 5 aliados.
- **Soporte**: 5 slots para las cartas que quedan en juego sin ser aliados: trampas (boca abajo) y artefactos (boca arriba, a veces con usos). Se pueden poner tantas trampas o artefactos como slots libres haya (`SUPPORT_SLOTS`).
- **Sin ubicaciones**: las 26 cartas que eran ubicaciones ahora son **artefactos** (van a un slot de soporte, con el mismo efecto) y volvieron al juego: se venden, salen en sobres y entran a los mazos. Las 4 exclusivas de héroe que eran premio de campaña se compran como legendarias. El tipo `location` sigue en `RETIRED_CARD_TYPES` por si quedara alguna carta guardada de ese tipo.
- **Mazo**, **mano** (máximo **7** cartas) y **pila de descarte** (cartas usadas, descartadas, aliados muertos y héroes caídos). Algunas cartas (sobre todo del Vacío) devuelven cartas de la pila al juego.

```
                         RIVAL
          [Mazo] [Descarte]     [Soporte ×5]
                 [ H ] [Arma] [Armadura]         ← héroe rival (atrás)
         [ 1 ][ 2 ][ 3 ][ 4 ][ 5 ]               ← aliados rivales
  ─────────── línea de tiempo: ① ② ③ ④ ⑤   ⏱ 90 s   [Listo] ───────────
         [ 1 ][ 2 ][ 3 ][ 4 ][ 5 ]               ← tus aliados
                 [ H ] [Arma] [Armadura]         ← tu héroe (atrás)
          [Mazo] [Descarte]     [Soporte ×5]
                          VOS          [ mano (máx. 7) ]
```

En pantallas anchas el héroe puede ir al costado de su fila de aliados en lugar de detrás (sección 14.3); nunca delante.

### 2.2 Inicio de la partida

1. El héroe del mazo va directo a su slot (no se mezcla ni se roba).
2. Cada jugador mezcla las otras cartas (con la semilla de la partida: todo el azar es reproducible) y roba **7 cartas**.
3. **Mulligan**: una vez, puede devolver cualquier cantidad de cartas y robar otras tantas.
4. Arranca con 0 de capacidad de Cronos y empieza la fase 1.

### 2.3 La fase

Cada fase tiene tres momentos:

1. **Inicio de fase**: cada jugador roba **1 carta** (en la fase 1 no se roba); robar más depende de las cartas, y todas las facciones tienen formas de hacerlo. Si la mano ya tiene 7, cada carta de más va directo a la pila de descarte. Los Cronos se recargan hasta la capacidad, el héroe gana **1 de energía** (se acumula de fase en fase, hasta 10), los aliados y el héroe quedan listos para atacar otra vez y se disparan los efectos "al inicio de la fase". Después pegan el veneno y las quemaduras.
2. **Programación** (simultánea, con reloj): cada jugador arma su **línea de tiempo** de 6 acciones. Nadie ve lo que programa el otro. Termina cuando los dos tocan **Listo** o cuando pasan los **90 segundos**. Al agotarse el tiempo, lo programado queda fijo y los pasos vacíos son "Esperar".
3. **Resolución**: se ejecutan los 6 pasos en orden. En el paso _n_ se resuelven la acción _n_ del jugador A y la acción _n_ del jugador B (ver 2.5). Después de cada paso se revisa si cayó algún héroe.

Si después del paso 6 los dos héroes siguen en pie, empieza una nueva fase. Gana el primero que derrota al héroe rival. **Si los dos héroes caen en el mismo paso, la partida es un empate.**

### 2.4 Las acciones

Cada una de las 6 acciones de la línea de tiempo es una de estas:

| Acción                     | Qué hace                                                                                                                                   | Costo                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| **Generar Cronos**         | Descarta una carta de la mano a la pila y suma **+1 de capacidad de Cronos para siempre**. Máximo 1 por fase (`MAX_SACRIFICES_PER_PHASE`). | —                                          |
| **Jugar una carta**        | Invoca un aliado en un slot, lanza una habilidad, adjunta un arma o armadura al héroe, usa un objeto, pone una ubicación o una trampa.     | Su costo en Cronos                         |
| **Atacar con un aliado**   | El aliado ataca a un slot rival (el del héroe o el de un aliado). Una vez por fase por aliado.                                             | —                                          |
| **Atacar con el héroe**    | Solo con un arma adjunta. Una vez por fase.                                                                                                | 1 de durabilidad del arma                  |
| **Habilidad del héroe**    | La activa del héroe. Una vez por fase, pero cuesta **3 de energía o más** (`HERO_ABILITY_MIN_COST`): no se usa en cada fase y es fuerte.   | Su costo en **energía**                    |
| **Habilidad de un aliado** | Los aliados que tienen una activa.                                                                                                         | Cronos, o energía si la carta lo dice (⚡) |
| **Mover un aliado**        | **Para todas las facciones.** A un slot vacío, o intercambio con un aliado vecino. Es la forma de esquivar ataques.                        | —                                          |
| **Esperar**                | Nada. Algunas cartas premian esperar.                                                                                                      | —                                          |

Con la capacidad permanente y 1 descarte por fase, en la fase _n_ se tienen hasta _n_ Cronos: la partida tiene curva y las cartas caras llegan más tarde.

Al programar, solo se usan las cartas que están en la mano al empezar la fase. Las que se roban durante la resolución quedan para la fase siguiente.

**Los ataques apuntan a slots, no a cartas.** Esta es la clave del juego sin turnos: si programaste atacar el slot 3 y el rival movió su aliado del 3 al 5 en un paso anterior (o en el mismo paso con una acción más rápida), el ataque pega en el slot vacío y falla; si otro aliado se movió al 3, recibe el golpe él. Los ataques en área apuntan a 2 o 3 slots vecinos, o a "todos los aliados".

**Proyección**: mientras programás, la interfaz simula tu línea de tiempo suponiendo que el rival no hace nada y muestra cuántos Cronos te quedan en cada paso, qué aliados están en qué slot, etc. Si algo es imposible incluso así (ej.: jugar una carta de 3 con 2 Cronos), no deja programarlo.

**Acciones que fallan**: al resolverse, una acción puede volverse imposible por lo que hizo el rival (el aliado que tenía que atacar murió, el slot destino quedó ocupado). Entonces la acción **falla**: no gasta Cronos, la carta vuelve a la mano y el paso se pierde. Una invocación a un slot ocupado va al slot libre más cercano; si los 5 están ocupados, falla.

### 2.5 Orden dentro de un paso: la velocidad

Cada acción tiene una **velocidad** (`instant`, `fast`, `normal`, `slow`). Dentro de un mismo paso, las acciones de los dos jugadores se resuelven de la más rápida a la más lenta:

| Velocidad       | Ejemplos                                                                   |
| --------------- | -------------------------------------------------------------------------- |
| **Instantánea** | Moverse, Generar Cronos, escudos, trampas que se activan                   |
| **Rápida**      | Aliados y habilidades con la palabra clave _Rápido_                        |
| **Normal**      | La mayoría de los ataques, invocaciones y habilidades                      |
| **Lenta**       | Efectos grandes (daño en área, rituales). A cambio, suelen ser más fuertes |

- **Misma velocidad = simultáneas.** Las dos acciones se calculan contra el mismo estado y su daño se aplica a la vez. Así, dos aliados que se atacan entre sí en el mismo paso se golpean los dos.
- Después de cada velocidad se retiran los aliados que murieron, así que matar a un aliado con una acción más rápida le impide actuar en ese paso.
- Un héroe que llega a 0 de vida queda **caído**: no actúa en las velocidades que siguen de ese paso. Al terminar el paso se revisa la victoria: si cayó un héroe, gana el otro; si cayeron los dos, **empate**.

### 2.6 Combate

- **Escala de números**: la del catálogo de Shadow Era (`docs/data.json`) multiplicada por 2. Con héroes de 50 a 65 de vida, los aliados pegan entre 0 y 18 y tienen entre 3 y 18 de vida (un aliado de costo 4 ronda 5/10); una habilidad de costo 2 hace unos 6 de daño. Las partidas simuladas duran de 10 a 14 fases.
- **Ataque de un aliado**: hace su ataque como daño al objetivo. Los aliados atacados **no contraatacan**, salvo los que tienen _Represalia_: si los golpea un ataque cuerpo a cuerpo (de un aliado sin _A distancia_ o del arma del héroe), devuelven el golpe con su ataque. Al héroe se lo ataca sin respuesta.
- **Armadura** (carta adjunta), con dos números como en Shadow Era: **reducción** (el escudo, abajo a la izquierda) y **durabilidad** (el cuadrado, abajo a la derecha). Cada golpe al héroe pierde tanto daño como la reducción (armadura 3 y golpe de 7: el héroe recibe 4) y le quita 1 de durabilidad a la armadura, aunque el golpe sea menor que la reducción. Al llegar a 0 de durabilidad se descarta. El veneno, las quemaduras y la sombra la ignoran y no la gastan; el ácido le quita 1 de durabilidad más.
- Hay cartas que **gastan** la durabilidad del arma o la armadura rival (o las destruyen) y cartas que **reparan** las propias (+durabilidad).
- **Arma** (carta adjunta): da el ataque del héroe y tiene durabilidad; al llegar a 0 se descarta. Sin arma, el héroe no ataca.
- Una arma o armadura nueva reemplaza a la que estaba (la vieja va a la pila).
- **Protector**: los ataques de aliados y del héroe dirigidos al slot del héroe van al Protector (si hay varios, al de menor número de slot), salvo los ataques _A distancia_, que pasan por encima y le pegan al héroe. Las habilidades y el daño directo no se desvían, salvo que la carta lo diga.
- **Fatiga**: robar con el mazo vacío hace 10 de daño al héroe, y aumenta 5 cada vez.
- **Límite de fases**: si llega a la fase 30, gana el héroe con más vida (y empate si tienen la misma). Evita partidas infinitas.

### 2.7 Victoria y abandono

- Gana quien derrota al héroe rival; empate si los dos caen en el mismo paso.
- **Abandono**: en PvP, tocar "Rendirse", o 3 fases seguidas sin programar nada (el reloj las vence), cuenta como derrota.

Todas las constantes de esta sección viven en `(engine)/data/rules.ts` (`STARTING_HAND = 7`, `MAX_HAND = 7`, `DRAW_PER_PHASE = 1`, `ENERGY_PER_PHASE = 1`, `MAX_ENERGY = 10`, `PLANNING_SECONDS = 90`, `ALLY_SLOTS = 5`, `MAX_SACRIFICES_PER_PHASE = 1`, `PHASE_LIMIT = 30`...).

---

## 3. Tipos de carta y palabras clave

### 3.1 Tipos

| Tipo (id)    | Nombre en pantalla | Descripción                                                                                                                                                                            |
| ------------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hero`       | Héroe              | Vida (90–120), facción, clase, pasiva y activa. Define qué cartas puede llevar el mazo (sección 4).                                                                                    |
| `ally`       | Aliado             | Costo, ataque, vida, velocidad, palabras clave, efectos (al entrar, al atacar, al morir...).                                                                                           |
| `ability`    | Habilidad          | Efecto de un solo uso (daño, curación, robo, control).                                                                                                                                 |
| `weapon`     | Arma               | Se adjunta al héroe: ataque y durabilidad, a veces con efecto (veneno, robo de vida...).                                                                                               |
| `armor`      | Armadura           | Se adjunta al héroe: reducción de daño por golpe y durabilidad en golpes, y a veces un efecto (espinas, resistencia...).                                                               |
| `item`       | Objeto             | Consumible de un solo uso (poción, bomba).                                                                                                                                             |
| `attachment` | Adjunto            | Se adjunta a un aliado (propio o enemigo): suma ataque o vida, da palabras clave (Protector, Sigilo, Vuelo...), reduce o duplica el daño recibido. Se descarta cuando muere el aliado. |
| `artifact`   | Artefacto          | Queda en un slot de soporte con un efecto continuo o por fase; algunos tienen usos (`charges`) y se descartan al gastarlos.                                                            |
| `location`   | Ubicación          | Efecto continuo de campo. Una por jugador.                                                                                                                                             |
| `trap`       | Trampa             | Se juega boca abajo y se activa sola cuando se cumple su condición. Encaja con el juego simultáneo.                                                                                    |

### 3.2 Palabras clave (primera versión)

| Id          | Nombre en pantalla | Efecto                                                                           |
| ----------- | ------------------ | -------------------------------------------------------------------------------- |
| `guardian`  | Protector          | Desvía hacia él los ataques al héroe, salvo los A distancia (ver 2.6)            |
| `quick`     | Rápido             | Sus ataques tienen velocidad Rápida                                              |
| `charge`    | Embestida          | Puede atacar desde el paso siguiente al que entra, sin esperar a la próxima fase |
| `ranged`    | A distancia        | Sus ataques ignoran a los Protectores y no reciben el contraataque de Represalia |
| `agile`     | Ágil               | Al moverse puede cambiar de lugar con cualquier aliado, no solo con un vecino    |
| `flying`    | Vuelo              | Solo lo pueden atacar aliados con Vuelo o A distancia                            |
| `stealth`   | Sigilo             | No se lo puede elegir como objetivo hasta que ataque                             |
| `frenzy`    | Furia              | Puede atacar dos veces por fase                                                  |
| `poison`    | Veneno             | El daño que hace a un aliado lo destruye                                         |
| `lifesteal` | Robo de vida       | Cura al héroe tanto como el daño que hace                                        |
| `shield`    | Escudo             | Ignora el primer daño que recibe                                                 |
| `thorns`    | Espinas X          | Quien lo ataca recibe X de daño                                                  |
| `retaliate` | Represalia         | Cuando lo golpea un ataque cuerpo a cuerpo, contraataca con su ataque            |
| `cleave`    | Barrido            | Su ataque también pega en los slots vecinos                                      |
| `unique`    | Única              | Solo 1 copia por mazo                                                            |
| `echo`      | Eco                | Al morir vuelve a la mano una vez                                                |
| `resurge`   | Resurgir           | Se puede jugar desde la pila de descarte                                         |

### 3.4 Tribus

Cada aliado puede tener una **tribu** (`tribe` en su archivo, `(engine)/models/Tribe.ts`): 3 por facción y 2 neutrales. Son la base de la sinergia: cartas que potencian a otros de su tribu al entrar, que crecen por cada uno, que roban el primero de la tribu del mazo (`seekTribe`) o que pegan más por cada uno en juego.

| Facción     | Tribus                       |
| ----------- | ---------------------------- |
| `primal`    | Saurio, Cavernario, Fiera    |
| `bronze`    | Legionario, Oráculo, Coloso  |
| `arcane`    | Hechicero, Hada, Draco       |
| `clockwork` | Autómata, Inventor, Aeronave |
| `neon`      | Cíborg, Hacker, Sicario      |
| `void`      | No-muerto, Cultista, Horror  |
| `neutral`   | Errante, Elemental           |

Las cartas de clase usan tribus de varias facciones, así un héroe encuentra sinergias fuera de la suya. Las **fichas** (`token: true`) son aliados que solo crean otras cartas: no se coleccionan ni entran en mazos.

### 3.3 Estados

| Estado         | Efecto                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Envenenado (X) | Pierde X de vida al empezar cada fase y el veneno baja 1. Se suma si lo envenenan de nuevo. Pasa escudos y armadura.                             |
| Quemándose (X) | Pierde X de vida al empezar cada fase durante las fases que diga la carta (3 por defecto). Pasa escudos y armadura.                              |
| Congelado      | No puede atacar, moverse ni usar habilidades por el resto de la fase (y las que diga la carta). Un héroe congelado no ataca ni usa su habilidad. |

El Antídoto y otras cartas limpian los estados. Los adjuntos sobre aliados enemigos pueden además impedir que ataquen (`disarms`), que usen su habilidad (`silences`), lastimarlos cada vez que atacan (`onHostAttack`) o aumentar el daño que reciben.

Regla de invocación: un aliado que entra en el paso _n_ puede actuar desde la fase siguiente; con `charge`, desde el paso _n + 1_.

Cada palabra clave es un módulo de `(engine)/keywords/` con sus tests. El texto de reglas de la carta se arma solo a partir de sus palabras clave más la descripción de sus efectos propios.

### 3.5 Elementos de daño

Todo daño tiene un **elemento** (`element` en el archivo de la carta, `(engine)/models/Element.ts`). Si la carta no tiene, el daño es **físico**. El elemento se aplica a todo el daño que hace la carta: sus efectos y, si es un aliado o un arma, también sus ataques (y el contraataque de un aliado con Represalia). Un héroe con elemento lo usa en su habilidad y su pasiva. El veneno y la quemadura no tienen elemento.

| Elemento | Regla al pegar                                                                                   | Facción típica     |
| -------- | ------------------------------------------------------------------------------------------------ | ------------------ |
| Fuego    | El objetivo queda Quemándose 1 durante 2 fases.                                                  | Arcana, Primal     |
| Hielo    | Hace el doble a un objetivo congelado.                                                           | Primal, Maga       |
| Rayo     | La mitad del daño salta a un aliado vecino al azar (no vuelve a saltar).                         | Neón               |
| Sombra   | Pasa escudos y armadura.                                                                         | Vacío              |
| Luz      | Cura a tu héroe la mitad del daño hecho; el doble contra No-muertos y Horrores.                  | Bronce, Mística    |
| Tiempo   | El objetivo pierde también vida máxima (no se cura). Un golpe de 3+ al héroe le quita 1 Chronos. | Errantes, Vorhal   |
| Ácido    | Envenena 1; contra un héroe le quita 1 de durabilidad más a su armadura.                         | Primal, Neón       |
| Arcano   | No se reduce: ignora resistencias y reducciones de daño.                                         | Arcana, Maga       |
| Tierra   | Aturde a un aliado de 3 de ataque o menos; los voladores son inmunes.                            | Primal, Relojería  |
| Sónico   | El objetivo pierde Sigilo.                                                                       | Neón               |
| Agua     | El aliado pierde 1 de ataque para siempre.                                                       | Primal, Errantes   |
| Viento   | Hace el doble a los voladores.                                                                   | Cazador, Relojería |

**Resistente** (`resist`) recibe la mitad de ese elemento (redondeando hacia arriba) y **Vulnerable** (`weak`) el doble. Van por tribu: Draco resiste fuego y es vulnerable a hielo; Saurio vulnerable a hielo; Cavernario resiste hielo; Coloso resiste tierra y es vulnerable a ácido; Autómata resiste ácido y es vulnerable a rayo; Cíborg vulnerable a rayo; Aeronave vulnerable a viento; No-muerto resiste sombra y hielo; Horror resiste sombra y es vulnerable a sónico; Hada resiste arcano y es vulnerable a sombra; Oráculo resiste luz; Hechicero resiste arcano. Cada Elemental resiste su propio elemento y es vulnerable a su opuesto.

Orden del cálculo: multiplicador del elemento → vulnerabilidad → resistencia (salvo arcano) → `modifyDamage` de las cartas en juego (salvo arcano) → escudo y armadura (salvo sombra). La regla extra se aplica solo si el golpe hizo daño. Hoy hay 218 cartas con elemento y 181 aliados con resistencias o vulnerabilidades.

---

## 4. Héroes, clases y restricciones de cartas

Como en Shadow Era, **no todas las cartas se pueden usar con cualquier héroe**.

### 4.1 Facción y clase

Cada héroe tiene una **facción** (sección 1) y una **clase**:

| Clase (id) | Nombre en pantalla | Estilo                                                |
| ---------- | ------------------ | ----------------------------------------------------- |
| `warrior`  | Guerrero           | Armas pesadas y armaduras, golpes directos, aguante   |
| `mage`     | Mago               | Habilidades de daño y control, armas mágicas livianas |
| `hunter`   | Cazador            | Arcos y trampas, ataques a distancia, rematar aliados |
| `mystic`   | Místico            | Curación, potenciar aliados, revivir                  |

Los 12 héroes: 2 por facción, de clases distintas, y cada clase aparece en 3 facciones:

| Facción     | Héroe 1               | Héroe 2 |
| ----------- | --------------------- | ------- |
| `bronze`    | **warrior** (inicial) | hunter  |
| `arcane`    | **mage** (inicial)    | mystic  |
| `primal`    | **hunter** (inicial)  | mystic  |
| `clockwork` | warrior               | mage    |
| `neon`      | hunter                | warrior |
| `void`      | mage                  | mystic  |

Los 3 héroes iniciales son de facciones y clases distintas, así la elección del principio se siente diferente.

### 4.1.1 Bandos: Alba y Eclipse

Por encima de facciones y clases, como los Humanos y las Sombras de Shadow Era, cada héroe pertenece a uno de **dos bandos** (`side` en su archivo, `(engine)/models/Side.ts`). El reparto es a mano, por el aspecto de cada héroe: los de cara de buenos van al Alba y los villanos y monstruos al Eclipse, así que una facción puede tener héroes de los dos bandos.

| Bando (id)          | Emblema | Héroes                                                                                                                                 |
| ------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `dawn` (Alba)       | ☀️      | Ada, Aldric, Gideon, Gorrak, Ilyra, Kora, Nysa, Legado Varro, Vex, Tauron, Ryn, Omnigear                                               |
| `eclipse` (Eclipse) | 🌑      | Caelus, Canciller Bocabronce, Astrónomo Hueco, Kazhul, Malachar, Morgrath, Nyx, Ooma, Supervisor Kade, Reina Estática, Vorhal, Xulthar |

Algunas cartas neutrales son exclusivas de un bando (`{ sides: ['dawn'] }`). Por ejemplo, el Sello del Alba y el Sello del Eclipse: cada uno destruye al otro con su habilidad.

### 4.2 Restricción de cada carta

Cada carta declara para quién es (`restriction` en su archivo). La restricción tiene **cuatro criterios que se combinan libremente**, y cada uno es una lista de valores:

| Criterio   | Qué pide del héroe                       |
| ---------- | ---------------------------------------- |
| `factions` | Que sea de alguna de esas facciones      |
| `sides`    | Que sea de alguno de esos bandos (4.1.1) |
| `classes`  | Que sea de alguna de esas clases         |
| `heroes`   | Que sea alguno de esos héroes            |

Un héroe puede usar la carta si cumple **todos** los criterios que la carta lista (dentro de cada uno alcanza con **uno** de sus valores). Un criterio que no aparece no restringe nada, así que `{}` es para cualquier héroe.

| Restricción                                                          | Quién la puede usar                 | Uso típico                                       |
| -------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------ |
| `{}`                                                                 | Cualquier héroe (cartas `neutral`)  | Aliados genéricos, objetos                       |
| `{ factions: ['bronze'] }`                                           | Los héroes de Bronce                | La mayoría de los aliados                        |
| `{ classes: ['warrior'] }`                                           | Los guerreros, de cualquier facción | Habilidades, armas y armaduras                   |
| `{ heroes: ['legate-varro'] }`                                       | Solo ese héroe                      | Cartas exclusivas (su arma propia, su compañero) |
| `{ sides: ['dawn'] }`                                                | Los héroes del Alba                 | Cartas enfrentadas entre bandos (los Sellos)     |
| `{ factions: ['clockwork', 'neon'] }`                                | Los héroes de Relojería o de Neón   | Cartas puente entre dos eras                     |
| `{ factions: ['clockwork'], sides: ['dawn'], classes: ['warrior'] }` | Los guerreros de Relojería del Alba | Cartas muy específicas                           |

`defineCard` rechaza un criterio vacío (`[]`) o con valores repetidos, y un héroe siempre es `{ heroes: [<su id>] }`. La colección y la carta lo muestran en palabras: "Héroes de la facción Relojería o Neón", o con varios criterios "Héroes de facción Relojería, bando Alba y clase Guerrero".

`canUseCard(hero, card)` en `(engine)/utils/deckRules.ts` es la única función que decide esto, y la usan el editor de mazos, la colección (filtro "usables con este héroe"), el starter, la tienda (marca de "no la puede usar tu héroe") y el servidor antes de una partida.

---

## 5. Rarezas

| Rareza (id) | Nombre en pantalla | Color del marco                        | Cartas en el catálogo |
| ----------- | ------------------ | -------------------------------------- | --------------------- |
| `common`    | Común              | Gris piedra                            | 199                   |
| `uncommon`  | Poco común         | Verde esmeralda                        | 157                   |
| `rare`      | Rara               | Azul eléctrico                         | 107                   |
| `epic`      | Épica              | Violeta                                | 60                    |
| `legendary` | Legendaria         | Dorado                                 | 37                    |
| `exotic`    | Exótica            | Turquesa iridiscente                   | 18                    |
| `mythic`    | Mítica             | Carmesí con brillo holográfico animado | 12                    |

Las rarezas altas no son "más fuertes por número": tienen efectos más complejos y más sinergia. El **marco entero** de la carta (no solo un borde) es del color de su rareza, con una gema del mismo color abajo al centro, para reconocerla de un vistazo aunque se vea chica en el tablero; de Legendaria para arriba tiene además un brillo suave alrededor, y en Mítica el brillo late y un reflejo recorre el marco. La facción se ve en la línea de tipo y en el fondo de la ilustración.

Un mazo de comunes bien armado tiene que poder ganarle a uno de míticas mal armado. La validación del catálogo controla que costo y estadísticas estén dentro del rango de su rareza.

---

## 6. Reglas de mazo y starter pack

### 6.1 Reglas de mazo

- **Tamaño**: mínimo **40** cartas y máximo **200**, contando el héroe.
- **Héroe**: **exactamente 1** carta de héroe por mazo. Al empezar la partida va directo a su slot.
- **Restricciones**: todas las demás cartas tienen que poder usarse con ese héroe (`canUseCard`, sección 4.2).
- **Copias**: no más de 4 de la misma carta (1 si tiene `unique`).
- Las reglas viven en `(engine)/utils/deckRules.ts` (funciones puras, con tests). Cada jugador puede tener varios mazos guardados y marca uno como **activo**: todos los modos de juego (práctica, campañas y PvP) juegan con ese mazo sin elegirlo cada vez, y la tienda no deja vender las copias que usa, para que siga jugable.

### 6.2 Starter pack

- Al registrarse, el jugador **elige el héroe con el que empieza** entre los 3 iniciales y abre su starter pack con una animación.
- El starter tiene **40 cartas: el héroe elegido + 39 cartas normales**, todas **usables por ese héroe** (neutrales, de su facción, de su clase o exclusivas suyas), solo **comunes y poco comunes**, y como máximo 4 copias de cada una.
- Cada starter es un **mazo armado a mano** (una lista fija por héroe en `(cards)/data/starters.ts`), no un sorteo: así se garantiza que sea jugable y tenga curva de costos. Ejemplo de las 39: 19 aliados (costos 1 a 5), 8 habilidades, 3 armas, 3 armaduras, 4 objetos, 1 ubicación y 1 trampa, en 13 o 14 cartas distintas.
- Un test verifica que cada starter cumple las reglas de mazo (incluidas las restricciones).
- Después del starter, una **batalla tutorial** guiada contra la CPU explica fases, Cronos, slots, movimiento y velocidad.

---

## 7. Una carta = un archivo `.ts`

**Objetivo: agregar una carta es crear su archivo `.ts` y poner su imagen. Nada más.**

### 7.1 Dónde viven

```
app/(protected)/(cards)/cards/
  <card-id>.ts                 Todas las cartas al mismo nivel (héroes, sus exclusivas, neutrales, de facción, de bando y de clase)
  index.generated.ts           El índice que arma `yarn cards:index`
art/source/cards/<card-id>.png   ← la imagen generada (no se sube al repo)
public/cards/<card-id>.webp      ← la imagen procesada por `yarn art`
```

**Todas las cartas van en la misma carpeta, sin subcarpetas.** La facción, el bando, la clase y el héroe de una carta son **datos del archivo** (`faction`, `restriction`, y `side` en los héroes), no carpetas: una carpeta obliga a elegir una sola de esas dimensiones, y una carta puede tocar varias (por ejemplo de Relojería, para el bando del Alba y de Guerrero). `yarn cards:index` falla si encuentra una subcarpeta.

Los agrupamientos (las secciones de `/dev/cards` y los lotes de `art/catalog.csv`) salen de la `restriction` de cada carta (`(cards)/utils/cardGroup.ts`), nunca del archivo. Un test verifica que la `faction` coincida con la `restriction` (una carta de una facción, no `neutral`, solo es para héroes de esa facción, por `factions` o por los `heroes` que lista) y que cada carta la pueda usar al menos un héroe. Una carta con varios criterios va en el grupo del primero, en este orden: héroe, facción, bando y clase.

El `id` de la carta es el nombre del archivo, en inglés y en `kebab-case`. Un test lo exige y nunca cambia, porque las colecciones y los mazos guardados lo referencian.

### 7.2 Cómo se ve una carta

```ts
import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bronze-legionary',
  type: 'ally',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 55,
  cost: 2,
  attack: 8,
  health: 16,
  speed: 'normal',
  keywords: ['guardian'],

  name: 'Bronze Legionary',
  text: 'On enter: if another Bronze ally is next to it, draw a card.',
  flavor: 'Shield first, name later.',

  onEnter(ctx) {
    if (ctx.self.neighbors().some((ally) => ally.faction === 'bronze')) {
      draw(ctx, ctx.self.owner, 1)
    }
  },

  ai: { value: 3, tags: ['formation', 'draw'] },

  art: {
    subject:
      'a young legionary with a red-crested helmet and a polished bronze rectangular shield, standing guard on a Roman road at sunset'
  }
})
```

- **`defineCard`** valida la forma y completa valores por defecto (en tests y en desarrollo tira un error claro si falta algo).
- **Hooks**: `onPlay`, `onEnter`, `onAttack`, `onAttacked`, `onDamaged`, `onDeath`, `onPhaseStart`, `onPhaseEnd`, `onStepStart`, `onAllyEnter`, `onAllyMoved`, `onHeroDamaged`, `trigger` (condición de trampa), `activate` (habilidad activa), `modifiers` (efectos continuos de ubicaciones, armas, armaduras, artefactos y auras). Cada hook recibe un `ctx` con el estado de la partida, la carta (`ctx.self`), el dueño, los objetivos elegidos y `ctx.random()` (azar con semilla, nunca `Math.random`).
- **Efectos reutilizables** en `(engine)/effects/`: `damage`, `heal`, `draw`, `discard`, `summon`, `destroy`, `buff`, `moveAlly`, `returnToHand`, `reviveFromDiscard`, `gainChronos`, `stun`, `silence`, `attach`, etc. Una carta común se escribe con 1 o 2 llamadas; una mítica puede tener lógica propia.
- **Objetivos**: cada carta declara qué objetivos pide (`targets: [{ kind: 'enemySlot', count: 2, adjacent: true }]`) y la interfaz arma la selección sola.
- **`price`**: el precio de la carta suelta en la tienda, dentro del rango de su rareza (sección 11.2). Si se omite, se calcula a partir del costo y las estadísticas.

### 7.3 El registro automático

Next.js no puede listar archivos en el navegador, así que un script genera el índice:

- `yarn cards:index` recorre `cards/**/*.ts` y escribe `cards/index.generated.ts` (un import por carta y el mapa `CARDS` por id).
- Corre solo en `predev` y `prebuild`, así que crear el archivo y levantar el proyecto alcanza.
- Un test falla si el índice quedó desactualizado.

### 7.4 La imagen

Se pone en `art/source/cards/<card-id>.png` y `yarn art` la procesa (sección 9.2). Mientras falte, la carta muestra una ilustración provisoria con el color y el ícono de su facción.

### 7.5 Validación del catálogo (`tests/unit/cards.test.ts`)

Para cada carta: id igual al nombre del archivo e ids únicos; todas en `cards/` sin subcarpetas y con la `faction` coherente con la `restriction`; costo, estadísticas y precio dentro del rango de su rareza; tipo, facción, clase y palabras clave válidas; prompt presente; y una **prueba de humo**: se juega la carta en una partida de prueba contra objetivos válidos y el motor no puede tirar errores.

### 7.6 Idiomas

El código y las cartas están en inglés. La interfaz se traduce como en Crisol (`app/i18n`, inglés por defecto y español), y la traducción de las cartas vive aparte, en `app/i18n/cards/es.ts`, un objeto por id:

```ts
'bronze-legionary': { name: 'Legionario de Bronce', text: 'Al entrar: ...', flavor: '...' }
```

Una carta sin traducción se muestra en inglés, así que **la traducción es opcional y no es un paso para agregar una carta**. `yarn cards:i18n` lista las que faltan traducir.

---

## 8. El catálogo de 720 cartas

El catálogo se rehízo desde cero tomando `docs/data.json` (Shadow Era) solo como guía de proporciones: reparto por tipo, curva de costos, mezcla de rarezas y la parte de cartas con sinergia de tribu. Los nombres, efectos y textos son propios, pensados para las fases en lugar de los turnos, y los números van a la escala x2 (sección 2.6). Las ubicaciones no existen.

### 8.1 Reparto

| Grupo                   | Cartas  | Composición                                                                          |
| ----------------------- | ------- | ------------------------------------------------------------------------------------ |
| Héroes (todos jugables) | 24      | 2 por facción y clase de la tabla 4.1, más los 12 que antes eran jefes               |
| Exclusivas de héroe     | 48      | 2 por héroe: los 12 premios de campaña, 12 compañeros y 24 cartas propias            |
| Por clase (4 grupos)    | 320     | 23 aliados, 26 a 33 habilidades, armas, armaduras, adjuntos, artefactos, trampas     |
| Por facción (6 grupos)  | 216     | 25 aliados (3 tribus), 5 a 8 habilidades y algunos artefactos, adjuntos y trampas    |
| Neutrales               | 112     | 48 aliados, 28 habilidades, 12 objetos, 10 artefactos, 6 adjuntos, armas y armaduras |
| **Total coleccionable** | **720** | Más 9 fichas que solo aparecen invocadas                                             |

Rarezas: 260 comunes, 178 poco comunes, 129 raras, 80 épicas, 54 legendarias, 13 exóticas y 6 míticas.

### 8.2 Mecánicas de Shadow Era que se adaptaron a las fases

- "Hasta tu próximo turno" o "al final del turno" pasan a "esta fase" o "al empezar/terminar cada fase".
- La Shadow Energy pasa a la energía del héroe (habilidades de aliado con ⚡).
- Los recursos pasan a Cronos: ganar Cronos en la fase, sumar capacidad (`gainChronosCapacity`) o quitársela al rival (`drainChronosCapacity`).
- Exiliar pasa a desterrar de la pila de descarte (`banishFromDiscard`), que corta los revivir y los resurgir.
- Las reacciones en el turno del rival pasan a trampas.
- Buscar en el mazo pasa a `seek` / `seekTribe`: la primera carta que cumple, desde arriba, sin mezclar.
- Descartar de la mano rival solo al terminar la fase (`discardRandom`), para no romper lo ya programado.
- Tomar el control de un aliado rival y las ubicaciones no se crearon.

## 9. Arte: archivo de prompts y `yarn art`

### 9.1 El archivo de prompts

Igual que en Crisol (`art/catalog.csv` generado por `yarn art:catalog`), pero con los prompts en inglés:

- El **estilo base** (`BASE_PROMPT` en `scripts/art/catalog.ts`) va al principio de cada prompt. Propuesta: _"Collectible card game illustration, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, dramatic lighting, background with depth, vertical framing, no text, no frame, no watermark"_. A diferencia de Crisol, **no** va sobre verde croma: es la ilustración completa que entra en la ventana de la carta (el marco se dibuja con CSS).
- Después va un **toque de facción** (paleta y ambiente de su era, en `scripts/art/factions.ts`) y el `art.subject` de la carta.
- **Tamaño**: 1024 × 1280 (4:5) para todas las cartas; 1024 × 1024 extra para el retrato del héroe en el tablero.
- `yarn art:catalog` escribe `art/catalog.csv` con las columnas `batch, file, width, height, prompt` (las mismas de Crisol), con un lote por grupo de la sección 8.1, y `art/catalog.md` para leerlo cómodo.

El archivo de prompts siempre está al día con las cartas: no hay que mantenerlo a mano.

### 9.2 `yarn art` con progreso en vivo

Como en Crisol (`sharp`: recorta, achica a WebP en `public/cards/` y escribe `public/cards/manifest.json`), con un cambio: **muestra cada imagen en el momento en que la procesa**, sin esperar a terminar un lote:

```
[ 37/500] neutral/time-wanderer ......... ok   1024×1280 → 142 KB
[ 38/500] neutral/broken-hourglass ...... ok   1024×1280 → 118 KB
[ 39/500] neutral/rift-scavenger ........ falta
```

- Una línea por imagen, con el contador total, el resultado (`ok`, `falta`, `error` con el motivo, `sin cambios` si ya estaba procesada) y una barra de progreso al pie.
- Solo procesa lo que cambió (compara la fecha de la imagen con la del `.webp`), así una corrida con 2 imágenes nuevas tarda segundos.
- **`yarn art --watch`**: se queda mirando `art/source/cards/` y procesa cada imagen apenas aparece o cambia. Con `yarn dev` corriendo, la carta se ve actualizada en `/dev/cards` al instante.
- Al final, el resumen de lo que falta por lote.

---

## 10. Rating (el "ELO"), oro y niveles

### 10.1 Nombre

Propuestas, en orden de preferencia:

1. **Prestigio** (recomendado), _Prestige_ en inglés.
2. **Renombre** (_Renown_).
3. **Cronorrango** (_Chronorank_).

En el código es `rating`. Se muestra con **ligas** por tramos: Aprendiz (< 1100), Viajero (1100–1299), Cronista (1300–1499), Guardián (1500–1699), Cronarca (1700–1899), Eterno (1900+).

### 10.2 Cálculo

Elo clásico con **K = 30**, que da justo el rango pedido de ±30:

```
expected = 1 / (1 + 10^((opponentRating − playerRating) / 400))
delta    = round(30 × (score − expected))       score: 1 gana, 0.5 empate, 0 pierde
```

- Inicial: **1200**. Mínimo: 100.
- Ganar siempre suma al menos 1 y perder resta al menos 1.
- Ejemplos: ganarle a un rival igual, +15; ganarle a uno 400 puntos arriba, +27; perder contra uno 400 abajo, −27.
- Solo cuentan las **partidas públicas**. Las privadas son amistosas, y contra la CPU tampoco cambia.
- Se guarda **solo el rating actual**, en `users.rating`. La pantalla de **Ranking** muestra el top 100 y tu posición.

### 10.3 Oro

| Resultado (PvP pública)  | Oro                                              |
| ------------------------ | ------------------------------------------------ |
| Victoria                 | 40 + hasta 20 extra si el rival tenía más rating |
| Empate                   | 15                                               |
| Derrota                  | 5                                                |
| Abandono                 | 0                                                |
| Primera victoria del día | +100                                             |

- Partidas privadas: la mitad, y como máximo 3 con premio por día contra el mismo rival (evita que dos amigos se regalen oro).
- Partida rápida contra la CPU: 20 por victoria, 8 por empate y 3 por derrota (sin Prestigio ni bonus del día), como máximo 10 partidas con oro por día. El servidor reparte la semilla y el mazo de la CPU y repite la partida antes de pagar (como en la campaña).
- Campaña: oro la primera vez que se gana cada combate (de 50 a 300 según la dificultad) y 10 % de eso si se repite.
- Cuentas nuevas: arrancan con **1.000** de oro (`STARTING_GOLD`).
- Todo cambio de oro pasa por el servidor, dentro de una transacción.

### 10.4 Niveles y experiencia (XP)

Cada batalla que el servidor verifica da **XP**; la XP sube el **nivel** del jugador (`users.xp` y `users.level`, se empieza en el nivel 1). Cada nivel ganado paga **1.000 de oro** (`LEVEL_UP_GOLD`) y el nivel abre las rarezas de la tienda (11.2). Todo en `(progression)/data/levels.ts`.

**Curva**: pasar del nivel L al L + 1 cuesta `100 × L` XP (100 para el 2, 200 más para el 3...). Llegar al nivel N cuesta `50 × N × (N − 1)` XP en total:

| Nivel | XP total | Victorias PvP aprox. (a 100 XP) |
| ----- | -------- | ------------------------------- |
| 5     | 1.000    | 10                              |
| 10    | 4.500    | 45                              |
| 20    | 19.000   | 190                             |
| 40    | 78.000   | 780                             |
| 70    | 241.500  | 2.415                           |
| 100   | 495.000  | 4.950                           |

**XP por batalla**:

| Modo                              | Victoria | Empate | Derrota | Abandono |
| --------------------------------- | -------- | ------ | ------- | -------- |
| PvP pública                       | 100      | 50     | 30      | 0        |
| PvP privada (mismo tope que oro)  | 50       | 25     | 15      | 0        |
| Partida rápida vs CPU (10 por día)| 50       | 25     | 15      | —        |
| Campaña (primera victoria)        | 100 (jefe 200) | — | —      | —        |

- Perder también da algo de XP (menos que ganar), para que cada partida cuente; rendirse o abandonar no da nada.
- La partida rápida da XP solo en las partidas que dan oro (las 10 primeras del día); la campaña, solo la primera vez que se gana cada combate (como su oro). La práctica no da XP.
- La XP de PvP se guarda con los premios de la partida (`rewards[player].level`) y el final de la batalla muestra "+X XP", la barra del nivel y, si subiste, "¡Nivel N! +1.000 de oro". El menú principal muestra el nivel con su barra.

---

## 11. Tienda

Módulo `(shop)`, con tres pestañas: **Sobres**, **Cartas** y **Vender**. Precios y probabilidades en `(shop)/data/` (un solo lugar para ajustar).

### 11.1 Sobres (8 cartas)

| Sobre (id)   | Precio | Contenido                                                                            |
| ------------ | ------ | ------------------------------------------------------------------------------------ |
| `traveler`   | 500    | 6 comunes, 2 poco comunes; 10 % de que una sea rara                                  |
| `chronicler` | 900    | 4 comunes, 3 poco comunes, 1 rara o mejor (rara 80 %, épica 16 %, legendaria 4 %)    |
| `guardian`   | 3.200  | 3 poco comunes, 3 raras, 2 épicas o mejor (épica 80 %, legendaria 17 %, exótica 3 %) |
| `eternal`    | 8.000  | 2 raras, 3 épicas, 2 legendarias, 1 exótica o mejor (exótica 85 %, mítica 15 %)      |
| `faction-*`  | 1.000  | Como `chronicler`, pero solo cartas de una facción y neutrales                       |

- **Precio**: el valor esperado de sus 8 cartas, tomando el medio del rango de cada rareza (11.2), con un 30 % de descuento porque son al azar, y después redondeado. Los de facción cuestan un poco más que `chronicler` porque permiten apuntar.
- **Probabilidades visibles** en la tienda (Google Play exige mostrar las probabilidades de los artículos al azar).
- **Garantía**: cada 10 sobres `guardian` o `eternal` sin legendaria, el siguiente trae una (contador `users.packsWithoutLegendary`).
- Los sobres pueden traer cartas que tu héroe actual no puede usar: sirven para otros héroes o para vender. Los sobres de facción ayudan a apuntar.
- El sorteo se hace en el servidor (`services/packs.ts`) y la animación de apertura muestra el resultado, de la rareza más baja a la más alta.

### 11.2 Cartas sueltas

**Cada carta tiene su propio precio** (`price` en su archivo), dentro del rango de su rareza. Por ejemplo, una común muy jugada puede costar 75 y otra de nicho 45. Las rarezas se desbloquean con el **nivel** del jugador (10.4, `RARITY_LEVELS`):

| Rareza     | Rango de precio por carta | Héroe (`HERO_PRICES`) | Se desbloquea en |
| ---------- | ------------------------- | --------------------- | ---------------- |
| Común      | 40 – 80                   | 900                   | Nivel 1          |
| Poco común | 120 – 220                 | 1.000                 | Nivel 5          |
| Rara       | 300 – 600                 | 1.200                 | Nivel 10         |
| Épica      | 900 – 1.400               | 1.500                 | Nivel 20         |
| Legendaria | 2.000 – 2.400             | 2.800                 | Nivel 40         |
| Exótica    | 3.000 – 3.400             | 3.800                 | Nivel 70         |
| Mítica     | 4.000 – 4.400             | 4.800                 | Nivel 100        |

- No se paga nada por desbloquear: alcanza con llegar al nivel. Los sobres pueden traer cualquier rareza a cualquier nivel.
- También se venden los héroes jugables (no los jefes), uno por jugador, al precio de su rareza (columna "Héroe"; hoy solo hay héroes comunes, raros, épicos y legendarios); su rareza también tiene que estar desbloqueada. No salen en sobres ni se venden.
- La pestaña Cartas muestra **todo** el catálogo a la venta con filtros (facción, clase, tipo, costo, rareza, "usables con mi héroe"): primero las rarezas desbloqueadas y después las bloqueadas, difuminadas y con un candado que dice "Se desbloquea en nivel X". Las bloqueadas son un misterio: no se pueden abrir en detalle (están bien difuminadas) y la búsqueda por nombre o texto no las encuentra.
- Las cartas premio de las campañas no se venden sueltas.

### 11.3 Vender

- **Precio de venta**: el 30 % del precio de esa carta, redondeado (una común de 60 se vende a 18). Pide confirmación si es de épica para arriba. Las copias que usa el mazo activo no se pueden vender: solo las de sobra, para que el mazo activo siga jugable.
- **Venta rápida**: un botón vende todas las copias que pasan de 4 de cada carta (de 1 si es `unique`), muestra el total antes de confirmar y nunca toca una carta que deje un mazo guardado sin completar.

---

## 12. PvP: salas y partidas

Módulo `(pvp)`.

### 12.1 Salas

- **Pantalla de salas** (`/lobby`): lista de partidas públicas esperando rival (con el rating y el héroe de quien la creó), botón **Crear partida** (pública o privada) y **Unirse con código**.
- **Pública**: aparece en la lista y cualquiera se une. Cuenta para el rating.
- **Privada**: genera un código de 6 letras (y un link para compartir). Solo entra quien lo tiene.
- **Partida rápida** (opcional): te une a la pública con rating más cercano o crea una.
- Se juega con el mazo activo (validado en el servidor). Cuando están los dos, empieza la partida.
- Una sala sin rival en 10 minutos se cierra sola.

### 12.2 El servidor manda

En PvP el **servidor es la autoridad**: guarda el estado de la partida, valida cada línea de tiempo y la resuelve con el mismo motor puro que usa el cliente. El cliente nunca recibe la mano ni el mazo del rival, ni su programación antes de la resolución.

Flujo de una fase:

1. El servidor guarda el `MatchState` con `phaseDeadline` (ahora + 90 s).
2. Cada cliente manda su línea de tiempo con `POST /api/submitPlan` (se puede reenviar hasta que el otro también esté listo).
3. Cuando llega la segunda, o en el primer pedido que llega después del `phaseDeadline`, el servidor resuelve la fase: guarda el estado nuevo, el **registro de eventos** de los 6 pasos (para animarlos) y el plazo de la fase siguiente (tiempo de animación + 90 s).
4. Los clientes reciben los eventos, los animan y siguen.

**Sin servidor siempre prendido**: como Crisol corre en Vercel (funciones sin estado), la fase se resuelve "perezosamente" en el primer pedido que llega vencido el plazo, con bloqueo optimista (`version` en `matches`, como `saves.version` en Crisol) para que no se resuelva dos veces.

### 12.3 Tiempo real

Como el juego es simultáneo, no hace falta latencia de milisegundos: alcanza con enterarse en 1 o 2 segundos de que el rival está listo o de que se resolvió la fase.

- **Primera versión**: _polling_ cada 1,5 s a `POST /api/getMatchState` con la última `version` conocida (responde vacío si no cambió). Simple, gratis y funciona en Vercel.
- La comunicación queda detrás de una interfaz `MatchChannel` (`(pvp)/utils/matchChannel.ts`), así más adelante se cambia por un servicio de push (Ably, Pusher o Supabase Realtime) sin tocar el resto.
- **Reconexión**: al volver, el cliente pide el estado y sigue. Si alguien no programa nada en 3 fases seguidas, pierde por abandono.

### 12.4 Datos

Tabla `matches`: `mode` (`pvp` / `campaign`), `visibility`, `code`, `status` (`waiting`, `playing`, `finished`, `abandoned`), jugadores y mazos (copia del mazo al empezar), `seed`, `state` (jsonb), `version`, `phaseDeadline`, `result` y `winnerId`.

---

## 13. CPU: campañas por héroe

Módulo `(campaign)`.

### 13.1 Estructura

- **Una campaña por héroe** (12), de **10 combates** cada una, con una historia corta ambientada en la era del héroe. El combate 10 es un jefe.
- Cada campaña es un archivo, `(campaign)/data/campaigns/<hero-id>.ts`. Agregar un héroe nuevo con su campaña es sumar sus archivos de cartas y el de campaña.
- Se juega la campaña de un héroe que tenés, con tu mazo de ese héroe. Ganar un combate desbloquea el siguiente.

### 13.2 Dificultad creciente

| Combate   | Mazo de la CPU                   | Sinergia                    | IA                             | Situación adversa (ejemplos)                                   |
| --------- | -------------------------------- | --------------------------- | ------------------------------ | -------------------------------------------------------------- |
| 1–2       | Comunes                          | Al azar dentro de lo usable | Codiciosa                      | Ninguna                                                        |
| 3–4       | Comunes y poco comunes           | Una sinergia simple         | Codiciosa + defensa            | La CPU empieza con 2 de capacidad de Cronos                    |
| 5–6       | Hasta raras                      | Mazo temático               | Mira 1 fase                    | Empieza con 1 aliado desplegado y +15 de vida                  |
| 7–8       | Hasta épicas                     | Mazo armado a mano          | Mira 1 fase con más candidatos | Empieza con 2 aliados, 3 Cronos y una ubicación en juego       |
| 9         | Hasta legendarias                | Mazo armado a mano          | Mira 2 fases                   | Vos empezás con 5 cartas en la mano; ella con 3 aliados y arma |
| 10 (jefe) | Mazo del jefe con cartas propias | Máxima                      | La mejor                       | Héroe jefe con más vida, poder único y reglas especiales       |

Cada combate se define con datos: `{ cpuDeck, aiLevel, cpuSetup: { allies, chronos, location, weapon, armor, extraHealth, hand }, playerSetup, rules }`. Los mazos de la CPU también respetan las restricciones de su héroe.

### 13.3 La IA

En `(engine)/ai/`, pura y determinística (usa la semilla de la partida):

1. Genera líneas de tiempo candidatas válidas (Generar Cronos, jugar cartas, ataques y movimientos).
2. Simula cada una con el motor contra algunas respuestas probables del rival (no hacer nada, atacar lo más débil, mover aliados amenazados, defenderse).
3. Puntúa el resultado (vida de los héroes, valor de los aliados en mesa, cartas en mano, Cronos) y elige la mejor, con un poco de azar en los niveles bajos.
4. Los niveles más altos prueban más candidatos, miran más fases, esquivan moviendo aliados y usan las etiquetas `ai.tags` de las cartas para buscar sinergias.

### 13.4 Sin trampas

Contra la CPU la partida corre en el navegador (sin esperas). Al terminar, el cliente manda la semilla y sus líneas de tiempo; el servidor **vuelve a jugar la partida** con el mismo motor y la misma IA (que es determinística) y solo da el premio si el resultado coincide.

### 13.5 Premios

Oro por cada combate ganado la primera vez (de 50 a 300), un sobre en los combates 5 y 10, y al completar la campaña la **carta exclusiva** del héroe que solo se consigue ahí.

---

## 14. Interfaz

### 14.1 Estilo

- **Fondos claros y pastel**: crema (`#FFF8EE`), lavanda (`#EDE7FF`), menta (`#E3F7EF`), celeste (`#E4F1FF`) y durazno (`#FFE9DC`), con texturas muy suaves y paneles blancos con sombra suave y bordes redondeados.
- **Cartas muy coloridas**: ilustración saturada, marco grueso del color de su rareza (sección 5), borde oscuro casi negro para que resalten con alto contraste sobre el fondo claro, gema de rareza abajo, brillo en legendarias para arriba (animado en míticas).
- **Tipografías** self-hosted con `@fontsource`: _Fredoka_ o _Baloo 2_ para títulos y números de las cartas, _Nunito_ para el texto.
- **Tokens** en `app/globals.scss` (fondos, colores de facción, de rareza, de vida, Cronos, armadura) espejados en el tema de MUI, como en Crisol.
- **Accesibilidad**: los colores de facción y rareza siempre van con un ícono o texto, no solo color.

### 14.2 Pantallas

- **Landing** pública, **login y registro** (como Crisol).
- **Elección del héroe inicial** (los 3, con su facción, clase, vida y estilo) y **apertura del starter**.
- **Menú principal**: Jugar (PvP / Campaña), Mazos, Colección, Tienda, Ranking, Perfil; oro y rating arriba.
- **Colección**: grilla filtrable (incluye "usables con este héroe"), detalle de carta grande con su texto y para quién es, cantidad que tenés y botón de vender.
- **Editor de mazos**: se elige el héroe primero y solo se ofrecen cartas usables por él; lista con curva de costos, contador X/40 (hasta 200) y avisos en vivo de reglas rotas.
- **Tienda**: sobres, cartas sueltas, vender.
- **Salas** y **Campaña** (mapa de los 10 combates por héroe).
- **Batalla** (la principal, ver abajo).
- **Ranking** y **Perfil** (idioma, borrado de cuenta).

### 14.3 La pantalla de batalla

- **Horizontal**, como Crisol: tablero del rival arriba, el tuyo abajo, la mano en abanico abajo a la derecha.
- **El héroe va detrás de su fila de aliados**, nunca delante. En pantallas muy anchas puede ir al costado izquierdo de su fila para ganar altura. Al lado del héroe se ven su arma y su armadura adjuntas (lugares vacíos al empezar).
- **Línea de tiempo** de 6 casilleros en una columna a la derecha del tablero, con el reloj de 90 s (anillo que se vacía) y el botón **Listo**. Se arrastra una carta de la mano a un casillero, o se toca un aliado y después el slot objetivo (o un slot vacío propio para moverlo). Cada casillero muestra el ícono de la acción, su velocidad y los Cronos que quedan.
- **Proyección** en vivo (sección 2.4): los aliados que vas a invocar o mover aparecen translúcidos en su slot destino.
- **Indicador del rival**: "programando..." / "listo".
- **Resolución**: las dos líneas de tiempo se dan vuelta y se iluminan paso por paso; cada paso anima sus acciones en orden de velocidad (flechas de ataque, números de daño flotantes, aliados que se deslizan de slot, cartas que se dan vuelta). Botón ×2 y registro escrito de lo que pasó.
- **Tecnología**: React y CSS (transforms y animaciones) para cartas y tablero, con la librería `motion`. PixiJS solo si más adelante hacen falta partículas pesadas.

### 14.4 Sonido

Howler, como en Crisol: música de menú, de batalla y de jefe, y efectos por evento. Un sonido que falta queda en silencio.

---

## 15. Arquitectura del código

### 15.1 Stack (el mismo de Crisol)

- **Next.js 16** (App Router, Turbopack), **TypeScript** estricto, imports absolutos con `@/`.
- **MUI** + **SASS** (un `index.scss` por componente, mobile-first).
- **Auth.js v5** (Google + email/contraseña con verificación vía Resend).
- **@neogroup/neorm** sobre **PostgreSQL** (SQLite en memoria en los tests), migraciones en `database/migrations/`.
- **zustand** para los stores del cliente.
- **Serwist** para PWA / offline.
- **Vitest** para tests, **ESLint + Prettier** con la misma configuración.
- **i18n** en inglés (por defecto) y español (`app/i18n`, como Crisol).
- Deploy en **Vercel**.

La fase 0 copia de Crisol todo lo que es base y no es del juego: `(auth)`, `(public)`, `(pwa)`, `(account)`, `app/i18n`, `app/utils`, `app/models`, `app/hooks`, `proxy.ts`, la configuración y los scripts de base de datos.

### 15.2 Módulos

```
app/
  layout.tsx, page.tsx, globals.scss
  components/ models/ hooks/ utils/ i18n/      Compartidos (como en Crisol)
  (auth)/ (public)/ (pwa)/                     Copiados de Crisol y adaptados
  (protected)/
    components/AppShell/
    stores/users.ts
    (home)/          Main menu (/menu)
    (onboarding)/    Starter hero choice, starter pack and tutorial
    (engine)/        Pure engine: state, phases, resolution, keywords, effects, deck rules, AI
    (cards)/         Card catalog: cards/**, defineCard, factions, classes, starters, CardView
    (collection)/    Collection and decks: user_cards, decks, deck_cards; deck builder
    (battle)/        Battle screen (shared by PvP and campaign)
    (pvp)/           Lobby, matches, submitPlan / getMatchState, rating
    (campaign)/      Hero campaigns, progress, result verification
    (shop)/          Packs, singles, selling
    (progression)/   Levels and XP: the curve, XP per battle, grantXp, level badges
    (ranking)/       Leaderboard
    (account)/       Profile (as in Crisol)
    (art)/           Dev pages: /dev/cards (whole catalog), /dev/battle (sandbox)
```

Cada módulo tiene la misma anatomía que en Crisol: `components/` (carpeta por componente con `index.tsx` + `index.scss`), `models/`, `stores/`, `hooks/`, `utils/`, `services/`, `(pages)/` y `(api)/api/<verbNoun>/route.ts`. API siempre `POST` con JSON, respuesta `{ success, data }`, `withApi` / `withAuth` y `ApiException`.

### 15.3 El motor — `(engine)`

Sin React ni base de datos, determinístico, con tests:

```
(engine)/
  data/      rules.ts (all the constants of section 2)
  models/    MatchState, PlayerState, Slot, CardInstance, PlannedAction, Timeline, MatchEvent, Speed
  utils/
    createMatch.ts      Decks, seed, opening hands, campaign setup
    mulligan.ts
    startPhase.ts       Draw, chronos refill, phase-start effects
    validatePlan.ts     Is the timeline valid? (projection)
    projectPlan.ts      Simulation with a passive opponent, for the UI
    resolvePhase.ts     The 6 steps, by speed, with the event log
    deckRules.ts        Deck rules and canUseCard
    rating.ts           Rating calculation
    random.ts           Seeded randomness
  effects/   damage, heal, draw, summon, buff, moveAlly, attach, ...
  keywords/  guardian, quick, charge, flying, poison, ...
  ai/        Candidate generator, evaluation, difficulty levels
```

`resolvePhase(state, planA, planB) → { state, events }` es la función central: la misma en el navegador (campaña y proyección), en el servidor (PvP y verificación) y en los scripts de simulación.

### 15.4 Base de datos

| Tabla               | Contenido                                                                   |
| ------------------- | --------------------------------------------------------------------------- |
| `users`             | Como Crisol, más `rating`, `gold`, `xp`, `level`, `starterHeroId`, `packsWithoutLegendary` |
| (auth)              | `email_verification_tokens`, `password_reset_tokens` (como Crisol)          |
| `user_cards`        | `userId`, `cardId`, `quantity`                                              |
| `decks`             | `id`, `userId`, `name`, `heroId`, `updatedAt`                               |
| `deck_cards`        | `deckId`, `cardId`, `count`                                                 |
| `matches`           | Ver 12.4                                                                    |
| `campaign_progress` | `userId`, `heroId`, `stage`, `completedAt`                                  |

Sin historial de rating (solo el actual en `users.rating`), sin registro de aperturas de sobres (la garantía usa el contador `users.packsWithoutLegendary`) y sin libro de movimientos de oro (ver 19).

Las cartas, héroes y campañas **no** van en la base: viven en el código y se referencian por id (como el mundo y los catálogos en Crisol).

---

## 16. Testing y balance

- **`tests/unit`**: el motor (fases, velocidades, simultaneidad, empate, fallas, movimientos, protector, cada palabra clave, adjuntar armas y armaduras, mano de 7, fatiga, límite de fases), las reglas de mazo y `canUseCard`, los starters, el rating, los sobres (probabilidades y garantía con semilla), los precios dentro de su rango, la validación del catálogo (7.5), la IA (siempre devuelve una línea válida) e i18n.
- **`tests/flows`** (SQLite en memoria con las migraciones reales): registro y starter, compra de sobres y cartas, rarezas bloqueadas por nivel, XP y subida de nivel, venta y venta rápida, una partida PvP completa (salas, planes, plazo vencido, resolución, rating, oro, abandono) y la verificación de una partida de campaña.
- **Simulación** (scripts como `yarn battles` en Crisol):
  - `yarn duel [heroA] [heroB]`: miles de partidas CPU contra CPU; porcentaje de victorias por héroe, por carta (cuando está en el mazo) y largo medio de las partidas (objetivo: 6 a 12 fases).
  - `yarn campaign <hero-id>`: qué tan seguido gana un mazo típico cada combate de la campaña.
  - `yarn economy`: oro por día de un jugador típico, cuánto tarda en completar la colección de su héroe y en llegar al nivel de cada rareza.

---

## 17. PWA y Google Play (TWA)

Igual que Crisol:

- Manifest, service worker de Serwist y página offline (`(pwa)`). Se precachea la app y el arte de las cartas se guarda a medida que se usa.
- App Android TWA generada con **Bubblewrap** en un repo aparte (`neogroup-chronocast-android`, como `neogroup-crisol-android`), package propuesto `app.chronocast.twa`.
- `/.well-known/assetlinks.json` con `ANDROID_PACKAGE_NAME` y `ANDROID_SHA256_CERT_FINGERPRINTS`.
- Páginas públicas `/privacy` y `/delete-account`, y borrado de cuenta desde el perfil (exigidas por Play).
- Orientación horizontal y aviso "Girá el teléfono" (`OrientationGuard`).
- APK en las Releases del repo con un nombre fijo (`ChronoCast.apk`) para que el link siempre baje la última.
- **Play Store**: los sobres al azar obligan a mostrar las probabilidades (sección 11.1). El oro solo se gana jugando; si más adelante se vende algo con dinero real, dentro de la TWA tiene que ser con Google Play Billing (Digital Goods API).

---

## 18. Hoja de ruta por fases

Cada fase termina con algo jugable o usable, sus tests y el README actualizado (como Crisol).

| Fase                        | Entrega                                                                                                                                                                             |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0. Base**                 | Proyecto Next.js con la base de Crisol (auth, i18n, PWA, base de datos, lint, tests), tokens de diseño pastel, landing y menú vacío. Deploy en Vercel.                              |
| **1. Motor**                | `(engine)` completo con tests, `defineCard`, restricciones, el índice automático, el set de prueba de 30 cartas, `/dev/cards` y `yarn duel` con una IA simple.                      |
| **2. Batalla**              | La pantalla de batalla jugable contra la CPU (sin premios): programación, proyección, movimientos, reloj de 90 s, resolución animada, fin de partida.                               |
| **3. Colección y mazos**    | Tablas y servicios, elección del héroe inicial, starters, tutorial, colección y editor de mazos.                                                                                    |
| **4. Economía y tienda**    | Oro, sobres con animación, cartas sueltas con precio propio, desbloqueos, venta y venta rápida; `yarn economy`.                                                                     |
| **5. PvP**                  | Salas públicas y privadas, servidor autoritativo, plazos, polling, abandono, rating, oro por partida, ranking.                                                                      |
| **6. Campañas**             | IA por niveles, las 12 campañas (las 3 iniciales primero), verificación del resultado, premios y cartas exclusivas.                                                                 |
| **7. Contenido**            | Las 500 cartas por lotes, cada lote con sus prompts en `art/catalog.csv` y su pasada de balance; `yarn art` con progreso en vivo y `--watch`. Puede ir en paralelo desde la fase 2. |
| **8. Pulido y publicación** | Animaciones finales, sonido, arte real, rendimiento en celulares de gama baja, TWA, ficha de Play Store y primer release.                                                           |

---

## 19. Decisiones tomadas

| Tema                           | Decisión                                                                                                                                                                                     |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tamaño de mazo                 | Mínimo 40, máximo 200, contando el héroe                                                                                                                                                     |
| Héroe                          | Exactamente 1 por mazo. El jugador elige su héroe inicial y el starter trae ese héroe + 39 cartas usables por él                                                                             |
| Cronos                         | Descartar da +1 de capacidad permanente; se recarga cada fase; 1 descarte por fase                                                                                                           |
| Vida de los héroes             | Entre 90 y 120                                                                                                                                                                               |
| Equipo del héroe               | Empieza sin arma ni armadura; son cartas que se adjuntan                                                                                                                                     |
| Restricciones                  | Criterios combinables (facciones, bandos, clases y héroes); el héroe tiene que cumplirlos todos                                                                                              |
| Movimiento entre slots         | Mecánica general de todas las facciones                                                                                                                                                      |
| Mano                           | 7 iniciales y máximo 7                                                                                                                                                                       |
| Tiempo de programación         | 90 segundos por fase                                                                                                                                                                         |
| Ubicación del héroe            | Detrás de sus aliados (o al costado en pantallas anchas), nunca delante                                                                                                                      |
| Idioma del código              | Todo en inglés; el español solo como traducción de la interfaz y de las cartas (opcional)                                                                                                    |
| Carpeta de las cartas          | Todas en `cards/`, al mismo nivel; facción, bando, clase y héroe son datos de la carta, no carpetas                                                                                          |
| `yarn art`                     | Muestra cada imagen en el momento en que la procesa; `--watch` para procesar al instante                                                                                                     |
| Sobres                         | El doble de precio que en el plan anterior                                                                                                                                                   |
| Cartas sueltas                 | Precio propio por carta, dentro de un rango por rareza, el doble que en el plan anterior                                                                                                     |
| Rating                         | Solo el actual (`users.rating`), sin historial                                                                                                                                               |
| `gold_ledger`, `pack_openings` | Fuera del plan. La garantía de los sobres usa un contador en `users`. Si más adelante hace falta auditar el oro (por un bug de premios, por ejemplo), se puede sumar el libro de movimientos |
| Partidas privadas              | No cuentan para el rating y dan la mitad de oro                                                                                                                                              |
| Orientación                    | Horizontal, como Crisol                                                                                                                                                                      |
