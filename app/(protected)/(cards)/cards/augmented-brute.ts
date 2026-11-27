import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isEnhanced, self, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'augmented-brute',
  type: 'ally',
  name: 'Augmented Brute',
  text: 'Its attacks deal 3 more damage while it is Enhanced.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 4,
  tribe: 'cyborg',
  attack: 4,
  health: 10,
  attackBonus(ctx, attacker) {
    const unit = self(ctx)

    return unit && isEnhanced(unit) && unitAt(ctx, attacker)?.uid === unit.uid ? 3 : 0
  },
  ai: { value: 4, tags: ['aggro'] },
  art: {
    subject:
      'Augmented Brute: a hulking cyborg bouncer with hydraulic arms and neon tattoos, full body, magenta accents, neon cyberpunk future style'
  }
})
