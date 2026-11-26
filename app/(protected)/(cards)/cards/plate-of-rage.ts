import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'plate-of-rage',
  type: 'armor',
  name: 'Plate of Rage',
  text: '',
  flavor: 'Anger is the best rivet.',
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
  rarity: 'rare',
  price: 300,
  cost: 1,
  armor: 1,
  durability: 4,
  ai: { value: 2 },
  art: {
    subject:
      'Plate of Rage: a single plate made of rough stone and sinew, stuck in the sand, diagonal dynamic composition, lime green accents, warrior style'
  }
})
