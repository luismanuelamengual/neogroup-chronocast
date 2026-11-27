import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vestments-of-renewal',
  type: 'armor',
  subtype: 'robe',
  name: 'Vestments of Renewal',
  text: 'When it is equipped: your Fae gain +1 attack and +2 health.',
  flavor: 'Worn by healers who never sleep.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'epic',
  price: 900,
  cost: 1,
  armor: 1,
  durability: 4,
  onPlay(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'fae')) {
      buff(ctx, unit, 1, 2)
    }
  },
  ai: { value: 2 },
  art: {
    subject:
      'Vestments of Renewal: a single vestments made of blackened iron with gold inlay, on a worn wooden table, framed by drifting embers, teal accents, mystic healer style'
  }
})
