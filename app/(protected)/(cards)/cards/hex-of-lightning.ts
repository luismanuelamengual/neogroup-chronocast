import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-lightning',
  type: 'ability',
  subtype: 'program',
  name: 'Hex of Lightning',
  text: 'Stun an enemy ally and deal 2 lightning damage to it. Fast.',
  flavor: 'Curse the sky, and it curses back.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 40,
  cost: 1,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0])
    damage(ctx, ctx.targets[0], 2, 'lightning')
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Hex of Lightning: a glowing hex sigil burning in the air, over a desert of red dunes, centered and seen from slightly below, tangerine accents, mage style'
  }
})
