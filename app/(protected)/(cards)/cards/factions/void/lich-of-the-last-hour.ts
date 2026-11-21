import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lich-of-the-last-hour',
  type: 'ally',
  name: 'Lich of the Last Hour',
  text: '',
  flavor: 'At the last hour, the dead rise for him.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 14,
  health: 16,
  ability: {
    name: 'Drain Life',
    text: 'Deal 6 damage to the enemy hero and your hero heals 6.',
    cost: 2,
    activate(ctx) {
      damage(ctx, { player: ctx.opponent, slot: 'hero' }, 6)
      heal(ctx, { player: ctx.owner, slot: 'hero' }, 6)
    }
  },
  ai: { value: 6, tags: ['ability'] },
  art: {
    subject: 'a lich in tattered robes holding a cracked hourglass full of green sand, skeletons rising behind him'
  }
})
