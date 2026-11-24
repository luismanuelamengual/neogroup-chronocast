import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-touched-idol',
  type: 'artifact',
  name: 'Rift-Touched Idol',
  text: 'At the start of each phase: your hero heals 4. (3 uses)',
  flavor: 'Worshipped in seven eras at once.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 65,
  cost: 4,
  charges: 3,
  onPhaseStart(ctx) {
    healHero(ctx, 4)
    spendCharge(ctx)
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject:
      'Rift-Touched Idol: an ancient idol made of blue steel with silver runes, standing on a floating rock, dramatic backlight, magenta accents, time rift wanderer style'
  }
})
