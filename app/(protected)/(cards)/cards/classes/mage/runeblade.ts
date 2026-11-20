import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'runeblade',
  type: 'weapon',
  name: 'Runeblade',
  text: 'On play: draw a card.',
  flavor: 'Half sword, half spellbook.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 10,
  durability: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'a slender elegant sword engraved with glowing violet runes along the blade'
  }
})
