import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'thorned-mail',
  type: 'attachment',
  name: 'Thorned Mail',
  text: 'Attach to an ally of yours: it has +3 health and thorns 4.',
  flavor: 'Hug it if you dare.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  targets: ['friendlyAlly'],
  health: 3,
  keywords: ['thorns'],
  thorns: 4,
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a chainmail shirt covered in sharp iron thorns, glinting menacingly'
  }
})
