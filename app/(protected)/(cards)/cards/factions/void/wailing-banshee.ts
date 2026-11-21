import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wailing-banshee',
  type: 'ally',
  name: 'Wailing Banshee',
  text: 'When it dies: deal 4 damage to every enemy ally.',
  flavor: 'Her last scream is the loudest.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 12,
  health: 10,
  keywords: ['flying'],
  onDeath(ctx) {
    damageAllAllies(ctx, ctx.opponent, 4)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a ghostly banshee with flowing white hair screaming, a shockwave of green energy around her'
  }
})
