import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'jetpack-courier',
  type: 'ally',
  name: 'Jetpack Courier',
  text: 'While it has 2 or more attachments, it has Flying.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  tribe: 'cyborg',
  attack: 3,
  health: 8,
  auraKeywords(ctx, unit) {
    return unit.uid === ctx.self.uid && (unit.attachments?.length ?? 0) >= 2 ? ['flying'] : []
  },
  ai: { value: 4 },
  art: {
    subject:
      'Jetpack Courier: a cyborg courier with a twin-thruster jetpack hovering between skyscrapers, full body, orange accents, neon cyberpunk future style'
  }
})
