import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'glitch-runner',
  type: 'ally',
  name: 'Glitch Runner',
  text: '',
  flavor: 'Now you see him. Now you see an error message.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 11,
  health: 16,
  keywords: ['charge', 'stealth'],
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject:
      'a hacker runner flickering with digital glitch effects, half his body pixelated, sprinting through an alley'
  }
})
