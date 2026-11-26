import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gadgeteer-of-steam',
  type: 'ally',
  name: 'Gadgeteer of Steam',
  text: 'When it enters: your hero heals 6. When it dies: summon a Cog Drone.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['dawn'] },
  rarity: 'epic',
  price: 1300,
  cost: 5,
  tribe: 'inventor',
  keywords: ['shield'],
  attack: 4,
  health: 12,
  onEnter(ctx) {
    healHero(ctx, 6)
  },
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'cog-drone')
  },
  ai: { value: 6, tags: ['defense', 'summon'] },
  art: {
    subject:
      'Gadgeteer of Steam: a stocky young dwarf man with dark ebony skin, silver hair in a high ponytail, a thin mustache and bushy eyebrows, wearing a magnifying loupe over one eye, dressed in a Victorian bustle dress with a tool belt, tinkering with a buzzing gadget, with a serene smile, teal accents, steampunk steam era style'
  }
})
