import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'eternal-emperor',
  type: 'ally',
  name: 'The Eternal Emperor',
  text: 'On enter: your other allies gain +4 attack and +10 health and your hero gains 20 armor.',
  flavor: 'Rome fell a hundred times. He never did.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'mythic',
  price: 35000,
  cost: 9,
  attack: 34,
  health: 70,
  keywords: ['unique'],
  onEnter(ctx) {
    buffAllies(ctx, ctx.owner, 4, 10, true)
    gainArmor(ctx, ctx.owner, 20)
  },
  ai: { value: 12, tags: ['buff', 'defense'] },
  art: {
    subject:
      'an ageless emperor on a golden throne floating in the Time Rift, legions of every century kneeling around him'
  }
})
