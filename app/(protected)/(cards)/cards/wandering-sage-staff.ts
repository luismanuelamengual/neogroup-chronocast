import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-sage-staff',
  type: 'weapon',
  subtype: 'staff',
  name: "Wandering Sage's Staff",
  text: 'Ponder (1⚡): draw a card.',
  flavor: 'Every knot in the wood is a lesson.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  price: 420,
  cost: 4,
  attack: 2,
  durability: 5,
  ability: {
    name: 'Ponder',
    text: 'Draw a card.',
    cost: 1,
    resource: 'energy',
    ai: { tags: ['draw'] },
    activate(ctx) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      "Wandering Sage's Staff: a gnarled wooden staff with a small glowing book hanging from its top by a chain, leaning on a stone wall, saffron accents, medieval magic order style"
  }
})
