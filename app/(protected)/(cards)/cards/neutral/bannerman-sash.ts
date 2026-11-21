import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bannerman-sash',
  type: 'attachment',
  name: 'Bannerman Sash',
  text: 'Attach to an ally of yours: it has +6 health and guardian.',
  flavor: 'Wear it and the arrows look for you.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 2,
  targets: ['friendlyAlly'],
  health: 6,
  keywords: ['guardian'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a bright red sash with an embroidered banner crest, worn by a defiant shield bearer'
  }
})
