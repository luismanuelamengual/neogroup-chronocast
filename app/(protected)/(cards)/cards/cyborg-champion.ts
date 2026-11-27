import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { enhancedAllies, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cyborg-champion',
  type: 'ally',
  name: 'Cyborg Champion',
  text: 'Every damage it takes is 1 lower for each Enhanced ally of yours.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'epic',
  price: 1100,
  cost: 6,
  tribe: 'cyborg',
  keywords: ['retaliate'],
  attack: 6,
  health: 14,
  modifyDamage(ctx, target, amount) {
    return unitAt(ctx, target)?.uid === ctx.self.uid
      ? Math.max(0, amount - enhancedAllies(ctx, ctx.owner).length)
      : amount
  },
  ai: { value: 6 },
  art: {
    subject:
      'Cyborg Champion: an arena champion cyborg covered in mismatched chrome upgrades raising a fist, full body, magenta accents, neon cyberpunk future style'
  }
})
