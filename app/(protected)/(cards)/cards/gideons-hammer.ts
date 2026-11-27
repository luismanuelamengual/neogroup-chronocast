import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gideons-hammer',
  type: 'weapon',
  subtype: 'tool',
  name: "Gideon's Hammer",
  text: 'When your hero attacks with it: your Inventors gain +1 attack and +1 health.',
  flavor: 'Steam-powered and opinionated.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['dawn'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onAttack(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'inventor')) {
      buff(ctx, unit, 1, 1)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Gideon's Hammer: a single hammer made of pale ash wood wrapped in red cloth, resting on a velvet cloth, dramatic backlight, ivory accents, steampunk steam era style"
  }
})
