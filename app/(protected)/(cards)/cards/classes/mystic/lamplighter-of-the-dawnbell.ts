import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'lamplighter-of-the-dawnbell',
  type: 'ally',
  name: 'Lamplighter of the Dawnbell',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 5,
  health: 8,
  ai: { value: 3 },
  art: {
    subject:
      'Lamplighter of the Dawnbell: a wiry elderly halfling man with ruddy skin, snow-white hair in a single long braid, mutton chops and heavy golden earrings, wearing a straw hat, dressed in a monk robe with a futuristic utility belt, raising a lantern on a long pole, with calm focus, emerald accents, mystic healer style'
  }
})
