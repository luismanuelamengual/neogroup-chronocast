import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ilyras-slash',
  type: 'ability',
  subtype: 'spell',
  name: "Ilyra's Slash",
  text: 'Deal 6 arcane damage to an enemy slot, +2 for each frozen enemy ally, and draw a card.',
  faction: 'arcane',
  restriction: { heroes: ['ilyra-starweaver'] },
  rarity: 'epic',
  element: 'arcane',
  price: 1200,
  cost: 4,
  keywords: ['unique'],
  targets: ['enemySlot'],
  onPlay(ctx) {
    const frozen = alliesOf(ctx, ctx.opponent).filter(
      (unit) => (unit.frozenUntilPhase ?? 0) >= ctx.engine.state.phase
    ).length

    damage(ctx, ctx.targets[0], 6 + 2 * frozen, 'arcane')
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Ilyra's Slash: a glowing crescent slash cutting through the air, circled by glowing violet runes, in a dark forest clearing, close-up filling the frame, emerald accents, medieval magic order style"
  }
})
