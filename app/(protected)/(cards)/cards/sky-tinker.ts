import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sky-tinker',
  type: 'ally',
  name: 'Sky Tinker',
  text: 'When it enters: draw the first artifact of your deck that costs 2 or less.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  tribe: 'skyship',
  attack: 2,
  health: 6,
  onEnter(ctx) {
    seek(ctx, ctx.owner, (card) => card.type === 'artifact' && card.cost <= 2)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Sky Tinker: a small one-man balloon craft with a goggled tinkerer fixing it mid-flight, full body, steampunk clockwork era style'
  }
})
