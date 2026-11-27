import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'optic-implant',
  type: 'attachment',
  subtype: 'implant',
  name: 'Optic Implant',
  text: 'Attach to an ally of yours: it gains +1 attack and Ranged.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  price: 60,
  cost: 1,
  keywords: ['ranged'],
  attack: 1,
  targets: ['friendlyAlly'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Optic Implant: a glowing red cybernetic eye lens with tiny targeting rings, floating above a surgeon tray, close-up, cyan accents, neon cyberpunk future style'
  }
})
