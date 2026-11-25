import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt, discardSize, healHero, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'xulthar-the-devourer',
  type: 'hero',
  name: "Xul'thar the Devourer",
  text: 'Consume (6): destroy an enemy ally and your hero heals 10. At the start of each phase, if your discard pile has 10 or more cards, a random ally of your discard pile returns to play.',
  flavor: 'It ate the last star. It is still hungry.',
  faction: 'void',
  heroClass: 'mystic',
  side: 'eclipse',
  restriction: { heroes: ['xulthar-the-devourer'] },
  rarity: 'legendary',
  element: 'acid',
  cost: 0,
  health: 60,
  ability: {
    name: 'Consume',
    text: 'Destroy an enemy ally and your hero heals 10.',
    cost: 6,
    targets: ['enemyAlly'],
    activate(ctx) {
      destroyAt(ctx, ctx.targets[0])
      healHero(ctx, 10)
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
