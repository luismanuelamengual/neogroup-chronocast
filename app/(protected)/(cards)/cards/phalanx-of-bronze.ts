import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { neighbors, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'phalanx-of-bronze',
  type: 'ally',
  name: 'Phalanx of Bronze',
  text: 'Its attacks deal 2 more damage for each ally next to it.',
  flavor: 'One shield is a wall. Twelve are an empire.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'legionnaire',
  attack: 6,
  health: 9,
  attackBonus(ctx, attacker) {
    return unitAt(ctx, attacker)?.uid === ctx.self.uid ? 2 * neighbors(ctx).length : 0
  },
  ai: { value: 4 },
  art: {
    subject:
      'Phalanx of Bronze: a broad-shouldered elderly woman with freckled fair skin, salt-and-pepper hair cropped short and sharp cheekbones, dressed in light skirmisher leathers with bronze bracers, locking a tall round shield, with wide-eyed wonder, turquoise accents, ancient bronze-age empire style'
  }
})
