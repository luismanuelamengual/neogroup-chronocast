import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'cog-drone',
  type: 'ally',
  token: true,
  name: 'Cog Drone',
  text: '',
  flavor: 'Small, loyal, and slightly smoking.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  resist: ['acid'],
  weak: ['lightning'],
  cost: 1,
  tribe: 'automaton',
  attack: 2,
  health: 4,
  ai: { value: 1 },
  art: {
    subject: 'a small hovering brass drone with spinning cogs, steampunk steam era style'
  }
})
