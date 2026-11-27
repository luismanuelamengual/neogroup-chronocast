import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesToDeck, buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rejuvenation-pod',
  type: 'artifact',
  name: 'Rejuvenation Pod',
  text: 'When an Automaton of yours enters: it gains +2 health. Rebuild (1⚡): shuffle the last Automaton of your discard pile into your deck.',
  flavor: 'Broken in, good as new out.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 160,
  cost: 4,
  ability: {
    name: 'Rebuild',
    text: 'Shuffle the last Automaton of your discard pile into your deck.',
    cost: 1,
    resource: 'energy',
    ai: { tags: [] },
    activate(ctx) {
      alliesToDeck(ctx, ctx.owner, 1, 'shuffle', (card) => card.tribe === 'automaton')
    }
  },
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'automaton')) {
      buff(ctx, ally, 0, 2)
    }
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Rejuvenation Pod: a glass capsule full of bubbling green fluid with a small automaton floating inside, pipes and gauges around, close-up filling the frame, green accents, steampunk steam era style'
  }
})
