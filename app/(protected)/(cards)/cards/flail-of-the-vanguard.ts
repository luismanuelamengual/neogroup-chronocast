import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { suppressKeywordsAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flail-of-the-vanguard',
  type: 'weapon',
  subtype: 'mace',
  name: 'Flail of the Vanguard',
  text: 'When your hero attacks an ally with it: that ally loses Guardian this phase.',
  flavor: 'Chains, spikes and good intentions.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 3,
  durability: 2,
  onAttack(ctx, target) {
    if (target.slot !== 'hero') {
      suppressKeywordsAt(ctx, target, ['guardian'])
    }
  },
  ai: { value: 2 },
  art: {
    subject:
      'Flail of the Vanguard: a single flail made of ivory and jade, floating above a marble pedestal, seen from above, rose pink accents, warrior style'
  }
})
