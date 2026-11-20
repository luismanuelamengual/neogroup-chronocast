import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'censer-of-souls',
  type: 'weapon',
  name: 'Censer of Souls',
  text: 'At the start of each phase, your hero heals 3.',
  flavor: 'Its smoke carries prayers to every era.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'epic',
  price: 1700,
  cost: 3,
  attack: 8,
  durability: 4,
  onPhaseStart(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 3)
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject: 'a swinging golden censer releasing glowing blue smoke shaped like souls'
  }
})
