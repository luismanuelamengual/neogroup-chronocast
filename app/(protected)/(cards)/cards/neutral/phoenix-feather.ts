import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'phoenix-feather',
  type: 'attachment',
  name: 'Phoenix Feather',
  text: 'Attach to an ally of yours: it gains echo (the first time it dies, it goes back to your hand).',
  flavor: 'Ashes are only a pause.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 500,
  cost: 2,
  targets: ['friendlyAlly'],
  keywords: ['echo'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a blazing phoenix feather of orange and gold fire, embers rising from it'
  }
})
