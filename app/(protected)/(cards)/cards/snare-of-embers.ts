import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'snare-of-embers',
  type: 'ability',
  subtype: 'spell',
  name: 'Snare of Embers',
  text: "Return an enemy ally to its owner's hand. Fast.",
  flavor: 'Hot coals hide under the leaves.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['eclipse'] },
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
      'Snare of Embers: a looped rope snare snapping shut, over a desert of red dunes, centered and seen from slightly below, violet accents, medieval magic order style'
  }
})
