import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, isEnhanced, self } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'holo-mech',
  type: 'ally',
  name: 'Holo Mech',
  text: 'When it attacks: if it is Enhanced, draw a card.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  element: 'sonic',
  weak: ['lightning'],
  price: 200,
  cost: 5,
  tribe: 'cyborg',
  keywords: ['agile'],
  attack: 6,
  health: 10,
  onAttack(ctx) {
    const unit = self(ctx)

    if (unit && isEnhanced(unit)) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject:
      'Holo Mech: a mech built of polished brass with ruby lenses, with a spinning propeller, banking through the air, neon cyberpunk future style'
  }
})
