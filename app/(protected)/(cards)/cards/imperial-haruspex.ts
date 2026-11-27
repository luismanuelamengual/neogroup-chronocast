import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, neighbors } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'imperial-haruspex',
  type: 'ally',
  name: 'Imperial Haruspex',
  text: 'When it attacks: the allies next to it gain +1 attack this phase.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  resist: ['light'],
  price: 70,
  cost: 5,
  tribe: 'oracle',
  attack: 7,
  health: 9,
  onAttack(ctx) {
    for (const unit of neighbors(ctx)) {
      buffThisPhase(ctx, unit, 1)
    }
  },
  ai: { value: 5, tags: ['defense'] },
  art: {
    subject:
      'Imperial Haruspex: a stocky young man with umber skin, sandy hair in a tall mohawk, a pointed goatee and a jeweled brow piercing, dressed in a sea-green himation with pearl strands, reading signs in a golden bowl, with grim determination, violet accents, ancient bronze-age empire style'
  }
})
