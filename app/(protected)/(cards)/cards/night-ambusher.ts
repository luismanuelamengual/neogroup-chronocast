import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'night-ambusher',
  type: 'ally',
  name: 'Night Ambusher',
  text: 'Its attacks against a damaged ally deal 3 more damage.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  tribe: 'netrunner',
  keywords: ['stealth'],
  attack: 5,
  health: 4,
  attackBonus(ctx, attacker, target) {
    const prey = unitAt(ctx, target)

    return unitAt(ctx, attacker)?.uid === ctx.self.uid && !!prey && prey.health < prey.maxHealth ? 3 : 0
  },
  ai: { value: 3 },
  art: {
    subject:
      'Night Ambusher: a masked ambusher dropping from a rooftop onto a wounded guard, twin knives catching moonlight, dark ritual mood'
  }
})
