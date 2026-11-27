import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, destroyAttachedAt, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'purge-protocol-bot',
  type: 'ally',
  name: 'Purge Protocol Bot',
  text: 'When it enters: destroy every card attached to enemy allies.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'epic',
  price: 1100,
  cost: 6,
  tribe: 'cyborg',
  attack: 6,
  health: 12,
  onEnter(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      const ref = slotOf(ctx, unit)

      for (const attachment of [...(unit.attachments ?? [])]) {
        if (ref) {
          destroyAttachedAt(ctx, { ...ref, attached: attachment.uid })
        }
      }
    }
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'Purge Protocol Bot: a tall white security robot emitting a sweeping red scan beam that fries circuits, full body, red accents, neon cyberpunk future style'
  }
})
