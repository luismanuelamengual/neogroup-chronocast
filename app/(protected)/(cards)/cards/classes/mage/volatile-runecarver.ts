import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'volatile-runecarver',
  type: 'ally',
  name: 'Volatile Runecarver',
  text: 'When it enters: if you have another Magus, draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
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
    subject: 'a medieval spellcaster, the volatile runecarver, lunging forward, mage style'
  }
})
