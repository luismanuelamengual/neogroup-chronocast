import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'glitched-plan',
  type: 'ability',
  name: 'Glitched Plan',
  text: 'Draw a card and your hero heals 3.',
  flavor: 'It worked in the simulation.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
    healHero(ctx, 3)
  },
  ai: { value: 2, tags: ['draw', 'heal'] },
  art: {
    subject:
      'Glitched Plan: a battle map table with glowing pieces and arrows, over a stormy battlefield, centered and seen from slightly below, ivory accents, neon cyberpunk future style'
  }
})
