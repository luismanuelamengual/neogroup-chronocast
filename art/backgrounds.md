# Illustrated page background

Every screen (menu, battle, shop, collection, campaign...) shares one background,
`--page-background` in `app/globals.scss`: today a vector watermark
(`public/ui/watermark.svg`) over a light parchment tint. The image below replaces the
watermark with an illustrated scene in the style of the card art, softened so the
board, the cards and the white panels stay readable on top.

## How to use it

1. Generate the image with the prompt below. If the tool asks for an aspect ratio,
   pick **21:9** (ultra-wide; the phone in landscape is about 2.16:1).
2. Save it as `public/ui/page-background.webp` (export at quality ~80, about 250 KB).
3. In `app/globals.scss`, point the watermark to it:

   ```scss
   --page-watermark: url('/ui/page-background.webp') 50% 50% / cover no-repeat;
   ```

   The tint stays below it, so the corners keep their violet and amber glow while
   the image loads.
4. Check the battle at 844×390: the cards and the right panel must read at a glance.
   If the image fights with them, lighten it (or add a white layer on top, e.g.
   `linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35))` before the
   image in `--page-background`).

## page-background.webp (2520×1080, landscape 21:9)

Background illustration for a fantasy collectible card game, painted cartoon style
like the card art but softened: light, airy, pastel and low contrast, so white
interface panels and cards stay readable on top. Ultra-wide panoramic landscape
composition. A dreamy sky at the edge of time at golden hour: soft ivory and cream
clouds, pale lavender and peach haze, a faint turquoise time rift glow along the
horizon. Floating fragments of different eras drift far away near the corners, small
and hazy: a broken Roman column, a medieval stone tower, a brass clockwork island of
gears, a pale neon city skyline, all soft-focus and faded into the clouds. A huge
translucent astrolabe and clock dial with roman numerals arcs across the whole sky,
very faint, drawn with thin golden lines like a ghostly constellation. Tiny golden
sand motes and sparkles in the air. The center of the image is calm and almost empty,
a smooth gradient of cream and pale lavender with no objects, details only toward the
edges and corners, gentle light vignette. Clean soft outlines, smooth gradients, no
harsh shadows, no dark areas, no characters, no creatures. No text, no letters, no
logo, no watermark

**Negative prompt** (if the tool has one): dark, night, high contrast, saturated
center, busy composition, people, characters, animals, text, letters, logo, frame,
border, UI elements, cards
