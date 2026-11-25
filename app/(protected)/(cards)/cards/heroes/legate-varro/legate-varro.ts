import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { addBoon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'legate-varro',
  type: 'hero',
  name: 'Legate Varro',
  text: 'Testudo (4): until the end of the next phase, your allies take 2 less damage and you deal 2 more damage to the enemy hero and allies. Instant.',
  flavor: 'He has held the line in more centuries than he can count.',
  faction: 'bronze',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'legate-varro' },
  rarity: 'common',
  cost: 0,
  health: 65,
  ability: {
    name: 'Testudo',
    text: 'Until the end of the next phase, your allies take 2 less damage and you deal 2 more damage to the enemy hero and allies.',
    cost: 4,
    speed: 'instant',
    activate(ctx) {
      addBoon(ctx, ctx.owner, 'guard', 2)
      addBoon(ctx, ctx.owner, 'empower', 2)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a veteran Roman legate with a scarred face and a red cloak, bronze lorica and a tall plumed helmet, raising a tower shield in front of a marching legion'
  }
})
