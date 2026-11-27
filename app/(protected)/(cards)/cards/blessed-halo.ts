import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blessed-halo',
  type: 'armor',
  subtype: 'helm',
  name: 'Blessed Halo',
  text: 'When it is equipped: your hero heals 2 for each ally of yours.',
  flavor: 'Heavier than it looks, lighter than it feels.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  armor: 2,
  durability: 3,
  onPlay(ctx) {
    healHero(ctx, 2 * alliesOf(ctx, ctx.owner).length)
  },
  ai: { value: 2 },
  art: {
    subject:
      'Blessed Halo: a single halo made of crystal and silver filigree, on a workbench with tools, dramatic backlight, indigo accents, mystic healer style'
  }
})
