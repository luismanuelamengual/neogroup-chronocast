import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shield-bash',
  type: 'ability',
  name: 'Shield Bash',
  text: 'Deal 5 damage to an enemy ally and your hero gains 4 armor. Fast.',
  flavor: 'The best defense is a shield to the face.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 5)
    gainArmor(ctx, ctx.owner, 4)
  },
  ai: { value: 1, tags: ['removal', 'defense'] },
  art: {
    subject: "a warrior slamming a heavy round shield into a monster's face, sparks flying"
  }
})
