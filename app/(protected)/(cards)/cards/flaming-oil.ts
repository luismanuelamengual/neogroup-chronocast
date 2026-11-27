import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flaming-oil',
  type: 'item',
  name: 'Flaming Oil',
  text: 'Burn an enemy ally (4). Fast.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  element: 'fire',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    burn(ctx, ctx.targets[0], 4)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Flaming Oil: a clay jar of oil shattering against a shield and bursting into roaring flames, dark ritual mood'
  }
})
