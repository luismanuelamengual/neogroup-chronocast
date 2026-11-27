import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, isSpell, randomAlly, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stole-of-renewal',
  type: 'armor',
  subtype: 'robe',
  name: 'Stole of Renewal',
  text: 'Channel: when you cast a spell, a random ally of yours heals 3.',
  flavor: 'Each wound it touches forgets itself.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'rare',
  price: 480,
  cost: 4,
  armor: 3,
  durability: 4,
  onOwnerPlay(ctx, card) {
    const unit = isSpell(card) ? randomAlly(ctx, ctx.owner) : null
    const ref = unit ? slotOf(ctx, unit) : null

    if (ref) {
      heal(ctx, ref, 3)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      'Stole of Renewal: a single stole made of pale ash wood wrapped in red cloth, resting on a velvet cloth, seen from above, lime green accents, mystic healer style'
  }
})
