import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dreaming-pyre',
  type: 'ability',
  name: 'Dreaming Pyre',
  text: 'Burn an enemy slot (3).',
  flavor: 'It burns with the colors of dreams.',
  faction: 'neutral',
  restriction: {},
  rarity: 'legendary',
  price: 2080,
  cost: 2,
  targets: ['enemySlot'],
  onPlay(ctx) {
    burn(ctx, ctx.targets[0], 3)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Dreaming Pyre: a roaring funeral pyre of tall flames, in a dark forest clearing, bursting toward the viewer, turquoise accents, mystic healer style'
  }
})
