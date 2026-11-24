import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'snare-of-dusk',
  type: 'ability',
  name: 'Snare of Dusk',
  text: "Return an enemy ally to its owner's hand. Fast.",
  flavor: 'Set at sunset, sprung by moonrise.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Snare of Dusk: a looped rope snare snapping shut, in a snowy pass, dramatic backlight, teal accents, time rift wanderer style'
  }
})
