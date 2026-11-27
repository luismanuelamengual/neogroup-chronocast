import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'forked-lightning',
  type: 'ability',
  subtype: 'spell',
  name: 'Forked Lightning',
  text: 'Deal 7 lightning damage to 2 different enemy slots.',
  flavor: 'Why choose?',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 160,
  cost: 4,
  element: 'lightning',
  targets: ['enemySlot', 'enemySlot'],
  onPlay(ctx) {
    const [first, second] = ctx.targets

    damage(ctx, first, 7)

    if (second && (second.slot !== first.slot || second.player !== first.player)) {
      damage(ctx, second, 7)
    }
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Forked Lightning: a bolt of violet lightning splitting into two forks above a stormy tower, close-up filling the frame, electric blue accents, medieval magic order style'
  }
})
