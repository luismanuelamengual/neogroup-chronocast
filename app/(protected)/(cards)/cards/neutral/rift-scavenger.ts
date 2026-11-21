import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-scavenger',
  type: 'ally',
  name: 'Rift Scavenger',
  text: 'When it dies, draw a card.',
  flavor: "One era's junk is another era's treasure.",
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 60,
  cost: 2,
  attack: 8,
  health: 7,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'a hunched goblin scavenger with goggles and a huge backpack full of objects from many eras, digging through glowing rubble'
  }
})
