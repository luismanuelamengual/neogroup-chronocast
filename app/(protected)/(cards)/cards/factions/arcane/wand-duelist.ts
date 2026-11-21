import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wand-duelist',
  type: 'ally',
  name: 'Wand Duelist',
  text: '',
  flavor: 'Fastest wand in the kingdom. Second fastest in the next one.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  attack: 7,
  health: 5,
  keywords: ['quick'],
  ai: { value: 2 },
  art: {
    subject: 'a dashing duelist mage in a feathered hat, firing a quick bolt from a slender wand'
  }
})
