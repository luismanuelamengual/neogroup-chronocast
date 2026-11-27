import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pickaxe-of-lost-time',
  type: 'weapon',
  subtype: 'tool',
  name: 'Pickaxe of Lost Time',
  text: "Your hero's attacks with it deal 2 more damage for each artifact of yours (up to +6).",
  flavor: 'It mines the hours nobody uses.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'mythic',
  element: 'time',
  price: 4240,
  cost: 4,
  attack: 5,
  durability: 4,
  attackBonus(ctx, attacker) {
    return attacker.player === ctx.owner && attacker.slot === 'hero' ? Math.min(6, 2 * artifactCount(ctx)) : 0
  },
  ai: { value: 7 },
  art: {
    subject:
      'Pickaxe of Lost Time: a single pickaxe made of rough stone and sinew, surrounded by floating clock hands and glowing sand, on a workbench with tools, bursting toward the viewer, scarlet accents, steampunk steam era style'
  }
})
