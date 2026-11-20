import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shield-wall',
  type: 'trap',
  name: 'Shield Wall',
  text: 'When an enemy ally attacks: cancel the attack and your hero gains 8 armor.',
  flavor: 'Nothing gets through. Nothing.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()
    gainArmor(ctx, ctx.owner, 8)
  },
  ai: { value: 2, tags: ['trap', 'control', 'defense'] },
  art: {
    subject: "a solid wall of overlapping bronze shields blocking a monster's charge in a shower of sparks"
  }
})
