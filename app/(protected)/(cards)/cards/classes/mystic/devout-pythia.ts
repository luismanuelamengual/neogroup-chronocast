import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devout-pythia',
  type: 'ally',
  name: 'Devout Pythia',
  text: 'When it enters: your allies heal 4.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  resist: ['light'],
  price: 70,
  cost: 5,
  tribe: 'oracle',
  keywords: ['lifesteal'],
  attack: 5,
  health: 9,
  onEnter(ctx) {
    healAllAllies(ctx, ctx.owner, 4)
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject:
      'Devout Pythia: a lanky young man with golden skin, ash brown hair in a wild mane, a full beard and glowing tattoos on the cheeks, wearing a laurel wreath, dressed in a bronze-trimmed priestly stole, breathing glowing vapors, with a serene smile, turquoise accents, mystic healer style'
  }
})
