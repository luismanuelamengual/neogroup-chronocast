import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'crown-of-the-arcanist',
  type: 'armor',
  name: 'Crown of the Arcanist',
  text: 'At the start of each phase, draw a card.',
  flavor: 'It whispers spells into your dreams.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  armor: 20,
  onPhaseStart(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject: 'a floating silver crown with violet gems, runes orbiting around it'
  }
})
