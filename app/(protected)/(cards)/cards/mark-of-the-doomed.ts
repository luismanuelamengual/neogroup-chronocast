import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, host, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mark-of-the-doomed',
  type: 'attachment',
  subtype: 'curse',
  name: 'Mark of the Doomed',
  text: 'Attach to an enemy ally: at the start of each phase, deal 2 shadow damage to it. When it dies: summon a Risen Skeleton.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  element: 'shadow',
  price: 150,
  cost: 2,
  targets: ['enemyAlly'],
  onPhaseStart(ctx) {
    const found = host(ctx)

    if (found) {
      damage(ctx, found.ref, 2)
    }
  },
  onHostDeath(ctx) {
    summonCard(ctx, ctx.owner, 'risen-skeleton')
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      "Mark of the Doomed: a burning violet sigil of a skull seared onto a warrior's shoulder, dark smoke curling from it, close-up, purple accents, dark end-of-time void style"
  }
})
