import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'binding-of-the-pack',
  type: 'ability',
  subtype: 'spell',
  name: 'Binding of the Pack',
  text: 'Freeze an enemy ally for 3 phases.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 200,
  cost: 5,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0], 3)
  },
  ai: { value: 5, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Binding of the Pack: glowing chains coiling tightly around nothing, locking shut, covered in frost and ice crystals, in a snowy pass, close-up filling the frame, saffron yellow accents, hunter style'
  }
})
