import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, disarmAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-weakness',
  type: 'ability',
  subtype: 'ritual',
  name: 'Hex of Weakness',
  text: "An enemy ally can't attack next phase. Your hero takes 1 shadow damage. Fast.",
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    disarmAt(ctx, ctx.targets[0], 1)
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 1, 'shadow')
  },
  ai: { value: 3 },
  art: {
    subject:
      "Hex of Weakness: a crooked finger tracing a violet sigil in the air, chains of shadow wrapping a warrior's sword arm, dark ritual mood"
  }
})
