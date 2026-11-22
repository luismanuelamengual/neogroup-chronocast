import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'oiled-clockmaker',
  type: 'ally',
  name: 'Oiled Clockmaker',
  text: 'When another Inventor of yours enters: your hero heals 2.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  tribe: 'inventor',
  keywords: ['thorns'],
  thorns: 3,
  attack: 3,
  health: 10,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'inventor')) {
      healHero(ctx, 2)
    }
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'a steampunk inventor with goggles, the oiled clockmaker, charging into battle, steampunk steam era style'
  }
})
