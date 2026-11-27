import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dawnbell-healer',
  type: 'ally',
  name: 'Dawnbell Healer',
  text: 'When it attacks: your allies heal 1.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  tribe: 'fae',
  keywords: ['lifesteal'],
  attack: 2,
  health: 6,
  onAttack(ctx) {
    healAllAllies(ctx, ctx.owner, 1)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Dawnbell Healer: a small fae healer ringing a tiny silver bell that sprinkles glowing motes over allies, mystic healer style'
  }
})
