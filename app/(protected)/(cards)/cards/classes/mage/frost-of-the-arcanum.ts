import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-of-the-arcanum',
  type: 'ability',
  name: 'Frost of the Arcanum',
  text: 'Freeze an enemy ally.',
  flavor: 'Ice written in the language of magic.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 40,
  cost: 1,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Frost of the Arcanum: a spiral of razor-sharp frost shards, over rooftops at night, diagonal dynamic composition, turquoise accents, mage style'
  }
})
