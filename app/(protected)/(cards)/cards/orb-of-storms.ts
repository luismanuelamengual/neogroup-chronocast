import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'orb-of-storms',
  type: 'weapon',
  subtype: 'orb',
  name: 'Orb of Storms',
  text: 'When your hero attacks with it: deal 2 lightning damage to a random enemy ally.',
  flavor: 'A storm in a jar, minus the jar.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  element: 'lightning',
  price: 160,
  cost: 3,
  attack: 4,
  durability: 3,
  onAttack(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 2, 'lightning')
  },
  ai: { value: 3 },
  art: {
    subject:
      'Orb of Storms: a single orb made of rusted iron and chains, crackling with forked lightning, on a mossy rock, centered and seen from slightly below, emerald accents, mage style'
  }
})
