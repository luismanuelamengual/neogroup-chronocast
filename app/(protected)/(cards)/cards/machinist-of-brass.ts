import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, draw, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'machinist-of-brass',
  type: 'ally',
  name: 'Machinist of Brass',
  text: 'When it enters: if you have another Inventor, draw a card. Its ability is paid with energy (⚡).',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  tribe: 'inventor',
  attack: 3,
  health: 6,
  ability: {
    name: 'Inspire',
    text: 'An ally of yours gains +1 attack and +2 health.',
    cost: 2,
    resource: 'energy',
    targets: ['friendlyAlly'],
    activate(ctx) {
      buffAt(ctx, ctx.targets[0], 1, 2)
    }
  },
  onEnter(ctx) {
    if (tribeAllies(ctx, ctx.owner, 'inventor', true).length > 0) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 2, tags: ['ability', 'draw', 'energy', 'tribe'] },
  art: {
    subject:
      'Machinist of Brass: an athletic adult woman with umber skin, honey blond hair cropped short and a dusting of freckles, wearing brass goggles over the eyes, dressed in grease-stained overalls, operating a sparking lathe arm, with a haunted stare, indigo accents, steampunk steam era style'
  }
})
