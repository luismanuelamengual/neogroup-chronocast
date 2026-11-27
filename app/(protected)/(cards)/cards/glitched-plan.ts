import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stealRandomFromHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'glitched-plan',
  type: 'ability',
  subtype: 'program',
  name: 'Glitched Plan',
  text: "Take a random card from the rival's hand.",
  flavor: 'It worked in the simulation.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    stealRandomFromHand(ctx)
  },
  ai: { value: 2, tags: ['draw', 'heal'] },
  art: {
    subject:
      'Glitched Plan: a battle map table with glowing pieces and arrows, over a stormy battlefield, centered and seen from slightly below, ivory accents, neon cyberpunk future style'
  }
})
