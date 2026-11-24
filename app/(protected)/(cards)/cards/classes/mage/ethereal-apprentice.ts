import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze, randomAlly, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ethereal-apprentice',
  type: 'ally',
  name: 'Ethereal Apprentice',
  text: 'When it enters: freeze a random enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  element: 'arcane',
  resist: ['arcane'],
  price: 55,
  cost: 3,
  tribe: 'magus',
  attack: 2,
  health: 10,
  onEnter(ctx) {
    const victim = randomAlly(ctx, ctx.opponent)
    const ref = victim && slotOf(ctx, victim)

    if (ref) {
      freeze(ctx, ref)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Ethereal Apprentice: an athletic middle-aged tiefling man with ruddy skin, jet black hair in a wild mane, a full beard and a burn scar on the jaw, wearing a pointed hat, dressed in frost-white robes with icicle trim, juggling floating books, with a serene smile, magenta accents, mage style'
  }
})
