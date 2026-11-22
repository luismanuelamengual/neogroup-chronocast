import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'magma-brute-of-mana',
  type: 'ally',
  name: 'Magma Brute of Mana',
  text: 'At the start of each phase: your hero gains 1 energy.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  element: 'fire',
  resist: ['fire'],
  weak: ['water'],
  price: 55,
  cost: 3,
  tribe: 'elemental',
  keywords: ['flying'],
  attack: 3,
  health: 6,
  onPhaseStart(ctx) {
    gainEnergy(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['energy'] },
  art: {
    subject: 'an elemental spirit, the magma brute of mana, mid-leap, mage style'
  }
})
