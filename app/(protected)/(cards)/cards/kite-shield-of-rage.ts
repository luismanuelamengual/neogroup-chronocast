import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { grantKeyword, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kite-shield-of-rage',
  type: 'armor',
  subtype: 'shield',
  name: 'Kite Shield of Rage',
  text: 'When it is equipped: your Colossi gain Guardian.',
  flavor: 'Strike it, and it strikes back harder.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 2,
  durability: 5,
  onPlay(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'colossus')) {
      grantKeyword(ctx, unit, 'guardian')
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Kite Shield of Rage: a single shield made of dark yew wood and brass fittings, leaning against a ruined wall, dramatic backlight, gold accents, warrior style'
  }
})
