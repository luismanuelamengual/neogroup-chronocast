# ChronoCast — Personalidad de las 6 facciones (spec aprobada 2026-11-26)

Objetivo: que cada facción use tipos de carta distintos. Tres palancas: (1) subtipos de carta,
(2) mover el equipo hoy neutral a su facción según subtipo, (3) una mecánica propia por facción
con cartas nuevas. Se respeta la identidad de robo ya implementada (Bronce: aliados vecinos;
Arcana: 2 hechizos en la fase; Primigenia: al matar; Relojería: destruir artefactos propios;
Neón: mazo rival; Vacío: muertes de aliados propios).

Decisiones del usuario: Neón = hackers (implantes + programas). Mover el equipo a su facción
dejando un set básico neutral. Las cartas que dejan de ser usables se sacan solas de los mazos
guardados (siguen en la colección).

## Regla de "favorecer"
~70% de las cartas de un subtipo son de su facción, ~20% quedan como set básico neutral
(Errantes: 1–2 comunes/poco comunes por subtipo, más débiles, sin recompensas) y las otras
facciones tienen como mucho 1–2. Las recompensas ("cuando lanzás un hechizo...") solo existen
en la facción dueña. Las cartas movidas CONSERVAN su bando (`sides`), p.ej.
`{ factions: ['primal'], sides: ['eclipse'] }`. Las cartas de robo de bando (Dawn Almanac,
Dawn's Hope, Crimson Moon, Bloodclock, Shadow Tithe) quedan neutrales de facción.

## Subtipos (`subtype` en CardDefinition, obligatorio en weapon/armor/ability/attachment)
| Facción | Armas | Armaduras | Habilidades | Adjuntos |
| primal | bow, crossbow, blowgun, sling, harpoon (javelin) | leather | instinct | mount |
| bronze | sword, axe, spear (halberd/glaive), mace (flail/warpick) | plate, shield, helm | tactic | charm |
| arcane | staff, wand, orb (scepter/bell/rod) | robe, circlet | spell | rune |
| clockwork | tool (hammer, pickaxe, wrench) | exosuit | gadget | — |
| neon | energy (blaster, plasma) | suit | program | implant |
| void | scythe, dagger | shroud | ritual | curse |
Reglas: armas bow/crossbow/blowgun/sling/harpoon → el ataque del héroe es A distancia (ranged).
energy → el ataque del héroe es Rápido (quick). Se muestra en la carta en la línea del tipo
("Arma · Arco"), filtro por subtipo en colección y tienda. Mobile-first landscape.

## Mecánicas nuevas
- **Presa (primal)**: estado `prey` en Unit. Recibe +3 de daño de los ataques A distancia del
  dueño de la Presa hasta el final de la fase siguiente. Lo ponen trampas y habilidades Instinto.
  Evento `onTrapTriggered` para cartas que premian trampas.
- **Panoplia (bronze)**: `hasPanoply(owner)` = el héroe tiene arma y armadura equipadas.
- **Poder mágico X (arcane)**: campo `spellPower` en armas/armaduras/aliados/héroes; el daño de
  una habilidad de subtipo `spell` suma el total del dueño. **Canalizar**: reaccionar a
  `onOwnerPlay(ctx, card)` cuando el dueño juega un hechizo.
- **Recarga / Chatarra (clockwork)**: `artifactCount`, `recharge(ctx, artifact|all, n)`, evento
  `onArtifactLeave` (un artefacto propio se destruye o se queda sin usos).
- **Mejorado / Hackeo (neon)**: `isEnhanced(unit)` = tiene ≥1 adjunto `implant`. Targets nuevos
  `enemyArtifact` y `friendlyArtifact` (Scrap Down pasa a elegir). Desactivar un artefacto o
  trampa enemiga N fases.
- **Consumir X / Maldito (void)**: costo `consume` = desterrar X cartas de la propia pila
  (chequeado en canActivate/antes de pagar). `isCursed(unit)` = tiene un adjunto `curse`.
  Evento de muerte de un aliado enemigo.
- Evento general `onOwnerPlay(ctx, card)`: cualquier carta en juego, cuando su dueño juega una carta.

## Reasignación (guía; la lista exacta queda en docs/FACTIONS-reassignment.md)
- Armas: arcos/ballestas/cerbatanas/hondas/jabalinas/arpones + Nysa's Bow → primal. Hachas,
  cuchillas, mayales, alabardas, glaives, mazas, warpicks, cutlass → bronze. Bastones, varitas,
  orbes, cetros, campanas, crooks, rods → arcane. Gideon's/Omnigear's Hammer, Pickaxes of
  Borrowed Hours/Lost Time, Warpick of Iron → clockwork. Vex's Sling, Queen Static's Blowgun,
  Ryn's Mace, Kade's Cleaver → neon, renombradas a armas de energía (subtipo energy; nuevo
  nombre, texto y art.subject; mismo id). Tracking Dagger, Bloodied Glaive → void.
- Armaduras: placas, escudos, yelmos, brazales, halos → bronze. Túnicas, circlets, estolas,
  vestiduras, mantos, wards, amuletos → arcane. Pieles, capas, abrigos de cuero, tracking vest →
  primal. Ironsteam Exosuit, Scrap Plate, Patchwork Armor → clockwork. Storm Plate, vests/jerkins
  → neon. Shrouds/wraps → void.
- Trampas: casi todas → primal. Quedan: Unyielding Trap (bronze), Arcane Mine y Mana-Bound Mine
  (arcane), Hostile Takeover (clockwork), Nightwire Net (neon, firma de Vex).
- Artefactos: relojes, sundials, monolitos, terminales, altares, faroles, braseros → clockwork.
  Banners, Altar of the Sun Temple, Solar Idol, Senate Archive → bronze. Hungry Banner, Totem of
  the Herd, Ooma's Banner → primal. Aldric's Beacon, Ethereal Beacon → arcane. Encrypted/Silent
  Monolith → neon. Idols de sombra, Obelisk of the Grave, Xulthar's Crystal, Nyx's Idol → void.
- Adjuntos: implantes, platings, insignias, Virus of Dusk → neon. Hexes, leeches, marks,
  manacles, rust, brand → void (curse). Saddles → primal (mount). Runes → arcane. Charms/amulets
  → bronze. Riveted Blessing → clockwork.
- Habilidades: daño elemental/congelar/devolver a la mano → arcane (spell). Buffs temporales,
  arengas, invocar reclutas → bronze (tactic). Crecer permanente y curar → primal (instinct).
  Chronos/energía/reparar/sabotear equipo → clockwork (gadget). Robo/descarte/aturdir/sigilo →
  neon (program). Revivir/sacrificar/destruir/veneno/sombra → void (ritual).
- Objetos (item): quedan neutrales (tipo propio de los Errantes).

## Cartas nuevas (37)
Primal: Hunter's Snare (trampa 1: cuando entra un aliado enemigo, queda Presa) · Spike Pit
(trampa 2: cuando un aliado enemigo ataca, 4 de daño y queda Presa) · Saurian Bone Bow (arma bow
3, 4/3: tus ataques a una Presa hacen +3 más) · Stalker's Eye (instinct 1, fast: un aliado
enemigo queda Presa) · Tar Pit Trapper (aliado caveborn 3: cuando se activa una trampa tuya,
+2/+2) · Huntmistress (aliado beast 4, épica: al entrar busca la primera trampa del mazo).
Bronze: Centurion's Gladius (arma sword 2: Panoplia: +2 ataque) · Legion Shield (armadura shield
3: tus Legionarios +0/+2) · Imperial Arsenal (tactic 3: busca la primera arma y la primera
armadura del mazo) · Temper the Steel (tactic 2, instant: arma y armadura +2 durabilidad) ·
Legion Smith (aliado legionnaire 3: al entrar arma y armadura +1 durabilidad) · Veteran of a
Thousand Battles (aliado colossus 5, rara: Panoplia: entra con +3/+3 y Represalia).
Arcane: Archmage's Staff (arma staff 4: Poder mágico +2) · Frost Circlet (armadura circlet 3:
Poder mágico +1; tus hechizos de hielo también congelan) · Tower Apprentice (aliado magus 2:
Poder mágico +1) · Fae Channeler (aliado fae 3: cuando lanzás un hechizo, +1/+1) · Frost Storm
(spell 4, hielo: congela a todos los aliados enemigos y 2 de daño de hielo) · Open Grimoire
(spell 2: busca los 2 primeros hechizos del mazo).
Clockwork: Chief Mechanic (aliado inventor 3: al entrar, tus artefactos con usos ganan 1 uso) ·
Scrap Automaton (aliado automaton 2: Chatarra: +2/+2) · Torque Wrench (arma tool 2: cuando tu
héroe ataca, un artefacto tuyo gana 1 uso) · Great Cog (artefacto 3: con 3+ artefactos, tus
aliados +1 ataque) · Portable Workshop (artefacto 2, 2 usos: al empezar cada fase busca el primer
artefacto del mazo) · Steam Exosuit (armadura exosuit 4: cada golpe se reduce 1 por artefacto
tuyo, hasta 3).
Neon: Neural Implant (implant 1: +1/+1 y Rápido) · Plasma Arm (implant 3: +3 ataque, sus ataques
son de rayo) · Street Surgeon (aliado cyborg 3: al entrar, un implante de tu pila vuelve a la
mano) · Back-Alley Clinic (program 2: busca el primer implante del mazo y robá una carta) ·
Trojan Virus (program 2, fast: desactiva un artefacto o trampa del rival por 2 fases) · Pulse
Blaster (arma energy 3: si tenés un aliado Mejorado, tus ataques hacen +2) · Overclock Hacker
(aliado netrunner 4: tus aliados Mejorados tienen Sigilo hasta que atacan).
Void: Mark of the Doomed (curse 2: 2 de daño de sombra al empezar cada fase; si muere, invocás
un Esqueleto) · Scythe of the Last Dusk (arma scythe 4, lifesteal: cuando mata a un aliado, +1
durabilidad) · Ritual Dagger (arma dagger 1: al equiparla sacrificás un aliado tuyo y gana tanto
ataque como el suyo) · Rite of Ashes (ritual 3, Consumir 4: un aliado de tu pila vuelve con
+2/+2) · Void High Priest (aliado cultist 4: cuando muere un aliado enemigo Maldito, tu héroe se
cura 4) · Shroud of the Thousand (armadura shroud 3: al empezar cada fase, Consumir 1: +1
durabilidad).

## Héroes
Kora: Scout Shot además deja Presa; pasiva: cuando se activa una trampa tuya, tu héroe gana 1
energía. Varro: pasiva Panoplia: tus Legionarios +1 ataque. Caelus: su +1 ataque por fase pide
arma equipada. Ilyra: pasiva Poder mágico +1. Morgrath: habilidad pasa a hechizo: congela a los
aliados enemigos con 4 o menos de vida y les hace 4 de sombra (deja de revivir). Brassmaw:
pasiva cura 1 por artefacto tuyo (hasta 3). Vex: pasiva: tus aliados Mejorados son Rápidos.
Nyx: pasiva: cuando muere un aliado enemigo Maldito, tu héroe se cura 3. Ada, Queen Static,
Malachar, Ooma: sin cambios.
