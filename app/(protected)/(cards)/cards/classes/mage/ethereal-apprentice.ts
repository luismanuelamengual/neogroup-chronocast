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
    subject: 'a medieval spellcaster, the ethereal apprentice, mid-leap, mage style'
  }
})
