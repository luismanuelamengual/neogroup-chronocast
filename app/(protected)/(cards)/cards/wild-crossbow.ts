import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damageAlly, isPrey } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wild-crossbow',
  type: 'weapon',
  subtype: 'crossbow',
  name: 'Wild Crossbow',
  text: 'When it is equipped: deal 4 damage to every enemy ally that is your Prey.',
  flavor: 'Strung with jungle vine and bad temper.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 70,
  cost: 5,
  attack: 6,
  durability: 4,
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      if (isPrey(ctx, unit)) {
        damageAlly(ctx, unit, 4)
      }
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      'Wild Crossbow: a single crossbow made of ivory and jade, floating above a marble pedestal, bursting toward the viewer, magenta accents, hunter style'
  }
})
