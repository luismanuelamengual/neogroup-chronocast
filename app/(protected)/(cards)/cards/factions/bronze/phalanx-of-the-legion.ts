import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'phalanx-of-the-legion',
  type: 'ally',
  name: 'Phalanx of the Legion',
  text: 'When it enters: your hero heals 9.',
  flavor: "The legion's spine, the enemy's wall.",
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 80,
  cost: 7,
  tribe: 'legionnaire',
  keywords: ['guardian'],
  attack: 6,
  health: 14,
  onEnter(ctx) {
    healHero(ctx, 9)
  },
  ai: { value: 7, tags: ['defense'] },
  art: {
    subject:
      'Phalanx of the Legion: an athletic young man with olive skin, charcoal grey hair with a side-swept fringe, a forked beard and a bandaged forehead, wearing a plain bronze helm, dressed in a bronze muscle cuirass and red cape, locking a tall round shield, with a fierce scowl, emerald accents, ancient bronze-age empire style'
  }
})
