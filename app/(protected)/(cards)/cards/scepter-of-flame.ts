import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isSpell, seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scepter-of-flame',
  type: 'weapon',
  subtype: 'orb',
  name: 'Scepter of Flame',
  text: 'When it is equipped: draw the first spell of your deck.',
  flavor: 'Wave it, and the world gets warmer.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  element: 'fire',
  price: 120,
  cost: 1,
  keywords: ['ranged'],
  attack: 1,
  durability: 2,
  onPlay(ctx) {
    seek(ctx, ctx.owner, isSpell)
  },
  ai: { value: 1 },
  art: {
    subject:
      'Scepter of Flame: a single scepter made of gilded marble, wreathed in roaring flames, leaning against a ruined wall, dramatic backlight, lime green accents, mage style'
  }
})
