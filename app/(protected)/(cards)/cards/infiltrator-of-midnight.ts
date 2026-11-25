import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'infiltrator-of-midnight',
  type: 'ally',
  name: 'Infiltrator of Midnight',
  text: 'When another Netrunner of yours enters: it gains +1 attack and +1 health.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  element: 'shadow',
  price: 510,
  cost: 2,
  tribe: 'netrunner',
  attack: 2,
  health: 5,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'netrunner')) {
      buff(ctx, ally, 1, 1)
    }
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Infiltrator of Midnight: a barrel-chested adult android woman with a smooth metal scalp and glowing tattoos on the cheeks, wearing a VR visor, dressed in a cropped jacket with holo patches, slipping through a glowing doorway, with wide-eyed wonder, amber accents, neon cyberpunk future style'
  }
})
