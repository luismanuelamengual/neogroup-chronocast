import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'drake-of-the-tower',
  type: 'ally',
  name: 'Drake of the Tower',
  text: 'When another Drake of yours dies: it gains +3 attack.',
  flavor: 'It guards the tower and eats the visitors.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['eclipse'] },
  rarity: 'common',
  resist: ['fire'],
  weak: ['ice'],
  price: 80,
  cost: 6,
  tribe: 'drake',
  keywords: ['retaliate'],
  attack: 8,
  health: 14,
  onOwnAllyDeath(ctx, unit) {
    if (isTribe(unit, 'drake')) {
      buffSelf(ctx, 3, 0)
    }
  },
  ai: { value: 6 },
  art: {
    subject:
      'Drake of the Tower: a drake with pearl-white scales and runes glowing on its scales, standing proud on a rock, emerald accents, medieval magic order style'
  }
})
