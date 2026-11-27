import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'soul-leech',
  type: 'ability',
  subtype: 'ritual',
  name: 'Soul Leech',
  text: 'Deal 4 shadow damage to an enemy ally and your hero heals 4.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 4, 'shadow')
    healHero(ctx, 4)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Soul Leech: a ghostly violet leech latching onto a warrior and pulling a wisp of soul toward a hooded caster, dark ritual mood'
  }
})
