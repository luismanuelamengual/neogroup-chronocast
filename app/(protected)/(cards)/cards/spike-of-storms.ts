import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-of-storms',
  type: 'ability',
  name: 'Spike of Storms',
  text: 'Deal 11 lightning damage to an enemy ally.',
  flavor: 'Lightning that decided to stay.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'lightning',
  price: 65,
  cost: 4,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 11)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Spike of Storms: a giant jagged spike bursting up from cracked ground, crackling with forked lightning, inside a cave of crystals, centered and seen from slightly below, tangerine accents, mage style'
  }
})
