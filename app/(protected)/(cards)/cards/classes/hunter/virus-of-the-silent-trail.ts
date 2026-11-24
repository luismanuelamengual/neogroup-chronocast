import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'virus-of-the-silent-trail',
  type: 'ally',
  name: 'Virus of the Silent Trail',
  text: 'When another Netrunner of yours enters: your hero heals 2.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  element: 'acid',
  price: 140,
  cost: 1,
  tribe: 'netrunner',
  keywords: ['ranged'],
  attack: 2,
  health: 3,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'netrunner')) {
      healHero(ctx, 2)
    }
  },
  ai: { value: 1, tags: ['aggro', 'heal'] },
  art: {
    subject:
      'Virus of the Silent Trail: a lanky young android man with a smooth metal scalp, a braided beard and a dusting of freckles, wearing a glowing hood, dressed in a poncho of fiber-optic threads, spreading glitching green code, with a mischievous wink, lime green accents, hunter style'
  }
})
