import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'proud-gorgon',
  type: 'ally',
  name: 'Proud Gorgon',
  text: 'When it enters: summon a Hoplite Conscript. When it attacks: your hero heals 2.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'exotic',
  resist: ['earth'],
  weak: ['acid'],
  price: 3320,
  cost: 5,
  tribe: 'colossus',
  keywords: ['shield', 'unique'],
  attack: 6,
  health: 11,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'hoplite-conscript')
  },
  onAttack(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 7, tags: ['defense', 'summon'] },
  art: {
    subject:
      'Proud Gorgon: a gorgon with sea-green scales and laurel leaves tangled in it, charging head-on, gold accents, ancient bronze-age empire style'
  }
})
