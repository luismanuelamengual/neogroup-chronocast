import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'learned-cryomancer',
  type: 'ally',
  name: 'Learned Cryomancer',
  text: 'When it enters: deal 3 ice damage to every enemy ally.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  element: 'ice',
  resist: ['arcane'],
  price: 220,
  cost: 6,
  tribe: 'magus',
  attack: 7,
  health: 12,
  onEnter(ctx) {
    damageAllAllies(ctx, ctx.opponent, 3, 'ice')
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'Learned Cryomancer: a petite adult man with pale skin, auburn hair in short curls, a forked beard and round spectacles, wearing a thin silver circlet, dressed in a scholar coat with ink-stained cuffs, forming a shard of ice, with a fierce scowl, saffron yellow accents, mage style'
  }
})
