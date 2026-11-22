import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tome-of-whispers',
  type: 'artifact',
  name: 'Tome of Whispers',
  text: 'Artifact. At the start of each phase, draw a card and your hero loses 2 health.',
  flavor: 'It knows everything. It asks for a little in return.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  price: 560,
  cost: 2,
  onPhaseStart(ctx) {
    draw(ctx, ctx.owner, 1)
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 2)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'a floating ancient book with glowing violet pages whispering ghostly runes into the air'
  }
})
