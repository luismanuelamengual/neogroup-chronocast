import { Faction } from '@/app/(protected)/(engine)/models/Faction'

/**
 * The touch of each era in the art prompts (docs/PLAN.md, section 9.1): its
 * palette and atmosphere, between the base style and the card's subject.
 */
export const FACTION_STYLES: Record<Faction, string> = {
  primal:
    'prehistoric era, lush giant ferns and volcanoes, warm greens, amber and lava orange, tribal bone and leather details',
  bronze:
    'ancient Roman and Greek era, marble columns and dusty arenas, crimson, bronze and gold tones, polished metal shine',
  arcane:
    'medieval high fantasy era, starry violet skies and glowing runes, deep blues, violets and silver, magical sparkles',
  clockwork:
    'steampunk Victorian era, brass gears, copper pipes and steam, warm amber, brass and sepia tones with glowing dials',
  neon: 'cyberpunk future era, rainy neon-lit megacity at night, electric cyan, hot magenta and deep purple, holograms',
  void: 'cosmic horror era beyond time, swirling dark nebulas and floating ruins, black, ultraviolet and sickly green glow',
  neutral:
    'the Time Rift between eras, floating fragments of different centuries, turquoise rift light, hourglasses and clock motifs'
}

