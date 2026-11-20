import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'oak-scepter',
  type: 'weapon',
  name: 'Oak Scepter',
  text: 'On play: your hero heals 4.',
  flavor: 'Grown, not forged.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 4,
  durability: 3,
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
  },
  ai: { value: 1, tags: ['heal'] },
  art: {
    subject: 'a simple scepter carved from oak with leaves still growing on it'
  }
})
