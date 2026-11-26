import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'laureled-sentinel',
  type: 'ally',
  name: 'Laureled Sentinel',
  text: 'When it enters: draw the first Colossus of your deck.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'uncommon',
  resist: ['earth'],
  weak: ['acid'],
  price: 160,
  cost: 3,
  tribe: 'colossus',
  keywords: ['guardian', 'retaliate'],
  attack: 2,
  health: 10,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'colossus')
  },
  ai: { value: 3, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'Laureled Sentinel: a sentinel with marble-white skin and a bronze shield strapped to it, mid-stride, magenta accents, ancient bronze-age empire style'
  }
})
