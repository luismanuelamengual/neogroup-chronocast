import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'patched-leather',
  type: 'armor',
  name: 'Patched Leather',
  text: '',
  flavor: 'Each patch from a different century.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 45,
  cost: 1,
  armor: 8,
  ai: { value: 1, tags: ['defense'] },
  art: {
    subject: 'a worn leather vest covered in colorful patches from different eras on a wooden mannequin'
  }
})
