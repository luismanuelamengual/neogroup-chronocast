import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'snare-of-dusk',
  type: 'ability',
  subtype: 'spell',
  name: 'Snare of Dusk',
  text: "Return an enemy ally to its owner's hand and deal 3 arcane damage to the enemy hero. Fast.",
  flavor: 'Set at sunset, sprung by moonrise.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
    damageEnemyHero(ctx, 3, 'arcane')
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Snare of Dusk: a looped rope snare snapping shut, in a snowy pass, dramatic backlight, teal accents, medieval magic order style'
  }
})
