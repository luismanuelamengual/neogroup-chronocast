import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'maw-of-xulthar',
  type: 'ally',
  boss: true,
  name: "Maw of Xul'thar",
  text: '',
  flavor: 'Just one of its mouths.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'xulthar-the-devourer' },
  rarity: 'epic',
  cost: 6,
  attack: 24,
  health: 40,
  keywords: ['lifesteal'],
  ai: { value: 7 },
  art: {
    subject: 'a huge toothy maw creature with tentacles emerging from a black rift'
  }
})
