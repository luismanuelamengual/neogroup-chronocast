import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nymph-of-the-ancestors',
  type: 'ally',
  name: 'Nymph of the Ancestors',
  text: 'When it dies: summon a Guardian Spirit.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 65,
  cost: 4,
  tribe: 'fae',
  attack: 3,
  health: 10,
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'guardian-spirit')
  },
  ai: { value: 4, tags: ['summon'] },
  art: {
    subject:
      'Nymph of the Ancestors: a nymph with golden skin and white hair and butterfly wings, prowling low, turquoise accents, mystic healer style'
  }
})
