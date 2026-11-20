import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ballista-crew',
  type: 'ally',
  name: 'Ballista Crew',
  text: 'On enter: deal 6 damage to a random enemy ally.',
  flavor: 'Aim, wind, and let the gods sort it out.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 190,
  cost: 5,
  attack: 16,
  health: 30,
  keywords: ['ranged'],
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 6)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'two Roman soldiers loading a huge wooden ballista bolt on a fortress wall'
  }
})
