import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mana-potion',
  type: 'item',
  name: 'Mana Potion',
  text: 'Gain 2 Chronos.',
  flavor: 'Blue, fizzy and full of possibilities.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  price: 490,
  cost: 1,
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 2)
  },
  ai: { value: 2, tags: ['ramp'] },
  art: {
    subject: 'a round glass flask of glowing blue potion with bubbles and a cork'
  }
})
