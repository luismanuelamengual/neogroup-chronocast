import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesToDeck, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'recirculation-core',
  type: 'artifact',
  name: 'Recirculation Core',
  text: 'Recycle (2⚡): shuffle the last ally of your discard pile into your deck, and your hero heals 4.',
  flavor: 'Nothing is lost. Everything is rebuilt.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  ability: {
    name: 'Recycle',
    text: 'Shuffle the last ally of your discard pile into your deck, and your hero heals 4.',
    cost: 2,
    resource: 'energy',
    ai: { tags: ['heal'] },
    activate(ctx) {
      alliesToDeck(ctx, ctx.owner, 1, 'shuffle')
      healHero(ctx, 4)
    }
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Recirculation Core: a spinning brass sphere with glass tubes of glowing green fluid circulating around it, on a pedestal, emerald accents, steampunk steam era style'
  }
})
