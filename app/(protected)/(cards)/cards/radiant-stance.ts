import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, repairArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'radiant-stance',
  type: 'ability',
  subtype: 'gadget',
  name: 'Radiant Stance',
  text: 'Your armor gains +3 durability and your hero heals 5.',
  flavor: 'Stand in the light and do not move.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['dawn'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    repairArmor(ctx, ctx.owner, 3)
    healHero(ctx, 5)
  },
  ai: { value: 3, tags: ['repair', 'defense'] },
  art: {
    subject:
      'Radiant Stance: a round shield and crossed spear planted firmly on stone, in a dark forest clearing, seen from above, crimson accents, mystic healer style'
  }
})
