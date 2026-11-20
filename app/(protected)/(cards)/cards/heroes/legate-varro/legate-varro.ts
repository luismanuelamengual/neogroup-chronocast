import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'legate-varro',
  type: 'hero',
  name: 'Legate Varro',
  text: 'Fortify (2): your hero gains 10 armor. Instant.',
  flavor: 'He has held the line in more centuries than he can count.',
  faction: 'bronze',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'legate-varro' },
  rarity: 'common',
  cost: 0,
  health: 110,
  ability: {
    name: 'Fortify',
    text: 'Your hero gains 10 armor.',
    cost: 2,
    speed: 'instant',
    activate(ctx) {
      gainArmor(ctx, ctx.owner, 10)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a veteran Roman legate with a scarred face and a red cloak, bronze lorica and a tall plumed helmet, raising a tower shield in front of a marching legion'
  }
})
