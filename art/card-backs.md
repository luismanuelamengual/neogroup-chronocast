# Dorsos de cartas: prompts y precios

13 dorsos: 1 gratis (el que viene por defecto) y 12 a la venta en 5 escalones. Cuanto más caro, más detalle, más materiales nobles y más brillo.

## Antes de generar

- **Tamaño:** vertical 5:7 (por ejemplo 1024×1434). El juego muestra el dorso en 5:7 con `object-fit: cover`; si lo generás en 4:5 (1024×1280, como el `default.png` actual) se recortan ~5 % de cada costado, así que el borde tiene que quedar con margen.
- **Se ve chiquito:** en batalla, en celular horizontal, el dorso ocupa unos 60 px de ancho. Todos los prompts piden un motivo central grande y una silueta clara para que se reconozca a ese tamaño.
- **Texto:** solo el dorso por defecto lleva "ChronoCast". Si el generador escribe mal la palabra, generalo con la variante "sin texto" y pongo el nombre por CSS con la fuente del juego (queda nítido en cualquier tamaño).
- **Archivos:** van en `art/source/backs/` con el nombre que figura al lado de cada uno; `yarn art` los deja en `public/backs/`.

## Estilo común (ya va incluido en cada prompt)

> Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges.

---

## 0. Clásico (gratis, por defecto) · `default.png`

Pintado, con brillo suave, un emblema de reloj y el nombre del juego en una cinta; más sobrio que los dorsos de Eras.

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, soft magical lighting, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing. In the center a polished golden hourglass with glowing violet sand, set inside a round brass clock dial with roman numerals and two small interlocking gears peeking from behind it, a soft violet glow and a few sparkles around it. Across the lower third a curved gold ribbon banner with the word "ChronoCast" in bold rounded fantasy lettering, cream letters with a dark violet outline, perfectly spelled. Rich deep violet to midnight indigo background with a faint engraved pattern of concentric clock rings and tiny stars. Elegant gold border with rounded corners, a thin inner line and a small hourglass ornament at the top and bottom center. Polished and premium but uncluttered, no other text, no watermark
```

Si el nombre sale mal escrito, generalo sin texto: reemplazá la parte del nombre por "leaving empty space for a title" y cambiá el final por "no text, no letters, no logo, no watermark". Después pongo el nombre por CSS.

---

## Escalón 1 · Eras · 800 de oro cada uno

Uno por facción. Diseño sencillo: un emblema y un patrón de fondo, borde de un solo material.

### Era Primal · `primal.png`

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges. In the center a stone hourglass wrapped in green vines with a glowing amber sand core and a small dinosaur claw mark carved on it. Background of mossy jungle green with a subtle pattern of fern leaves and cave painting spirals. Simple carved stone border with rough edges. Earthy greens and warm amber accents. No text, no letters, no logo, no watermark
```

### Era de Bronce · `bronze.png`

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges. In the center a round bronze shield with an hourglass embossed on it, crossed by two short spears behind. Background of warm terracotta red with a subtle ancient Greek meander key pattern. Simple hammered bronze border. Terracotta, bronze and cream colors. No text, no letters, no logo, no watermark
```

### Era Arcana · `arcane.png`

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges. In the center a glowing magic circle of runes with a floating crystal hourglass, sparkling blue magic inside it. Background of midnight blue with faint constellations and small stars. Simple silver border with tiny rune marks. Deep blue, silver and cyan glow. No text, no letters, no logo, no watermark
```

### Era Mecánica · `clockwork.png`

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges. In the center one big brass cogwheel with a clock face in its middle, the hands pointing to twelve. Background of dark teal metal plates with rivets and a subtle pattern of small gears. Simple riveted copper border. Brass, copper and dark teal. No text, no letters, no logo, no watermark
```

### Era Neón · `neon.png`

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges. In the center a glowing neon tube hourglass in hot pink and electric cyan. Background of near-black with a subtle glowing grid in perspective and faint circuit lines. Simple glowing neon line border. Hot pink, cyan and black, synthwave mood. No text, no letters, no logo, no watermark
```

### Era del Vacío · `void.png`

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges. In the center a cracked obsidian hourglass leaking purple void energy, with a single glowing eye shape in the swirl. Background of deep black-purple with a subtle swirling vortex and tiny distant stars. Simple jagged obsidian border. Black, deep purple and toxic violet glow. No text, no letters, no logo, no watermark
```

---

## Escalón 2 · Raros · 2.000 de oro cada uno

Dos materiales, patrón de fondo con más capas y esquinas decoradas.

### Reloj de Bolsillo · `pocket-watch.png`

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges. In the center a large open antique gold pocket watch with an engraved lid, its chain looping symmetrically around it, the dial with roman numerals and a tiny hourglass in place of the hands. Background of rich burgundy velvet with an embossed damask pattern. Gold border with engraved scrollwork and a small gear ornament in each corner. Burgundy, gold and ivory. No text, no letters, no logo, no watermark
```

### Grieta del Tiempo · `time-rift.png`

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges. In the center a vertical glowing turquoise rift tearing open the card, with floating fragments of different eras drifting out of it in mirror symmetry: a stone tablet, a bronze helmet, a gear, a neon sign shard. Background of dark navy with swirling turquoise energy streaks. Silver and turquoise crystal border with small floating shards at the corners. Turquoise, navy and white light. No text, no letters, no logo, no watermark
```

---

## Escalón 3 · Épicos · 5.000 de oro cada uno

Escena completa, mucho detalle, iluminación dramática, piedras preciosas.

### Astrolabio Celestial · `astrolabe.png`

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, dramatic lighting, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges. In the center a grand golden astrolabe of nested rotating rings engraved with zodiac symbols, a glowing sun-like hourglass at its heart, tiny planets orbiting it. Background of a deep cosmic nebula in violet and blue with bright stars and a faint golden star chart overlay. Ornate gold filigree border set with small sapphires, with a crescent moon at the top and a sun at the bottom. Gold, sapphire blue and violet, magical glow. No text, no letters, no logo, no watermark
```

### Dragón del Eón · `eon-dragon.png`

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, dramatic lighting, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges. In the center a majestic dragon coiled in a perfect circle around a glowing hourglass, biting its own tail like an ouroboros, its scales made of tiny clock faces and gears. Background of molten orange and crimson with swirling embers and faint clock dials. Ornate dark iron and gold border set with small rubies, with dragon claws gripping the four corners. Crimson, gold and black. No text, no letters, no logo, no watermark
```

---

## Escalón 4 · Legendarios · 10.000 de oro cada uno

Lo más elaborado: varias capas, oro, gemas, luz propia.

### Trono del Tiempo · `throne-of-time.png`

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, dramatic radiant lighting, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges. In the center a radiant crowned hourglass made of crystal and gold, flowing with liquid starlight instead of sand, floating above a small throne of clockwork, with two golden angelic wings spreading symmetrically from it. Behind it a giant glowing clock dial with roman numerals and beams of divine light. Background of royal purple and white gold with a cathedral rose window pattern. Extremely ornate gold filigree border encrusted with diamonds, amethysts and emeralds, with miniature hourglasses, gears and laurel wreaths in the corners. Royal purple, white gold and prismatic gem sparkles. Luxurious, epic, masterpiece detail. No text, no letters, no logo, no watermark
```

### Fin de las Eras · `end-of-eras.png`

```
Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high contrast, clean thick outlines, dramatic radiant lighting, perfectly symmetric ornamental composition centered on the card, vertical 5:7 framing, one large bold central emblem that stays readable at very small sizes, decorative border kept well inside the edges. In the center a cosmic hourglass in which a whole galaxy flows from the top bulb to the bottom, surrounded by six orbiting symbols of the eras: a stone claw, a bronze shield, a rune crystal, a brass gear, a neon tube and an obsidian shard, each glowing in its own color. Background of a swirling time vortex in all those colors meeting at the center. Ultra ornate border of platinum and gold, inlaid with gems in the six era colors, with ornamental hourglasses at the top and bottom. Prismatic rainbow glow over deep space black. Epic, luxurious, masterpiece detail. No text, no letters, no logo, no watermark
```

---

## Precios propuestos

| Escalón | Dorsos | Precio | Partidas ganadas para pagarlo* |
|---|---|---|---|
| Clásico | 1 | Gratis | — |
| Eras | 6 | 800 | ~6 días de juego |
| Raros | 2 | 2.000 | ~2 semanas |
| Épicos | 2 | 5.000 | ~1 mes |
| Legendarios | 2 | 10.000 | ~2 meses |

\* Calculado con la economía actual: 40 de oro por victoria PvP y 100 por la primera victoria del día. Jugando unas 3 victorias diarias se ganan unos 220 de oro por día. Como referencia, un sobre cuesta entre 500 y 8.000, y un héroe legendario 2.800.
