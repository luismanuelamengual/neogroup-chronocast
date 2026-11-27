import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'slash-of-the-long-road',
  type: 'ability',
  subtype: 'tactic',
  name: 'Slash of the Long Road',
  text: "Deal damage to an enemy ally equal to your weapon's attack +3.",
  flavor: 'A cut that crosses three centuries.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], (ctx.engine.player(ctx.owner).hero.weapon?.attack ?? 0) + 3)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Slash of the Long Road: a glowing crescent slash cutting through the air, over a stormy battlefield, framed by drifting embers, turquoise accents, ancient bronze-age empire style'
  }
})
