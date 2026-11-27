import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy, gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dark-whisperer',
  type: 'ally',
  name: 'Dark Whisperer',
  text: 'When it enters: take 1 energy from the enemy hero.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  tribe: 'oracle',
  attack: 2,
  health: 5,
  onEnter(ctx) {
    gainEnergy(ctx, ctx.owner, drainEnergy(ctx, ctx.opponent, 1))
  },
  ai: { value: 3 },
  art: {
    subject:
      'Dark Whisperer: a pale oracle whispering into a hooded ear, violet smoke threads drawing power from a distant hero, dark ritual mood'
  }
})
