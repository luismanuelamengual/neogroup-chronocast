import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'circlet-of-mana',
  type: 'armor',
  name: 'Circlet of Mana',
  text: '',
  flavor: 'It hums when spells are near.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 70,
  cost: 5,
  armor: 4,
  durability: 4,
  ai: { value: 5 },
  art: {
    subject:
      'Circlet of Mana: a single circlet made of dark yew wood and brass fittings, on a workbench with tools, close-up filling the frame, amber accents, mage style'
  }
})
