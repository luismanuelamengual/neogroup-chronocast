import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rust-swarm',
  type: 'ability',
  name: 'Rust Swarm',
  text: 'The enemy weapon loses 2 durability and the enemy hero loses 6 armor.',
  flavor: 'Tiny brass beetles with a taste for iron.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 150,
  cost: 2,
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 2)
    wearArmor(ctx, ctx.opponent, 6)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject: 'a swarm of tiny mechanical beetles covering a suit of armor, leaving trails of orange rust'
  }
})
