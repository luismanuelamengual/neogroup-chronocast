import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw, spellPowerOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'barrage-of-the-comet',
  type: 'ability',
  subtype: 'spell',
  name: 'Barrage of the Comet',
  text: 'Deal 5 arcane damage to an enemy slot. If you have spell power, draw a card.',
  flavor: 'Wishes on falling stars rarely end like this.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  element: 'arcane',
  price: 55,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 5, 'arcane')

    if (spellPowerOf(ctx, ctx.owner) > 0) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Barrage of the Comet: a dense volley of projectiles raining down, circled by glowing violet runes, in a misty valley, dramatic backlight, indigo accents, mage style'
  }
})
