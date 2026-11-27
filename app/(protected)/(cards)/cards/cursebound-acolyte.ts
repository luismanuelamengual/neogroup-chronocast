import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekSubtype } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cursebound-acolyte',
  type: 'ally',
  name: 'Cursebound Acolyte',
  text: 'When it enters: draw the first curse of your deck.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  tribe: 'cultist',
  attack: 3,
  health: 7,
  onEnter(ctx) {
    seekSubtype(ctx, ctx.owner, 'curse')
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Cursebound Acolyte: a young cultist wrapped in chains covered in glowing hex runes, full body, violet accents, dark end-of-time void style'
  }
})
