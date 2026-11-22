import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devout-pythia',
  type: 'ally',
  name: 'Devout Pythia',
  text: 'When it enters: your allies heal 4.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  resist: ['light'],
  price: 70,
  cost: 5,
  tribe: 'oracle',
  keywords: ['lifesteal'],
  attack: 5,
  health: 9,
  onEnter(ctx) {
    healAllAllies(ctx, ctx.owner, 4)
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject: 'an ancient temple seer in white robes, the devout pythia, raising its weapon, mystic healer style'
  }
})
