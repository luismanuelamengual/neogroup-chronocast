import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hungry-blessing',
  type: 'attachment',
  name: 'Hungry Blessing',
  text: 'Attach to an ally of yours: it gains +1 attack and +3 health.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  keywords: ['guardian'],
  attack: 1,
  health: 3,
  targets: ['friendlyAlly'],
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Hungry Blessing: an enchanted blessing made of white bone and leather wraps, on a worn wooden table, framed by drifting embers, violet accents, prehistoric jungle era style'
  }
})
