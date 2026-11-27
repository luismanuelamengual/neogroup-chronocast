import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, suppressKeywordsAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-of-the-pack',
  type: 'ability',
  subtype: 'program',
  name: 'Frost of the Pack',
  text: 'An enemy ally loses Stealth, Quick and Retaliate for two phases. Draw a card.',
  flavor: 'Wolves run faster on frozen ground.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    suppressKeywordsAt(ctx, ctx.targets[0], ['stealth', 'quick', 'retaliate'], 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Frost of the Pack: a spiral of razor-sharp frost shards, over a desert of red dunes, seen from above, indigo accents, hunter style'
  }
})
