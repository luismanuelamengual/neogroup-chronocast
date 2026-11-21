import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'centurion-maximus',
  type: 'ally',
  name: 'Centurion Maximus',
  text: 'When it dies: summon a Bronze Legionary.',
  flavor: 'The first to arrive, the last to leave.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'legendary',
  price: 5500,
  cost: 6,
  attack: 24,
  health: 24,
  keywords: ['guardian', 'shield', 'unique'],
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'bronze-legionary')
  },
  ai: { value: 8, tags: ['summon', 'defense'] },
  art: {
    subject:
      'a legendary centurion with a scarred face, golden phalerae medals and a red cloak, standing over a fallen standard'
  }
})
