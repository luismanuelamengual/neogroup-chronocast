import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { repairGear } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'temper-the-steel',
  type: 'ability',
  subtype: 'tactic',
  name: 'Temper the Steel',
  text: 'Your weapon and armor gain +2 durability each. Instant.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    repairGear(ctx, ctx.owner, 2)
  },
  ai: { value: 1, tags: ['repair'] },
  art: {
    subject:
      "Temper the Steel: a glowing bronze blade plunged into a bucket of water, bursting steam, a smith's tongs, close-up filling the frame, crimson accents, ancient bronze-age empire style"
  }
})
