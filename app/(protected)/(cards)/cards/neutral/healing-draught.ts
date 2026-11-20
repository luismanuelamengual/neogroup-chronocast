import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'healing-draught',
  type: 'item',
  name: 'Healing Draught',
  text: 'Your hero heals 15.',
  flavor: 'Tastes like strawberries from the year 3000.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 40,
  cost: 1,
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 15)
  },
  ai: { value: 1, tags: ['heal'] },
  art: {
    subject: 'a round glass bottle with a glowing pink potion and a tiny hourglass floating inside, on a wooden table'
  }
})
