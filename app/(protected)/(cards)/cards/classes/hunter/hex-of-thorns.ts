import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-thorns',
  type: 'ability',
  name: 'Hex of Thorns',
  text: 'Freeze an enemy ally.',
  flavor: 'Every step costs a little blood.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 40,
  cost: 0,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Hex of Thorns: a glowing hex sigil burning in the air, against a starry sky, dramatic backlight, rose pink accents, hunter style'
  }
})
