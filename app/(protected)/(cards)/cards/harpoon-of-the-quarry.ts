import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'harpoon-of-the-quarry',
  type: 'weapon',
  name: 'Harpoon of the Quarry',
  text: 'When it is equipped: deal 4 damage to a random enemy ally.',
  flavor: 'Barbed for the biggest prey.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  attack: 4,
  durability: 4,
  onPlay(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 4 },
  art: {
    subject:
      'Harpoon of the Quarry: a single harpoon made of pale ash wood wrapped in red cloth, on a worn wooden table, close-up filling the frame, cobalt blue accents, hunter style'
  }
})
