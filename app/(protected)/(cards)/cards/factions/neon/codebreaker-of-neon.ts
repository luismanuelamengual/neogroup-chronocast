import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'codebreaker-of-neon',
  type: 'ally',
  name: 'Codebreaker of Neon',
  text: 'When it dies: your Netrunners gain +1 attack and +1 health.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  tribe: 'netrunner',
  keywords: ['quick'],
  attack: 5,
  health: 7,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'netrunner', 1, 1)
  },
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'a cyberpunk hacker with holographic screens, the codebreaker of neon, raising its weapon, neon cyberpunk future style'
  }
})
