import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'saurian-bone-bow',
  type: 'weapon',
  subtype: 'bow',
  name: 'Saurian Bone Bow',
  text: 'Your attacks against a Prey deal 3 more damage.',
  flavor: 'Carved from the rib of the beast it was made to hunt.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  price: 400,
  cost: 3,
  attack: 4,
  durability: 3,
  preyBonus: 3,
  ai: { value: 4, tags: ['prey'] },
  art: {
    subject:
      'Saurian Bone Bow: a single great bow carved from a giant dinosaur rib, strung with sinew, resting on a mossy boulder, diagonal dynamic composition, lime green accents, prehistoric jungle era style'
  }
})
