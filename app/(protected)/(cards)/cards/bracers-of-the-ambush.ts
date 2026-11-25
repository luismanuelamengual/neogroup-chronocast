import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bracers-of-the-ambush',
  type: 'armor',
  name: 'Bracers of the Ambush',
  text: '',
  flavor: 'Quiet on the wrist, loud on the hunt.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  armor: 3,
  durability: 4,
  ai: { value: 4 },
  art: {
    subject:
      'Bracers of the Ambush: a single bracers made of rough stone and sinew, in a beam of light from above, dramatic backlight, teal accents, hunter style'
  }
})
