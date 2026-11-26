import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, discardSize } from '@/app/(protected)/(engine)/effects'

/** Most it can grow when it enters. */
const MAX_GROWTH = 5

export default defineCard({
  id: 'starving-spawn',
  type: 'ally',
  reward: true,
  name: 'Starving Spawn',
  text: 'When it enters: it gains +1 attack and +1 health for every 3 cards in your discard pile (up to +5).',
  flavor: 'A small piece of the hunger. Still bigger than you.',
  faction: 'void',
  restriction: { heroes: ['xulthar-the-devourer'] },
  rarity: 'legendary',
  element: 'acid',
  resist: ['shadow'],
  weak: ['sonic'],
  cost: 4,
  tribe: 'horror',
  keywords: ['lifesteal', 'unique'],
  attack: 4,
  health: 8,
  onEnter(ctx) {
    const growth = Math.min(MAX_GROWTH, Math.floor(discardSize(ctx, ctx.owner) / 3))

    if (growth > 0) {
      buffSelf(ctx, growth, growth)
    }
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'a small writhing cosmic horror spawn with too many eyes and a huge maw full of stars, crawling out of a crack in space'
  }
})
