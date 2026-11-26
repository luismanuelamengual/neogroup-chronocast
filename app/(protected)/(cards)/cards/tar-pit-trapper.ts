import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tar-pit-trapper',
  type: 'ally',
  name: 'Tar Pit Trapper',
  text: 'When a trap of yours goes off: it gains +2 attack and +2 health.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  tribe: 'caveborn',
  attack: 2,
  health: 4,
  onTrapTriggered(ctx) {
    buffSelf(ctx, 2, 2)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Tar Pit Trapper: a cave dweller in furs crouching by a bubbling black tar pit, holding a coil of vine rope, smoke rising, full body, lime green accents, prehistoric jungle era style'
  }
})
