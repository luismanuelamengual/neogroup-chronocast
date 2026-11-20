import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hunt-of-the-goddess',
  type: 'ability',
  name: 'Hunt of the Goddess',
  text: 'Deal 8 damage to a random enemy ally and deal 8 damage to a random enemy ally.',
  flavor: 'Run, if you think it helps.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'nysa-goldbow' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  onPlay(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 8)
    damageRandomAlly(ctx, ctx.opponent, 8)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'Nysa and a pack of silver hounds chasing prey through a moonlit olive forest'
  }
})
