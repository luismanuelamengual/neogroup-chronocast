import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bone-knight-of-dying-stars',
  type: 'ally',
  name: 'Bone Knight of Dying Stars',
  text: 'When another Undead of yours enters: your hero heals 2.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['dawn'] },
  rarity: 'uncommon',
  element: 'arcane',
  resist: ['shadow', 'ice'],
  price: 180,
  cost: 4,
  tribe: 'undead',
  keywords: ['retaliate'],
  attack: 6,
  health: 8,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'undead')) {
      healHero(ctx, 2)
    }
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject:
      'Bone Knight of Dying Stars: a knight with ash-grey skin and exposed ribs, charging head-on, turquoise accents, dark end-of-time void style'
  }
})
