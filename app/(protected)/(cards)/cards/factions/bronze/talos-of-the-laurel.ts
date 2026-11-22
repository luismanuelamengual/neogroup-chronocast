import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'talos-of-the-laurel',
  type: 'ally',
  name: 'Talos of the Laurel',
  text: 'When it enters: your other Colossi gain +1 attack and +1 health.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'rare',
  resist: ['earth'],
  weak: ['acid'],
  price: 450,
  cost: 1,
  tribe: 'colossus',
  keywords: ['shield'],
  attack: 3,
  health: 3,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'colossus', 1, 1, true)
  },
  ai: { value: 2, tags: ['aggro', 'buff', 'tribe'] },
  art: {
    subject: 'a mythic ancient creature, the talos of the laurel, roaring, ancient bronze-age empire style'
  }
})
