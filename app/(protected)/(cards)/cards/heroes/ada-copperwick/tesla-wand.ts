import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tesla-wand',
  type: 'weapon',
  name: 'Tesla Wand',
  text: 'At the start of each phase, deal 2 damage to a random enemy ally.',
  flavor: 'Point it away from your hair.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'ada-copperwick' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 8,
  durability: 3,
  keywords: ['ranged'],
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 2)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a copper wand with a small tesla coil at its tip crackling with electricity'
  }
})
