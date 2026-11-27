import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodsworn-cutthroat',
  type: 'ally',
  name: 'Bloodsworn Cutthroat',
  text: 'When it kills an ally: your hero heals 4.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 150,
  cost: 2,
  tribe: 'enforcer',
  keywords: ['stealth'],
  attack: 4,
  health: 3,
  onAttack(ctx, target) {
    const victim = unitAt(ctx, target)

    if (victim) {
      ctx.engine.afterDamage(() => {
        if (!ctx.engine.findUnit(victim.uid)) {
          healHero(ctx, 4)
        }
      })
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Bloodsworn Cutthroat: a lean cutthroat licking a curved dagger dripping red in a moonlit alley, crimson scarf, dark ritual mood'
  }
})
