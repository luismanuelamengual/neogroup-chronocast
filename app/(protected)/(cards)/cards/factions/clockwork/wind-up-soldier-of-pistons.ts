import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wind-up-soldier-of-pistons',
  type: 'ally',
  name: 'Wind-Up Soldier of Pistons',
  text: 'When it enters: your hero gains 4 armor.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  resist: ['acid'],
  weak: ['lightning'],
  price: 55,
  cost: 3,
  tribe: 'automaton',
  keywords: ['thorns'],
  thorns: 3,
  attack: 4,
  health: 6,
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 4)
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject:
      'Wind-Up Soldier of Pistons: a soldier built of gold filigree with blue dials, with a smoking chimney, marching forward, steampunk steam era style'
  }
})
