import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'staff-of-the-archmage',
  type: 'weapon',
  name: 'Staff of the Archmage',
  text: 'At the start of each phase, deal 4 damage to a random enemy ally. On play: gain 2 Chronos.',
  flavor: 'Only one hand in each era can hold it.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'mythic',
  price: 32500,
  cost: 6,
  attack: 16,
  durability: 4,
  keywords: ['ranged'],
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 2)
  },
  ai: { value: 9, tags: ['removal', 'ramp'] },
  art: {
    subject: 'an ancient tall staff of white wood with a floating star at its top surrounded by orbiting runes'
  }
})
