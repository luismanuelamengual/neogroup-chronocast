import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, discardSize } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'slash-of-rot',
  type: 'ability',
  subtype: 'ritual',
  name: 'Slash of Rot',
  text: 'Deal shadow damage to an enemy ally equal to the cards in your discard pile (up to 15).',
  flavor: 'Even the wound decays.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  element: 'shadow',
  price: 540,
  cost: 5,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], Math.min(15, discardSize(ctx, ctx.owner)), 'shadow')
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'Slash of Rot: a glowing crescent slash cutting through the air, wrapped in swirling black smoke, in a misty valley, close-up filling the frame, magenta accents, dark end-of-time void style'
  }
})
