import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'faithful-amulet',
  type: 'attachment',
  name: 'Faithful Amulet',
  text: 'Attach to an ally of yours: it gains +2 attack and +3 health.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  attack: 2,
  health: 3,
  targets: ['friendlyAlly'],
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Faithful Amulet: an enchanted amulet made of ivory and jade, on a mossy rock, close-up filling the frame, violet accents, time rift wanderer style'
  }
})
