import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'steam-tank',
  type: 'ally',
  name: 'Steam Tank',
  text: '',
  flavor: 'Coal-powered and very, very angry.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 200,
  cost: 6,
  attack: 20,
  health: 25,
  keywords: ['guardian'],
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject: 'a heavy armored steam tank with a big brass cannon and smoking chimneys rolling over rubble'
  }
})
