import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, enhancedAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vexs-sling',
  type: 'weapon',
  subtype: 'energy',
  name: "Vex's Nightwire Blaster",
  text: 'When your hero attacks with it: if you have 2 or more Enhanced allies, draw a card.',
  faction: 'neon',
  restriction: { heroes: ['vex-nightwire'] },
  rarity: 'epic',
  element: 'shadow',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onAttack(ctx) {
    if (enhancedAllies(ctx, ctx.owner).length >= 2) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Vex's Nightwire Blaster: a sleek black energy pistol with a glowing teal coil and a crackling dark plasma muzzle, wisps of black smoke, on a rain-slick rooftop, swirling around the center, teal accents, neon cyberpunk future style"
  }
})
