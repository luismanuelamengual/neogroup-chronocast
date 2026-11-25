import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'enchanted-cryomancer',
  type: 'ally',
  name: 'Enchanted Cryomancer',
  text: 'When it enters: deal 4 ice damage to a random enemy ally.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  element: 'ice',
  resist: ['arcane'],
  price: 55,
  cost: 3,
  tribe: 'magus',
  keywords: ['ranged'],
  attack: 3,
  health: 6,
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Enchanted Cryomancer: a muscular young gnome woman with deep brown skin, a shaved head and a gap-toothed grin, wearing a deep hood, dressed in star-embroidered indigo robes, forming a shard of ice, with a fierce scowl, saffron yellow accents, medieval magic order style'
  }
})
