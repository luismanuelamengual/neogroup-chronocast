import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gideons-hammer',
  type: 'weapon',
  name: "Gideon's Hammer",
  text: 'When it is equipped: your hero gains 5 armor.',
  flavor: 'Steam-powered and opinionated.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'gideon-ironsteam' },
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
      "Gideon's Hammer: a single hammer made of pale ash wood wrapped in red cloth, resting on a velvet cloth, dramatic backlight, ivory accents, steampunk steam era style"
  }
})
