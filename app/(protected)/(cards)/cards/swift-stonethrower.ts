import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'swift-stonethrower',
  type: 'ally',
  name: 'Swift Stonethrower',
  text: 'At the start of each phase: it gains +1 attack and +1 health.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'common',
  resist: ['ice'],
  price: 80,
  cost: 7,
  tribe: 'caveborn',
  attack: 6,
  health: 15,
  onPhaseStart(ctx) {
    buffSelf(ctx, 1, 1)
  },
  ai: { value: 7, tags: ['buff'] },
  art: {
    subject:
      'Swift Stonethrower: a plump middle-aged neanderthal woman with umber skin, platinum blond hair in a high ponytail and a crooked broken nose, wearing a bone headdress, dressed in a mammoth-fur cloak, winding up a sling, with a booming laugh, amber accents, prehistoric jungle era style'
  }
})
