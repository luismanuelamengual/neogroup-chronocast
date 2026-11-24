import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'proud-gorgon',
  type: 'ally',
  name: 'Proud Gorgon',
  text: 'When it enters: summon a Hoplite Conscript. When it attacks: your hero gains 2 armor.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'exotic',
  resist: ['earth'],
  weak: ['acid'],
  price: 13200,
  cost: 5,
  tribe: 'colossus',
  keywords: ['shield', 'unique'],
  attack: 6,
  health: 11,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'hoplite-conscript')
  },
  onAttack(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 7, tags: ['defense', 'summon'] },
  art: {
    subject:
      'Proud Gorgon: a gorgon with sea-green scales and laurel leaves tangled in it, charging head-on, gold accents, ancient bronze-age empire style'
  }
})
