import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'enchanted-cryomancer',
  type: 'ally',
  name: 'Enchanted Cryomancer',
  text: 'When it enters: if an enemy ally is frozen, draw a card.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'common',
  resist: ['arcane'],
  price: 55,
  cost: 3,
  tribe: 'magus',
  keywords: ['ranged'],
  attack: 3,
  health: 6,
  onEnter(ctx) {
    if (alliesOf(ctx, ctx.opponent).some((unit) => (unit.frozenUntilPhase ?? 0) >= ctx.engine.state.phase)) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Enchanted Cryomancer: a muscular young gnome woman with deep brown skin, a shaved head and a gap-toothed grin, wearing a deep hood, dressed in star-embroidered indigo robes, forming a shard of ice, with a fierce scowl, saffron yellow accents, medieval magic order style'
  }
})
