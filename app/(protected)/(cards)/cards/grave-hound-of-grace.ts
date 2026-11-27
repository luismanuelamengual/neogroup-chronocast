import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grave-hound-of-grace',
  type: 'ally',
  name: 'Grave Hound of Grace',
  text: 'When another ally of yours dies: it gains +1 attack.',
  flavor: 'It guards the dead so they may rest.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  element: 'shadow',
  resist: ['shadow', 'ice'],
  price: 65,
  cost: 4,
  tribe: 'undead',
  keywords: ['retaliate'],
  attack: 4,
  health: 13,
  onOwnAllyDeath(ctx) {
    buffSelf(ctx, 1, 0)
  },
  ai: { value: 4 },
  art: {
    subject:
      'Grave Hound of Grace: a hound with a black tattered shroud and grave dirt falling off it, standing proud on a rock, ivory accents, mystic healer style'
  }
})
