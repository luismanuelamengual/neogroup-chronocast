import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'plasma-colossus',
  type: 'ally',
  name: 'Plasma Colossus',
  text: 'Its ability is paid with energy (⚡).',
  flavor: 'Its cannon warms up like a sun.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 420,
  cost: 5,
  tribe: 'enforcer',
  element: 'fire',
  attack: 5,
  health: 12,
  ability: {
    name: 'Plasma Cannon',
    text: 'Deal 8 fire damage to an enemy slot.',
    cost: 3,
    resource: 'energy',
    targets: ['enemySlot'],
    ai: { tags: ['removal'] },
    activate(ctx) {
      damage(ctx, ctx.targets[0], 8, 'fire')
    }
  },
  ai: { value: 5, tags: ['ability', 'energy', 'removal'] },
  art: {
    subject:
      'Plasma Colossus: a giant armored enforcer with a shoulder-mounted plasma cannon charging with white-hot energy, rainy neon street, full body, orange accents, neon cyberpunk future style'
  }
})
