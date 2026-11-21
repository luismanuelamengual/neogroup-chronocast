import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'venom-coating',
  type: 'attachment',
  name: 'Venom Coating',
  text: 'Attach to an ally of yours: it gains poison (the damage it deals to an ally destroys it).',
  flavor: 'One scratch is enough.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 600,
  cost: 3,
  targets: ['friendlyAlly'],
  keywords: ['poison'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a green venom dripping from a dagger blade, toxic fumes rising'
  }
})
