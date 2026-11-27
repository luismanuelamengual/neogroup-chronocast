import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blast-of-thorns',
  type: 'ability',
  subtype: 'tactic',
  name: 'Blast of Thorns',
  text: 'Deal 2 damage to an enemy slot for each durability point of your armor (up to 10).',
  flavor: 'The forest throws back.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], Math.min(10, 2 * (ctx.engine.player(ctx.owner).hero.armor?.durability ?? 0)))
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Blast of Thorns: a violent explosion of energy, in a dark forest clearing, diagonal dynamic composition, ivory accents, hunter style'
  }
})
