import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'virus-of-dusk',
  type: 'attachment',
  subtype: 'implant',
  name: 'Virus of Dusk',
  text: 'Attach to an enemy ally: it has -5 attack.',
  flavor: 'It spreads when the lights go down.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 480,
  cost: 4,
  attack: -5,
  targets: ['enemyAlly'],
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Virus of Dusk: an enchanted virus made of ivory and jade, stuck in the sand, bursting toward the viewer, magenta accents, neon cyberpunk future style'
  }
})
