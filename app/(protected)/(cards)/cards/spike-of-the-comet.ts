import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-of-the-comet',
  type: 'ability',
  subtype: 'spell',
  name: 'Spike of the Comet',
  text: 'Deal 2 arcane damage to every enemy ally and to the enemy hero.',
  flavor: 'Fallen from the sky, still burning.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'epic',
  element: 'arcane',
  price: 1100,
  cost: 3,
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 2, 'arcane')
    damageEnemyHero(ctx, 2, 'arcane')
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Spike of the Comet: a giant jagged spike bursting up from cracked ground, circled by glowing violet runes, in a sunlit meadow, dramatic backlight, cobalt blue accents, mage style'
  }
})
