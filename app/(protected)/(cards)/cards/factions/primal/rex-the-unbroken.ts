import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rex-the-unbroken',
  type: 'ally',
  name: 'Rex the Unbroken',
  text: 'When it attacks: it gains +2 attack and +2 health.',
  flavor: 'Kings come and go. Rex stays.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'legendary',
  price: 5750,
  cost: 7,
  attack: 32,
  health: 25,
  keywords: ['unique', 'quick'],
  onAttack(ctx) {
    buffSelf(ctx, 2, 2)
  },
  ai: { value: 9, tags: ['buff'] },
  art: {
    subject: 'a colossal tyrannosaurus rex with a scarred face roaring on top of a volcano, lava glowing behind'
  }
})
