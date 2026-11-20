import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aegis-of-eternity',
  type: 'armor',
  name: 'Aegis of Eternity',
  text: 'At the start of each phase, your hero gains 3 armor.',
  flavor: 'It never breaks. It only waits.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'legendary',
  price: 5250,
  cost: 5,
  armor: 30,
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 3)
  },
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject: 'a radiant golden breastplate with an hourglass emblem that glows, floating in light'
  }
})
