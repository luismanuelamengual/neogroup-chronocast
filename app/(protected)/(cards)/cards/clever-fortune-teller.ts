import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'clever-fortune-teller',
  type: 'ally',
  name: 'Clever Fortune Teller',
  text: '',
  flavor: 'She saw you coming. She charged extra.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 80,
  cost: 6,
  tribe: 'drifter',
  keywords: ['quick'],
  attack: 8,
  health: 13,
  ai: { value: 6 },
  art: {
    subject:
      'Clever Fortune Teller: a barrel-chested middle-aged goblin man with blue-black hair in a single long braid and a tattooed neck, wearing a deep hood, dressed in a Roman toga under a leather bomber jacket, holding a crystal ball swirling with images, with grim determination, crimson accents, time rift wanderer style'
  }
})
