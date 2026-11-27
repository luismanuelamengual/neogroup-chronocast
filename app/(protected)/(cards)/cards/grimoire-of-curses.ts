import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'grimoire-of-curses',
  type: 'artifact',
  name: 'Grimoire of Curses',
  text: "The attacks of the rival's allies deal 2 less damage.",
  flavor: 'Every page is a promise of misfortune.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  enemyAttackPenalty(ctx, attacker) {
    return attacker.slot !== 'hero' ? 2 : 0
  },
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject:
      'Grimoire of Curses: a black leather grimoire with a living eye on its cover, chained shut and floating, dark smoke leaking from its pages, purple accents, dark end-of-time void style'
  }
})
