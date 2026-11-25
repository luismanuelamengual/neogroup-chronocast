import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-monolith',
  type: 'artifact',
  name: 'Wandering Monolith',
  text: 'At the start of each phase: your hero heals 3. (3 uses)',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    healHero(ctx, 3)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject:
      'Wandering Monolith: an ancient monolith made of carved obsidian, standing in a ruined temple, close-up filling the frame, violet accents, time rift wanderer style'
  }
})
