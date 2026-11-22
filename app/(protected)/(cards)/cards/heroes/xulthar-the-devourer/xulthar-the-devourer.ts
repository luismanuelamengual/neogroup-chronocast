import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, discardSize, heal, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'xulthar-the-devourer',
  type: 'hero',
  name: "Xul'thar the Devourer",
  text: 'Consume (3): deal 5 acid damage to an enemy slot and your hero heals 4. At the start of each phase, if your discard pile has 10 or more cards, a random ally of your discard pile returns to play.',
  flavor: 'It ate the last star. It is still hungry.',
  faction: 'void',
  heroClass: 'mystic',
  restriction: { kind: 'hero', heroId: 'xulthar-the-devourer' },
  rarity: 'legendary',
  element: 'acid',
  cost: 0,
  health: 60,
  ability: {
    name: 'Consume',
    text: 'Deal 5 acid damage to an enemy slot and your hero heals 4.',
    cost: 3,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 5)
      heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
    }
  },
  onPhaseStart(ctx) {
    if (discardSize(ctx, ctx.owner) >= 10) {
      reviveFromDiscard(ctx, ctx.owner)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a titanic cosmic horror with countless eyes and tentacles and a gaping maw full of stars, at the end of time'
  }
})
