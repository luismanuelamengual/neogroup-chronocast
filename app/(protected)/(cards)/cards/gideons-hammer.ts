import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gideons-hammer',
  type: 'weapon',
  subtype: 'tool',
  name: "Gideon's Hammer",
  text: 'When it is equipped: your hero heals 5.',
  flavor: 'Steam-powered and opinionated.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['dawn'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    healHero(ctx, 5)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Gideon's Hammer: a single hammer made of pale ash wood wrapped in red cloth, resting on a velvet cloth, dramatic backlight, ivory accents, steampunk steam era style"
  }
})
