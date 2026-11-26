import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { consume, repairArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shroud-of-the-thousand',
  type: 'armor',
  subtype: 'shroud',
  name: 'Shroud of the Thousand',
  text: 'At the start of each phase: Consume 1 (banish a card of your discard pile) and it gains +1 durability.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 380,
  cost: 3,
  durability: 3,
  armor: 2,
  onPhaseStart(ctx) {
    if (consume(ctx, 1)) {
      repairArmor(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Shroud of the Thousand: a flowing black shroud woven from countless whispering ghostly faces, hovering over a crypt floor, purple mist, centered, purple accents, dark end-of-time void style'
  }
})
