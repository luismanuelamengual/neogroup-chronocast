import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lamplighter-of-thorns',
  type: 'ally',
  name: 'Lamplighter of Thorns',
  text: 'When it dies: deal 5 damage to a random enemy ally.',
  flavor: 'Her lamps burn in the darkest thickets.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  price: 480,
  cost: 4,
  attack: 6,
  health: 8,
  onDeath(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 5)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Lamplighter of Thorns: a muscular middle-aged man with golden skin, ash brown hair long and straight, a thin mustache and a tattooed neck, wearing a turban, dressed in a wool shawl hung with tiny bells, raising a lantern on a long pole, with calm focus, lime green accents, hunter style'
  }
})
