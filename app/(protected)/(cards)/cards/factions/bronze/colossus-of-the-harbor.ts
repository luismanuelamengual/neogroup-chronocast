import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'colossus-of-the-harbor',
  type: 'ally',
  name: 'Colossus of the Harbor',
  text: 'On enter: your hero gains 15 armor.',
  flavor: 'Ships pass between its feet. Armies do not.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'exotic',
  price: 14000,
  cost: 8,
  attack: 30,
  health: 80,
  keywords: ['guardian', 'thorns', 'unique'],
  thorns: 10,
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 15)
  },
  ai: { value: 10, tags: ['defense'] },
  art: {
    subject:
      'a gigantic bronze statue of a warrior straddling a harbor entrance, ships sailing between its legs, waves crashing'
  }
})
