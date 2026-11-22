import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hallowed-dream-reader',
  type: 'ally',
  name: 'Hallowed Dream Reader',
  text: 'When it enters: your hero heals 7.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  element: 'light',
  resist: ['light'],
  price: 205,
  cost: 5,
  tribe: 'oracle',
  keywords: ['lifesteal'],
  attack: 5,
  health: 9,
  onEnter(ctx) {
    healHero(ctx, 7)
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject: 'an ancient temple seer in white robes, the hallowed dream reader, lunging forward, mystic healer style'
  }
})
