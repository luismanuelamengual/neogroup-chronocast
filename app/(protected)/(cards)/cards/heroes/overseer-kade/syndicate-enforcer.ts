import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'syndicate-enforcer',
  type: 'ally',
  boss: true,
  name: 'Syndicate Enforcer',
  text: '',
  flavor: 'Corporate policy, delivered by hand.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'overseer-kade' },
  rarity: 'epic',
  cost: 4,
  attack: 16,
  health: 28,
  keywords: ['quick'],
  ai: { value: 5 },
  art: {
    subject: 'a heavily augmented corporate enforcer with chrome arms and a neon red visor'
  }
})
