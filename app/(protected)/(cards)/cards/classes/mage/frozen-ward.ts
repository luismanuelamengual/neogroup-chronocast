import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'frozen-ward',
  type: 'armor',
  name: 'Frozen Ward',
  text: '',
  flavor: 'Cold enough to stop a sword mid-swing.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  armor: 3,
  ai: { value: 1 },
  art: {
    subject:
      'Frozen Ward: a single ward made of copper with green patina, stuck in the sand, swirling around the center, magenta accents, mage style'
  }
})
