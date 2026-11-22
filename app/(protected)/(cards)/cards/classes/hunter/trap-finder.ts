import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyTrap } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'trap-finder',
  type: 'ally',
  name: 'Trap Finder',
  text: 'When it enters: destroy a random face-down enemy trap.',
  flavor: 'She has stepped on every trap. Once.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 70,
  cost: 2,
  attack: 4,
  health: 6,
  onEnter(ctx) {
    destroyTrap(ctx, ctx.opponent)
  },
  ai: { value: 2, tags: ['antiGear'] },
  art: {
    subject: 'a hooded scout crouching in tall grass, carefully disarming a hidden bear trap with a dagger'
  }
})
