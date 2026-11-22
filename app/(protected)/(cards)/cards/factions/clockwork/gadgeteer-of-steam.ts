import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gadgeteer-of-steam',
  type: 'ally',
  name: 'Gadgeteer of Steam',
  text: 'When it enters: your hero gains 6 armor. When it dies: summon a Cog Drone.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'epic',
  price: 2040,
  cost: 5,
  tribe: 'inventor',
  keywords: ['shield'],
  attack: 4,
  health: 12,
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 6)
  },
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'cog-drone')
  },
  ai: { value: 6, tags: ['defense', 'summon'] },
  art: {
    subject:
      'a steampunk inventor with goggles, the gadgeteer of steam, charging into battle, steampunk steam era style'
  }
})
