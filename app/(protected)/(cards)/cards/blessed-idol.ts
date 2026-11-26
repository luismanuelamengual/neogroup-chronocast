import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blessed-idol',
  type: 'artifact',
  name: 'Blessed Idol',
  text: 'At the start of each phase: your hero heals 3. (3 uses)',
  flavor: 'Touched by a thousand pilgrims.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    healHero(ctx, 3)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject:
      'Blessed Idol: an ancient idol made of carved obsidian, standing in shallow water, close-up filling the frame, saffron yellow accents, mystic healer style'
  }
})
