import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dreaming-pyre',
  type: 'ability',
  name: 'Dreaming Pyre',
  text: 'Burn an enemy slot (3).',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'legendary',
  price: 4400,
  cost: 2,
  targets: ['enemySlot'],
  onPlay(ctx) {
    burn(ctx, ctx.targets[0], 3)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'Dreaming Pyre: a roaring ball of fire, mystic healer style'
  }
})
