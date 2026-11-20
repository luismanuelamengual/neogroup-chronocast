import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'forum-of-heroes',
  type: 'location',
  name: 'Forum of Heroes',
  text: 'At the start of each phase, your hero gains 4 armor and your allies heal 2.',
  flavor: 'Every statue here was once a soldier with a name.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 4)
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['defense', 'heal'] },
  art: {
    subject: 'a grand Roman forum lined with bronze statues of heroes, sunlight streaming between the columns'
  }
})
