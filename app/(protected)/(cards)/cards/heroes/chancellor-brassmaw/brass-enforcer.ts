import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'brass-enforcer',
  type: 'ally',
  boss: true,
  name: 'Brass Enforcer',
  text: '',
  flavor: 'Taxes are due. Now.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'chancellor-brassmaw' },
  rarity: 'epic',
  cost: 4,
  attack: 14,
  health: 34,
  keywords: ['guardian'],
  ai: { value: 5, tags: ['defense'] },
  art: {
    subject: 'a tall brass police automaton with a truncheon and a glowing red eye'
  }
})
