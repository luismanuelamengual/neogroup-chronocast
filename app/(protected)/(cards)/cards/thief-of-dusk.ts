import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardRandom } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thief-of-dusk',
  type: 'ally',
  name: 'Thief of Dusk',
  text: 'When it attacks the enemy hero: the enemy discards a random card.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  price: 400,
  cost: 3,
  tribe: 'drifter',
  keywords: ['stealth'],
  attack: 4,
  health: 5,
  onAttack(ctx, target) {
    if (target.slot === 'hero') {
      discardRandom(ctx, ctx.opponent)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      "Thief of Dusk: a grinning thief in a purple hood slipping a hand into a noble's satchel as the sun sets, dark ritual mood"
  }
})
