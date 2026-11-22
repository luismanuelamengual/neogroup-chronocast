import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'learned-cryomancer',
  type: 'ally',
  name: 'Learned Cryomancer',
  text: 'When it enters: deal 7 ice damage to a random enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  element: 'ice',
  resist: ['arcane'],
  price: 220,
  cost: 6,
  tribe: 'magus',
  attack: 7,
  health: 12,
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 7)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'a medieval spellcaster, the learned cryomancer, lunging forward, mage style'
  }
})
