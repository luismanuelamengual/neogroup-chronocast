import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nymph-of-the-ancestors',
  type: 'ally',
  name: 'Nymph of the Ancestors',
  text: 'When it dies: summon a Guardian Spirit.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
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
    subject: 'a fairy-tale fae creature, the nymph of the ancestors, mid-leap, mystic healer style'
  }
})
