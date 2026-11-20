import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hollow-harp',
  type: 'weapon',
  name: 'The Hollow Harp',
  text: 'At the start of each phase, if your discard pile has 6 or more cards, your allies heal 3.',
  flavor: 'Its strings are the last breath of the dead.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'nyx-hollowsong' },
  rarity: 'epic',
  price: 1700,
  cost: 3,
  attack: 8,
  durability: 4,
  keywords: ['lifesteal'],
  onPhaseStart(ctx) {
    if (discardSize(ctx, ctx.owner) >= 6) {
      healAllAllies(ctx, ctx.owner, 3)
    }
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject: 'a black harp made of bones with glowing green strings, music notes floating from it'
  }
})
