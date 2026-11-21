import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'skeletal-monk',
  type: 'ally',
  boss: true,
  name: 'Skeletal Monk',
  text: '',
  flavor: 'Silent vows. Silent bones.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'morgrath-lich-abbot' },
  rarity: 'epic',
  cost: 3,
  attack: 10,
  health: 10,
  keywords: ['echo'],
  ai: { value: 4 },
  art: {
    subject: 'a skeleton in a hooded monk robe carrying a candle through a dark abbey'
  }
})
