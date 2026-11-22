import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'virus-of-neon',
  type: 'ally',
  name: 'Virus of Neon',
  text: 'When it enters: your hero gains 1 energy.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  element: 'acid',
  price: 55,
  cost: 3,
  tribe: 'netrunner',
  keywords: ['stealth'],
  attack: 3,
  health: 8,
  onEnter(ctx) {
    gainEnergy(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['energy'] },
  art: {
    subject:
      'a cyberpunk hacker with holographic screens, the virus of neon, glaring at the viewer, neon cyberpunk future style'
  }
})
