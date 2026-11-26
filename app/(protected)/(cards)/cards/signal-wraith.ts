import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardAtPhaseEnd } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'signal-wraith',
  type: 'ally',
  reward: true,
  name: 'Signal Wraith',
  text: 'When it enters: at the end of this phase, the rival discards a random card.',
  flavor: 'Between two channels, someone is watching.',
  faction: 'neon',
  restriction: { heroes: ['queen-static'] },
  rarity: 'legendary',
  element: 'lightning',
  cost: 3,
  tribe: 'netrunner',
  keywords: ['stealth', 'unique'],
  attack: 4,
  health: 6,
  onEnter(ctx) {
    discardAtPhaseEnd(ctx, ctx.opponent, 1)
  },
  ai: { value: 5 },
  art: {
    subject:
      'a glitching ghostly hacker girl made of static and cyan neon light, half dissolved into pixels, climbing out of an old CRT screen'
  }
})
