import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'flickering-ward',
  type: 'armor',
  name: 'Flickering Ward',
  text: '',
  flavor: 'It blinks just before the blow lands.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 50,
  cost: 2,
  armor: 6,
  ai: { value: 2 },
  art: {
    subject:
      'Flickering Ward: a single ward made of rough stone and sinew, floating above a marble pedestal, framed by drifting embers, ivory accents, mage style'
  }
})
