import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isHost } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'centurions-resolve',
  type: 'attachment',
  subtype: 'charm',
  name: "Centurion's Resolve",
  text: 'Attach to an ally of yours: it gains +1 attack and +2 health, and every damage it takes is 2 lower.',
  flavor: 'Hold. Hold. Hold.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  attack: 1,
  health: 2,
  targets: ['friendlyAlly'],
  modifyDamage(ctx, target, amount) {
    return isHost(ctx, target) ? Math.max(0, amount - 2) : amount
  },
  ai: { value: 3, tags: ['buff', 'defense'] },
  art: {
    subject:
      "Centurion's Resolve: a bronze phalera medallion engraved with a lion, tied with red ribbons, on a worn leather strap, close-up filling the frame, bronze accents, ancient bronze-age empire style"
  }
})
