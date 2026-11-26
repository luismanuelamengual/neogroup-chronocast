import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero, repairArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'guard-of-the-ancestors',
  type: 'ability',
  subtype: 'gadget',
  name: 'Guard of the Ancestors',
  text: 'Your armor gains +4 durability and your hero heals 8. Draw a card.',
  flavor: 'The dead stand guard for the living.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['dawn'] },
  rarity: 'exotic',
  price: 3160,
  cost: 3,
  onPlay(ctx) {
    repairArmor(ctx, ctx.owner, 4)
    healHero(ctx, 8)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['repair', 'defense', 'draw'] },
  art: {
    subject:
      'Guard of the Ancestors: a towering tower shield standing alone, against a starry sky, swirling around the center, lime green accents, mystic healer style'
  }
})
