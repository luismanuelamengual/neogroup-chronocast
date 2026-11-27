import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { boostWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'argos-the-silver-hound',
  type: 'ally',
  name: 'Argos, the Silver Hound',
  text: 'When it enters: your weapon gains +1 attack and +1 durability.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  keywords: ['quick'],
  attack: 4,
  health: 6,
  onEnter(ctx) {
    boostWeapon(ctx, ctx.owner, 1, 1)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'a sleek silver hound with a golden collar leaping through a sunny meadow'
  }
})
