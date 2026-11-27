import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'omnigears-hammer',
  type: 'weapon',
  subtype: 'tool',
  name: "Omnigear's Hammer",
  text: 'When your hero attacks with it: summon a Cog Drone.',
  flavor: 'Calibrated to the nanometer, swung with fury.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['dawn'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onAttack(ctx) {
    summonCard(ctx, ctx.owner, 'cog-drone')
  },
  ai: { value: 5 },
  art: {
    subject:
      "Omnigear's Hammer: a single hammer made of rusted iron and chains, stuck in the sand, framed by drifting embers, crimson accents, steampunk steam era style"
  }
})
