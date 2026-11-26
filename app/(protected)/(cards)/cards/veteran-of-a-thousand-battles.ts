import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, grantKeyword, hasPanoply, self } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'veteran-of-a-thousand-battles',
  type: 'ally',
  name: 'Veteran of a Thousand Battles',
  text: 'When it enters, with Panoply (your hero has a weapon and an armor): it gains +3 attack, +3 health and Retaliate.',
  flavor: 'Every scar is a battle he won.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'rare',
  price: 450,
  cost: 5,
  tribe: 'colossus',
  attack: 5,
  health: 7,
  onEnter(ctx) {
    const unit = self(ctx)

    if (unit && hasPanoply(ctx)) {
      buffSelf(ctx, 3, 3)
      grantKeyword(ctx, unit, 'retaliate')
    }
  },
  ai: { value: 5, tags: ['panoply'] },
  art: {
    subject:
      'Veteran of a Thousand Battles: a towering scarred bronze-armored giant warrior with a notched sword and a battered shield, standing on a battlefield of broken spears, low angle, crimson accents, ancient bronze-age empire style'
  }
})
