import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'forsaken-zombie',
  type: 'ally',
  name: 'Forsaken Zombie',
  text: '',
  flavor: 'Nobody came back for him, so he came back for them.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'common',
  resist: ['shadow', 'ice'],
  price: 55,
  cost: 3,
  tribe: 'undead',
  attack: 5,
  health: 8,
  ai: { value: 3 },
  art: {
    subject:
      'Forsaken Zombie: a zombie with translucent blue ectoplasm and a cracked halo, circling warily, tangerine accents, dark end-of-time void style'
  }
})
