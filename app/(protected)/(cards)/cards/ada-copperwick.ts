import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, deckHasArtifact, playArtifactFromDeck } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ada-copperwick',
  type: 'hero',
  name: 'Ada Copperwick',
  text: 'Blueprint (4): put an artifact of your choice from your deck into play without paying its cost, then shuffle your deck. When another ally of yours enters, it gains +1 attack.',
  flavor: 'Magic is just engineering nobody has explained yet.',
  faction: 'clockwork',
  side: 'dawn',
  restriction: { heroes: ['ada-copperwick'] },
  rarity: 'epic',
  cost: 0,
  health: 58,
  ability: {
    name: 'Blueprint',
    text: 'Put an artifact of your choice from your deck into play without paying its cost, then shuffle your deck.',
    cost: 4,
    choice: 'deckArtifact',
    ai: { tags: ['deckArtifact'] },
    canActivate(ctx) {
      if (!deckHasArtifact(ctx, ctx.owner, ctx.choice)) {
        return 'noChoice'
      }

      return ctx.engine.freeSupport(ctx.owner) > 0 ? null : 'supportFull'
    },
    activate(ctx) {
      playArtifactFromDeck(ctx, ctx.owner, ctx.choice!)
    }
  },
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 1, 0)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a brilliant young Victorian inventor with copper goggles and a lab coat, tiny brass drones orbiting her, glowing blueprints in the air'
  }
})
