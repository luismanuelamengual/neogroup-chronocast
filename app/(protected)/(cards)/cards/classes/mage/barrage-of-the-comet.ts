import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'barrage-of-the-comet',
  type: 'ability',
  name: 'Barrage of the Comet',
  text: 'Deal 8 arcane damage to an enemy slot.',
  flavor: 'Wishes on falling stars rarely end like this.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  element: 'arcane',
  price: 55,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 8)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Barrage of the Comet: a dense volley of projectiles raining down, circled by glowing violet runes, in a misty valley, dramatic backlight, indigo accents, mage style'
  }
})
