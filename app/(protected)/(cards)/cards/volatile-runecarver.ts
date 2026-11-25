import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'volatile-runecarver',
  type: 'ally',
  name: 'Volatile Runecarver',
  text: 'When it enters: if you have another Magus, draw a card.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'uncommon',
  resist: ['arcane'],
  price: 170,
  cost: 3,
  tribe: 'magus',
  attack: 4,
  health: 9,
  onEnter(ctx) {
    if (tribeAllies(ctx, ctx.owner, 'magus', true).length > 0) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'Volatile Runecarver: a broad-shouldered middle-aged dwarf woman with dark ebony skin, platinum blond hair with a side-swept fringe and a golden nose ring, wearing a thin silver circlet, dressed in a high-collared sorcerer coat, carving a glowing rune into stone, with calm focus, ivory accents, mage style'
  }
})
