import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hydra-of-the-senate',
  type: 'ally',
  name: 'Hydra of the Senate',
  text: 'When it enters: your hero gains 5 armor.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  resist: ['earth'],
  weak: ['acid'],
  price: 55,
  cost: 3,
  tribe: 'colossus',
  keywords: ['ranged'],
  attack: 3,
  health: 7,
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 5)
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject:
      'Hydra of the Senate: a hydra with red clay skin and glowing golden eyes, turning its head toward the viewer, cobalt blue accents, ancient bronze-age empire style'
  }
})
