import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'infiltrator-of-the-silent-trail',
  type: 'ally',
  name: 'Infiltrator of the Silent Trail',
  text: 'When it dies: the enemy hero loses 2 energy.',
  flavor: 'Not a leaf moves when she passes.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  tribe: 'netrunner',
  attack: 2,
  health: 8,
  onDeath(ctx) {
    drainEnergy(ctx, ctx.opponent, 2)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Infiltrator of the Silent Trail: an athletic middle-aged man with ruddy skin, honey blond hair with a side-swept fringe, a pointed goatee and glowing tattoos on the cheeks, wearing chunky headphones, dressed in an oversized hoodie with cables spilling out, slipping through a glowing doorway, with a mischievous wink, saffron yellow accents, hunter style'
  }
})
