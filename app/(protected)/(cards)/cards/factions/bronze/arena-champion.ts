import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'arena-champion',
  type: 'ally',
  name: 'Arena Champion',
  text: '',
  flavor: 'The crowd chants her name in eleven languages.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  attack: 18,
  health: 13,
  keywords: ['charge'],
  ai: { value: 4, tags: ['aggro'] },
  art: {
    subject:
      'a muscular female gladiator with a trident and a net, charging across a sunlit colosseum arena while the crowd roars'
  }
})
