import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'whetted-edge',
  type: 'attachment',
  name: 'Whetted Edge',
  text: 'Attach to an ally of yours: it has +4 attack.',
  flavor: 'Sharpened on the grindstone of a thousand mornings.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 60,
  cost: 1,
  targets: ['friendlyAlly'],
  attack: 4,
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a gleaming sword edge being sharpened on a spinning grindstone, sparks flying'
  }
})
