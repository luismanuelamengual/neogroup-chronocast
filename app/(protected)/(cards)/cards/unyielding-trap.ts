import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, repairGear } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unyielding-trap',
  type: 'trap',
  name: 'Unyielding Trap',
  text: 'When the enemy uses an ability: your weapon and armor gain +2 durability each, and you draw a card.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    repairGear(ctx, ctx.owner, 2)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['trap'] },
  art: {
    subject:
      'Unyielding Trap: a rusty iron jaw trap half buried in sand, radiating golden holy light, framed by drifting embers, gold accents, ancient bronze-age empire style'
  }
})
