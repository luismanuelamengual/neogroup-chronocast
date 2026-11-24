import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'omnigears-hammer',
  type: 'weapon',
  name: "Omnigear's Hammer",
  text: 'When it is equipped: your hero gains 5 armor.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'omnigear-prime' },
  rarity: 'epic',
  price: 1720,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 5)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Omnigear's Hammer: a single hammer made of rusted iron and chains, stuck in the sand, framed by drifting embers, crimson accents, steampunk steam era style"
  }
})
