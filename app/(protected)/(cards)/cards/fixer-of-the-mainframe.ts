import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'fixer-of-the-mainframe',
  type: 'ally',
  name: 'Fixer of the Mainframe',
  text: 'When it enters: your other Enforcers gain +2 attack and +2 health. When it dies: draw a card.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'epic',
  price: 1300,
  cost: 5,
  tribe: 'enforcer',
  attack: 6,
  health: 8,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'enforcer', 2, 2, true)
  },
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 6, tags: ['buff', 'draw', 'tribe'] },
  art: {
    subject:
      'Fixer of the Mainframe: a stocky adult android woman with a smooth metal scalp and a gap-toothed grin, wearing a fedora, dressed in a long armored trench coat, holding a lantern, leaning forward eagerly, with grim determination, violet accents, neon cyberpunk future style'
  }
})
