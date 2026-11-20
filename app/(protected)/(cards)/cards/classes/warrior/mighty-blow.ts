import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mighty-blow',
  type: 'ability',
  name: 'Mighty Blow',
  text: 'Deal 20 damage to an enemy slot and your hero gains 6 armor.',
  flavor: 'He put a whole career into that swing.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 20)
    gainArmor(ctx, ctx.owner, 6)
  },
  ai: { value: 6, tags: ['removal', 'defense'] },
  art: {
    subject: 'a warrior bringing down a giant hammer with both hands, the ground cracking in a shockwave'
  }
})
