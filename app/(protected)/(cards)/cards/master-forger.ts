import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { recoverGear } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'master-forger',
  type: 'ability',
  subtype: 'tactic',
  name: 'Master Forger',
  text: 'The last weapon or armor of your discard pile returns to your hand.',
  flavor: 'Nothing broken stays broken in her forge.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  onPlay(ctx) {
    recoverGear(ctx, ctx.owner)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Master Forger: a bronze anvil with a glowing reforged sword on it, sparks flying, hammer resting nearby, close-up filling the frame, copper accents, ancient bronze-age empire style'
  }
})
