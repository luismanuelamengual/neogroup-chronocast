import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stalwart-street-samurai',
  type: 'ally',
  name: 'Stalwart Street Samurai',
  text: 'When it enters: your hero heals 8.',
  flavor: 'Neon blade, old code.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 750,
  cost: 6,
  tribe: 'enforcer',
  attack: 9,
  health: 11,
  onEnter(ctx) {
    healHero(ctx, 8)
  },
  ai: { value: 7, tags: ['defense'] },
  art: {
    subject:
      'Stalwart Street Samurai: a broad-shouldered middle-aged android man with a smooth metal scalp, a thin mustache and war paint stripes, wearing a fedora, dressed in a bulky riot exosuit, drawing a glowing katana, with wide-eyed wonder, teal accents, warrior style'
  }
})
