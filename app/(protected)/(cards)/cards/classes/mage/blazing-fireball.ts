import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blazing-fireball',
  type: 'ability',
  name: 'Blazing Fireball',
  text: 'Burn an enemy slot (4).',
  flavor: 'Subtlety was never the point.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    burn(ctx, ctx.targets[0], 4)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Blazing Fireball: a huge blazing fireball roaring forward, in a ruined temple, diagonal dynamic composition, emerald accents, mage style'
  }
})
