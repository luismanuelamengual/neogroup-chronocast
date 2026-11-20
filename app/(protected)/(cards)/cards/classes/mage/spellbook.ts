import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spellbook',
  type: 'item',
  name: 'Spellbook',
  text: 'Draw 3 cards.',
  flavor: 'Chapter one: do not read chapter two.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 3)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a thick leather spellbook with a glowing clasp floating open, pages flipping on their own'
  }
})
