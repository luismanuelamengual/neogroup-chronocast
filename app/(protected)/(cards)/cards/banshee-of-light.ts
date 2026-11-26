import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'banshee-of-light',
  type: 'ally',
  name: 'Banshee of Light',
  text: 'When another Undead of yours enters: it gains +1 attack and +1 health.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'rare',
  element: 'sonic',
  resist: ['shadow', 'ice'],
  price: 360,
  cost: 2,
  tribe: 'undead',
  attack: 3,
  health: 3,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'undead')) {
      buff(ctx, ally, 1, 1)
    }
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Banshee of Light: a banshee with translucent blue ectoplasm and rusted chains, circling warily, rose pink accents, mystic healer style'
  }
})
