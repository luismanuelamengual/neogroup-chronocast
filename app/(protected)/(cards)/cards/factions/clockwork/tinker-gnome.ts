import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tinker-gnome',
  type: 'ally',
  name: 'Tinker Gnome',
  text: 'When it dies: summon a Gear Drone.',
  flavor: 'He never leaves without leaving something behind.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 6,
  health: 12,
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'gear-drone')
  },
  ai: { value: 2, tags: ['summon'] },
  art: {
    subject: 'a cheerful gnome tinker with a backpack full of tools and a tiny brass drone on his shoulder'
  }
})
