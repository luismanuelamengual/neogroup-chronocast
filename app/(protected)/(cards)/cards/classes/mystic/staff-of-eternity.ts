import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'staff-of-eternity',
  type: 'weapon',
  name: 'Staff of Eternity',
  text: 'On play: a random ally of your discard pile returns to play.',
  flavor: 'It has healed every hero of every age.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'exotic',
  price: 12500,
  cost: 5,
  attack: 12,
  durability: 5,
  keywords: ['lifesteal'],
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 7, tags: ['revive'] },
  art: {
    subject: 'a tall staff topped with a hourglass of glowing golden sand surrounded by orbiting feathers'
  }
})
