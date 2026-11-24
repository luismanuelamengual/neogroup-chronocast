import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unyielding-trap',
  type: 'trap',
  name: 'Unyielding Trap',
  text: 'When the enemy uses an ability: draw a card and deal 4 light damage to the enemy hero.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'epic',
  element: 'light',
  price: 1560,
  cost: 2,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    draw(ctx, ctx.owner, 1)
    damageEnemyHero(ctx, 4)
  },
  ai: { value: 3, tags: ['trap'] },
  art: {
    subject:
      'Unyielding Trap: a rusty iron jaw trap half buried in sand, radiating golden holy light, framed by drifting embers, gold accents, ancient bronze-age empire style'
  }
})
