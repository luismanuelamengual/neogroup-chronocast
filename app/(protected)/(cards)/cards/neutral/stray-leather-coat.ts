import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'stray-leather-coat',
  type: 'armor',
  name: 'Stray Leather Coat',
  text: '',
  flavor: 'Found in one century, lost in three more.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  armor: 2,
  durability: 5,
  ai: { value: 3 },
  art: {
    subject:
      'Stray Leather Coat: a single coat made of rusted iron and chains, on a mossy rock, bursting toward the viewer, rose pink accents, time rift wanderer style'
  }
})
