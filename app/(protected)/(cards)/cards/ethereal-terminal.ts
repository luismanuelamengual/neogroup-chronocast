import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ethereal-terminal',
  type: 'artifact',
  name: 'Ethereal Terminal',
  text: 'At the start of each phase: draw a card. (2 uses)',
  flavor: 'It connects to libraries that no longer exist.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  charges: 2,
  onPhaseStart(ctx) {
    draw(ctx, ctx.owner, 1)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject:
      'Ethereal Terminal: an ancient terminal made of ivory and jade, standing on a floating rock, swirling around the center, gold accents, mage style'
  }
})
