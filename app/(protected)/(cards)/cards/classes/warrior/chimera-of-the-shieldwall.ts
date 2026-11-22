import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chimera-of-the-shieldwall',
  type: 'ally',
  name: 'Chimera of the Shieldwall',
  text: 'When it dies: your hero gains 8 armor.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  resist: ['earth'],
  weak: ['acid'],
  price: 220,
  cost: 7,
  tribe: 'colossus',
  keywords: ['guardian'],
  attack: 6,
  health: 15,
  onDeath(ctx) {
    gainArmor(ctx, ctx.owner, 8)
  },
  ai: { value: 7, tags: ['defense'] },
  art: {
    subject: 'a mythic ancient creature, the chimera of the shieldwall, raising its weapon, warrior style'
  }
})
