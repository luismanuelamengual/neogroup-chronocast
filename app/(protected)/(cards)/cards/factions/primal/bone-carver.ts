import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bone-carver',
  type: 'ally',
  name: 'Bone Carver',
  text: 'When it dies: your hero heals 8.',
  flavor: 'Nothing is wasted. Not even you.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 9,
  health: 9,
  onDeath(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 8)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'a tribal artisan carving totems and tools from a giant dinosaur bone by firelight'
  }
})
