import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rotting-eye-of-nothing',
  type: 'ally',
  name: 'Rotting Eye of Nothing',
  text: 'When it enters: your other Horrors gain +1 attack and +1 health.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'epic',
  resist: ['shadow'],
  weak: ['sonic'],
  price: 1000,
  cost: 2,
  tribe: 'horror',
  keywords: ['lifesteal'],
  attack: 3,
  health: 5,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'horror', 1, 1, true)
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Rotting Eye of Nothing: an eye with sickly green glowing slime and crystalline shards growing from it, roaring with jaws wide open, turquoise accents, dark end-of-time void style'
  }
})
