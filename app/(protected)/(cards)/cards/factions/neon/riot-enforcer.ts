import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'riot-enforcer',
  type: 'ally',
  name: 'Riot Enforcer',
  text: '',
  flavor: 'Disperse. Now.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 60,
  cost: 4,
  attack: 13,
  health: 32,
  keywords: ['guardian'],
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject: 'a heavily armored riot cop with a glowing energy shield and a visor under neon rain'
  }
})
