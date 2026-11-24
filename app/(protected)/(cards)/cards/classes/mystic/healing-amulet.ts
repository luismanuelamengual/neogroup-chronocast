import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'healing-amulet',
  type: 'armor',
  name: 'Healing Amulet',
  text: '',
  flavor: 'Warm to the touch, even in winter.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 70,
  cost: 5,
  armor: 15,
  ai: { value: 5 },
  art: {
    subject:
      'Healing Amulet: a single amulet made of rusted iron and chains, on a fur rug, framed by drifting embers, indigo accents, mystic healer style'
  }
})
