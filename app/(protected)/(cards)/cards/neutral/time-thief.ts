import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'time-thief',
  type: 'ally',
  name: 'Time Thief',
  text: 'On enter: deal 3 damage to the enemy hero and gain 1 Chronos.',
  flavor: 'Your seconds look better in her pocket.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  attack: 6,
  health: 10,
  onEnter(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 3)
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['burn'] },
  art: {
    subject: 'a sly thief in a dark cloak pocketing glowing clock hands, smirking'
  }
})
