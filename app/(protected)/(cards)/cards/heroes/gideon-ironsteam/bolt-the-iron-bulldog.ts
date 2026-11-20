import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bolt-the-iron-bulldog',
  type: 'ally',
  name: 'Bolt, the Iron Bulldog',
  text: 'On enter: your hero gains 6 armor.',
  flavor: 'Built to guard the factory. Decided to guard Gideon.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'gideon-ironsteam' },
  rarity: 'legendary',
  price: 5000,
  cost: 4,
  attack: 14,
  health: 36,
  keywords: ['guardian', 'shield', 'unique'],
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 6)
  },
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject: 'a stocky mechanical bulldog made of iron plates with glowing eyes and a spiked collar'
  }
})
