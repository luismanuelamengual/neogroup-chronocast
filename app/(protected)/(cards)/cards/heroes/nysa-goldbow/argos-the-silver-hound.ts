import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'argos-the-silver-hound',
  type: 'ally',
  name: 'Argos, the Silver Hound',
  text: 'On enter: deal 4 damage to a random enemy ally.',
  flavor: 'He waited twenty years for her. He would wait twenty more.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'nysa-goldbow' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 12,
  health: 18,
  keywords: ['quick'],
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a sleek silver hound with a golden collar leaping beside Nysa in a sunny meadow'
  }
})
