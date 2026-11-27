import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'eclipse-witch',
  type: 'ally',
  name: 'Eclipse Witch',
  text: 'When it enters: deal 3 shadow damage to every enemy ally and 3 to your hero.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'epic',
  element: 'shadow',
  price: 1150,
  cost: 5,
  tribe: 'magus',
  attack: 5,
  health: 10,
  onEnter(ctx) {
    damageAllAllies(ctx, ctx.opponent, 3, 'shadow')
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 3, 'shadow')
  },
  ai: { value: 3 },
  art: {
    subject:
      'Eclipse Witch: a witch floating before a black sun, a ring of shadow fire bursting from her outstretched arms, dark ritual mood'
  }
})
