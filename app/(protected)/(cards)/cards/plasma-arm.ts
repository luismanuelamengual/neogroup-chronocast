import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'plasma-arm',
  type: 'attachment',
  subtype: 'implant',
  name: 'Plasma Arm',
  text: 'Attach to an ally of yours: it gains +3 attack and its attacks deal lightning damage.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  attack: 3,
  attackElement: 'lightning',
  targets: ['friendlyAlly'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Plasma Arm: a cybernetic forearm with an exposed glowing plasma coil and crackling electric arcs between its fingers, dark alley neon reflections, close-up, teal accents, neon cyberpunk future style'
  }
})
