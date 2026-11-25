import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'leech-of-the-quarry',
  type: 'attachment',
  name: 'Leech of the Quarry',
  text: "Attach to an enemy ally: it can't attack.",
  flavor: 'It drinks while you run.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'rare',
  price: 570,
  cost: 3,
  targets: ['enemyAlly'],
  disarms: true,
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Leech of the Quarry: an enchanted leech made of copper with green patina, on a worn wooden table, framed by drifting embers, saffron yellow accents, hunter style'
  }
})
