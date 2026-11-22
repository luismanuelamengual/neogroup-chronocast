import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buff, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'garden-of-forever',
  type: 'artifact',
  name: 'Garden of Forever',
  text: 'Artifact. At the start of each phase, your allies gain +2 attack and +2 health, and your hero heals 4.',
  flavor: 'Nothing withers here. Nothing ever will.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'mythic',
  price: 31000,
  cost: 5,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      buff(ctx, unit, 2, 2)
    }

    heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
  },
  ai: { value: 8, tags: ['buff', 'heal'] },
  art: {
    subject:
      'an impossibly beautiful garden with glowing flowers, golden trees and floating hourglasses under an eternal sunset'
  }
})
