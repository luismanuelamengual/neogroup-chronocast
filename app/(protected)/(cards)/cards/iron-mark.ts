import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'iron-mark',
  type: 'attachment',
  subtype: 'curse',
  name: 'Iron Mark',
  text: 'Attach to an enemy ally: it has -2 attack.',
  flavor: 'Branded once, hunted forever.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  attack: -2,
  targets: ['enemyAlly'],
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Iron Mark: an enchanted mark made of white bone and leather wraps, resting on a velvet cloth, seen from above, emerald accents, warrior style'
  }
})
