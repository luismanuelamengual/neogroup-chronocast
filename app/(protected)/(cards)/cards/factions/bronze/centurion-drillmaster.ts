import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, neighbors } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'centurion-drillmaster',
  type: 'ally',
  name: 'Centurion Drillmaster',
  text: 'On enter: the allies next to it gain +2 attack.',
  flavor: 'Again! Faster! Until the gods themselves get tired!',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 10,
  health: 20,
  onEnter(ctx) {
    for (const unit of neighbors(ctx)) {
      buff(ctx, unit, 2, 0)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a stern centurion with a vine staff and a transverse red crest shouting orders at recruits'
  }
})
