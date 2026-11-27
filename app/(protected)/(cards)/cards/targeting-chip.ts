import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { host, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'targeting-chip',
  type: 'attachment',
  subtype: 'implant',
  name: 'Targeting Chip',
  text: 'Attach to an ally of yours: its attacks deal 3 more damage to stunned allies.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  targets: ['friendlyAlly'],
  modifyDamage(ctx, target, amount, source) {
    const found = host(ctx)
    const victim = unitAt(ctx, target)

    if (found && victim && source?.attack && source.attackerUid === found.unit.uid) {
      return victim.stunnedUntilPhase >= ctx.engine.state.phase ? amount + 3 : amount
    }

    return amount
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Targeting Chip: a tiny glowing microchip projecting a red crosshair hologram, held in metal tweezers, red accents, neon cyberpunk future style'
  }
})
