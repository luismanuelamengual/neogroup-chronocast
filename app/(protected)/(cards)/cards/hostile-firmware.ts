import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, destroyAttachedAt, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hostile-firmware',
  type: 'ability',
  subtype: 'program',
  name: 'Hostile Firmware',
  text: 'Destroy every card attached to an enemy ally, and deal 3 damage to it for each one.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const target = ctx.targets[0]
    const attachments = [...(unitAt(ctx, target)?.attachments ?? [])]

    for (const attachment of attachments) {
      destroyAttachedAt(ctx, { ...target, attached: attachment.uid })
    }

    if (attachments.length > 0) {
      damage(ctx, target, 3 * attachments.length)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Hostile Firmware: red corrupted code erupting from a cyborg implants as they short-circuit and explode, red accents, neon cyberpunk future style'
  }
})
