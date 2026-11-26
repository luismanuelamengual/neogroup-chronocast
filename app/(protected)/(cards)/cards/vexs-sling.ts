import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vexs-sling',
  type: 'weapon',
  subtype: 'energy',
  name: "Vex's Nightwire Blaster",
  text: 'When it is equipped: deal 4 shadow damage to a random enemy ally.',
  faction: 'neon',
  restriction: { heroes: ['vex-nightwire'] },
  rarity: 'epic',
  element: 'shadow',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Vex's Nightwire Blaster: a sleek black energy pistol with a glowing teal coil and a crackling dark plasma muzzle, wisps of black smoke, on a rain-slick rooftop, swirling around the center, teal accents, neon cyberpunk future style"
  }
})
