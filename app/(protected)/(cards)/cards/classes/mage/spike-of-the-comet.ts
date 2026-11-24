import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-of-the-comet',
  type: 'ability',
  name: 'Spike of the Comet',
  text: 'Deal 9 arcane damage to an enemy slot.',
  flavor: 'Fallen from the sky, still burning.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'epic',
  element: 'arcane',
  price: 1720,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 9)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Spike of the Comet: a giant jagged spike bursting up from cracked ground, circled by glowing violet runes, in a sunlit meadow, dramatic backlight, cobalt blue accents, mage style'
  }
})
