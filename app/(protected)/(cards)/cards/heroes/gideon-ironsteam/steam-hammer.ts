import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'steam-hammer',
  type: 'weapon',
  name: 'Steam Hammer',
  text: 'On play: gain 1 Chronos.',
  flavor: 'Every blow comes with a whistle.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'gideon-ironsteam' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  attack: 14,
  durability: 4,
  keywords: ['cleave'],
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['ramp'] },
  art: {
    subject: 'a massive brass sledgehammer with a steam piston and pressure gauge built into its head'
  }
})
