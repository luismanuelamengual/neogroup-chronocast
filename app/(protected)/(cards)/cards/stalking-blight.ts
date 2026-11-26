import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stalking-blight',
  type: 'ability',
  subtype: 'ritual',
  name: 'Stalking Blight',
  text: 'Poison an enemy ally (2).',
  flavor: 'It follows you home.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    poison(ctx, ctx.targets[0], 2)
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Stalking Blight: withered black thorns spreading over dead leaves, over a stormy battlefield, close-up filling the frame, scarlet accents, hunter style'
  }
})
