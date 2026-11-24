import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-bolt',
  type: 'ability',
  name: 'Flickering Bolt',
  text: 'Deal 4 arcane damage to an enemy slot. Fast.',
  flavor: 'It blinks out and in, then through.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  element: 'arcane',
  price: 40,
  cost: 1,
  speed: 'fast',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 4)
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Flickering Bolt: a crackling bolt of energy streaking forward, circled by glowing violet runes, in a snowy pass, dramatic backlight, saffron yellow accents, mage style'
  }
})
