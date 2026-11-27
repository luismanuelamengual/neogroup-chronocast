import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'malachars-blast',
  type: 'ability',
  subtype: 'ritual',
  name: "Malachar's Blast",
  text: 'Deal 10 shadow damage to an enemy slot; if it kills an ally, draw 2 cards.',
  faction: 'arcane',
  restriction: { heroes: ['malachar-the-unmade'] },
  rarity: 'epic',
  element: 'shadow',
  price: 1200,
  cost: 4,
  keywords: ['unique'],
  targets: ['enemySlot'],
  onPlay(ctx) {
    const victim = unitAt(ctx, ctx.targets[0])

    damage(ctx, ctx.targets[0], 10, 'shadow')

    if (victim && !ctx.engine.findUnit(victim.uid)) {
      draw(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Malachar's Blast: a violent explosion of violet arcane energy, wrapped in swirling violet runes and silver sparks, in a snowy pass, seen from above, violet accents, medieval magic order style"
  }
})
