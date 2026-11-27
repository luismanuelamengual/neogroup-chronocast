import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, slotOf, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'serene-prayer-staff',
  type: 'weapon',
  subtype: 'staff',
  name: 'Serene Prayer Staff',
  text: 'When it is equipped: your Magi heal 4.',
  flavor: 'Each knot holds a quiet prayer.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  attack: 3,
  durability: 2,
  onPlay(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'magus')) {
      const ref = slotOf(ctx, unit)

      if (ref) {
        heal(ctx, ref, 4)
      }
    }
  },
  ai: { value: 2 },
  art: {
    subject:
      'Serene Prayer Staff: a single staff made of rusted iron and chains, stuck in the sand, centered and seen from slightly below, scarlet accents, mystic healer style'
  }
})
