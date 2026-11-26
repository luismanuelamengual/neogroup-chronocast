import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hatchet-of-dawn',
  type: 'weapon',
  name: 'Hatchet of Dawn',
  text: '',
  flavor: 'It chops through the last shadows of night.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  element: 'light',
  price: 40,
  cost: 1,
  attack: 2,
  durability: 2,
  ai: { value: 1 },
  art: {
    subject:
      'Hatchet of Dawn: a single hatchet made of carved obsidian, radiating golden holy light, floating above a marble pedestal, swirling around the center, amber accents, time rift wanderer style'
  }
})
