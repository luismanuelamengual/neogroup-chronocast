import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-dawn-angel',
  type: 'ally',
  reward: true,
  name: 'The Dawn Angel',
  text: 'On enter: your hero heals 15 and a random ally of your discard pile returns to play.',
  flavor: 'She appears once in a thousand years, at the first light.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'aldric-dawnkeeper' },
  rarity: 'legendary',
  cost: 6,
  attack: 20,
  health: 24,
  keywords: ['flying', 'shield', 'unique'],
  onEnter(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 15)
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 8, tags: ['heal', 'revive', 'defense'] },
  art: {
    subject: 'a radiant angel with golden wings descending from the clouds at dawn, holding a sword of light'
  }
})
