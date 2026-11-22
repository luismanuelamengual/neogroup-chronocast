import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sharp-raptor',
  type: 'ally',
  name: 'Sharp Raptor',
  text: 'When it dies: your Saurians gain +1 attack and +1 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  weak: ['ice'],
  price: 205,
  cost: 5,
  tribe: 'saurian',
  attack: 7,
  health: 9,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'saurian', 1, 1)
  },
  ai: { value: 5, tags: ['buff', 'tribe'] },
  art: {
    subject: 'a dinosaur, the sharp raptor, mid-leap, hunter style'
  }
})
