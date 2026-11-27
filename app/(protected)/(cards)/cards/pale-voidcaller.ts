import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, consume } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pale-voidcaller',
  type: 'ally',
  name: 'Pale Voidcaller',
  text: 'When it enters: Consume 3; if you do, it gains +4 attack and +4 health.',
  flavor: 'When she speaks, the dark answers.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'common',
  price: 80,
  cost: 6,
  tribe: 'cultist',
  keywords: ['echo'],
  attack: 8,
  health: 13,
  onEnter(ctx) {
    if (consume(ctx, 3)) {
      buffSelf(ctx, 4, 4)
    }
  },
  ai: { value: 6 },
  art: {
    subject:
      'Pale Voidcaller: an athletic adult man with light brown skin, jet black hair in a sharp bob, a pointed goatee and a beaded chin piercing, dressed in a bone-white mask and grey shroud, holding a lantern, turning to look over the shoulder, with a confident smirk, indigo accents, dark end-of-time void style'
  }
})
