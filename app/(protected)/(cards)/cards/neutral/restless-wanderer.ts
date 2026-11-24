import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'restless-wanderer',
  type: 'ally',
  name: 'Restless Wanderer',
  text: 'At the start of each phase: your hero heals 2.',
  flavor: 'Sleeping is for people with only one century.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 630,
  cost: 4,
  keywords: ['flying'],
  attack: 6,
  health: 7,
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject:
      'Restless Wanderer: a barrel-chested middle-aged man with freckled fair skin, auburn hair in an afro, a pointed goatee and round spectacles, wearing a straw hat, dressed in desert robes with an aviator scarf, leaning on a carved walking staff, with a haunted stare, emerald accents, time rift wanderer style'
  }
})
