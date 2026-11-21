import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'praetorian-guard',
  type: 'ally',
  boss: true,
  name: 'Praetorian Guard',
  text: '',
  flavor: 'Loyal to the throne, whoever sits on it.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'caelus-the-usurper' },
  rarity: 'epic',
  cost: 3,
  attack: 8,
  health: 13,
  keywords: ['guardian'],
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject: 'an elite Roman praetorian in black and gold armor, holding a large oval shield with a scorpion emblem'
  }
})
