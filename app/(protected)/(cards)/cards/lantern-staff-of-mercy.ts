import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, randomAlly, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-staff-of-mercy',
  type: 'weapon',
  subtype: 'staff',
  name: 'Lantern Staff of Mercy',
  text: 'When your hero attacks with it: a random ally of yours heals 4.',
  flavor: 'Its light finds the lost and the hurt.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  attack: 4,
  durability: 4,
  onAttack(ctx) {
    const unit = randomAlly(ctx, ctx.owner)
    const ref = unit ? slotOf(ctx, unit) : null

    if (ref) {
      heal(ctx, ref, 4)
    }
  },
  ai: { value: 4 },
  art: {
    subject:
      'Lantern Staff of Mercy: a single staff made of blackened iron with gold inlay, half buried in snow, diagonal dynamic composition, tangerine accents, mystic healer style'
  }
})
