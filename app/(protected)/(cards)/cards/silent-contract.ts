import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt, stun, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'silent-contract',
  type: 'ability',
  subtype: 'program',
  name: 'Silent Contract',
  text: 'An ally of yours that is not stunned or frozen destroys an enemy ally, and then it is stunned this phase.',
  flavor: 'Paid in advance. Done in silence.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  targets: ['friendlyAlly', 'enemyAlly'],
  onPlay(ctx) {
    const killer = unitAt(ctx, ctx.targets[0])

    if (!killer || ctx.engine.isStunned(killer)) {
      return
    }

    destroyAt(ctx, ctx.targets[1])
    stun(ctx, killer)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Silent Contract: a holographic contract with a glowing red skull seal floating over a dark table, a knife beside it, close-up filling the frame, red accents, neon cyberpunk future style'
  }
})
