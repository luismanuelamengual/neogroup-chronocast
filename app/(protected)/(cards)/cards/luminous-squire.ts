import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'luminous-squire',
  type: 'ally',
  name: 'Luminous Squire',
  text: 'When it dies: a random ally of your discard pile returns to play.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  keywords: ['lifesteal'],
  attack: 3,
  health: 3,
  onDeath(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 2, tags: ['revive'] },
  art: {
    subject:
      'Luminous Squire: an athletic middle-aged orc man with platinum blond hair in long braids, a braided beard and a beaded chin piercing, wearing a beaded headband, dressed in a Roman toga under a leather bomber jacket, carrying an oversized shield, with a fierce scowl, lime green accents, mystic healer style'
  }
})
