import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'radiant-zombie',
  type: 'ally',
  name: 'Radiant Zombie',
  text: '',
  flavor: 'Blessed by mistake.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  element: 'shadow',
  resist: ['shadow', 'ice'],
  price: 55,
  cost: 3,
  tribe: 'undead',
  keywords: ['shield'],
  attack: 4,
  health: 9,
  ai: { value: 3 },
  art: {
    subject:
      'Radiant Zombie: a zombie with pale glowing white spirit-light and exposed ribs, rearing up, magenta accents, mystic healer style'
  }
})
