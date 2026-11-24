import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'legate-varro',
  type: 'hero',
  name: 'Legate Varro',
  text: 'Fortify (3): your hero heals 18. Instant.',
  flavor: 'He has held the line in more centuries than he can count.',
  faction: 'bronze',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'legate-varro' },
  rarity: 'common',
  cost: 0,
  health: 65,
  ability: {
    name: 'Fortify',
    text: 'Your hero heals 18.',
    cost: 3,
    speed: 'instant',
    ai: { tags: ['heal'] },
    activate(ctx) {
      healHero(ctx, 18)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a veteran Roman legate with a scarred face and a red cloak, bronze lorica and a tall plumed helmet, raising a tower shield in front of a marching legion'
  }
})
