import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aegis-of-the-warlord',
  type: 'armor',
  name: 'Aegis of the Warlord',
  text: 'At the start of each phase, your hero gains 2 armor.',
  flavor: 'It has never been pierced. Not once.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  armor: 26,
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 5, tags: ['defense'] },
  art: {
    subject: 'an ornate golden breastplate with a lion face on the chest, glowing faintly'
  }
})
