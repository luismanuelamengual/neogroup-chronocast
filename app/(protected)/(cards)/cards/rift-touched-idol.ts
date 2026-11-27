import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-touched-idol',
  type: 'artifact',
  name: 'Rift-Touched Idol',
  text: 'At the start of each phase: your hero heals 2 for each Guardian ally of yours. (3 uses)',
  flavor: 'Worshipped in seven eras at once.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  charges: 3,
  onPhaseStart(ctx) {
    healHero(ctx, 2 * alliesOf(ctx, ctx.owner).filter((unit) => unit.keywords.includes('guardian')).length)
    spendCharge(ctx)
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject:
      'Rift-Touched Idol: an ancient idol made of blue steel with silver runes, standing on a floating rock, dramatic backlight, magenta accents, time rift wanderer style'
  }
})
