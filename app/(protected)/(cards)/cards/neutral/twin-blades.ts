import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'twin-blades',
  type: 'attachment',
  name: 'Twin Blades',
  text: 'Attach to an ally of yours: it has +3 attack and frenzy (it can attack twice per phase).',
  flavor: 'Two edges, one rhythm.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1600,
  cost: 4,
  targets: ['friendlyAlly'],
  attack: 3,
  keywords: ['frenzy'],
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'two curved twin blades crossed in an X, trailing motion blur and sparks'
  }
})
