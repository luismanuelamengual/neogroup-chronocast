import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'virus-of-dusk',
  type: 'attachment',
  name: 'Virus of Dusk',
  text: 'Attach to an enemy ally: it has -5 attack.',
  flavor: 'It spreads when the lights go down.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  price: 630,
  cost: 4,
  attack: -5,
  targets: ['enemyAlly'],
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Virus of Dusk: an enchanted virus made of ivory and jade, stuck in the sand, bursting toward the viewer, magenta accents, time rift wanderer style'
  }
})
