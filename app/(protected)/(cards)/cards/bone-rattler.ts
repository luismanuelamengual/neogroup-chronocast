import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bone-rattler',
  type: 'ally',
  name: 'Bone Rattler',
  text: 'When it dies: poison the enemy hero (3).',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'undead',
  attack: 3,
  health: 8,
  onDeath(ctx) {
    poison(ctx, { player: ctx.opponent, slot: 'hero' }, 3)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Bone Rattler: a rattling skeleton draped in rotting cloth shaking a gourd full of finger bones, green fumes, dark ritual mood'
  }
})
