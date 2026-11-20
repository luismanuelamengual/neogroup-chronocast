import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thunderclap',
  type: 'ability',
  name: 'Thunderclap',
  text: 'Deal 6 damage to every enemy ally and your hero gains 6 armor. Fast.',
  flavor: 'Everyone hears it. Nobody stands after it.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'ryn-voltblade' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'fast',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
    gainArmor(ctx, ctx.owner, 6)
  },
  ai: { value: 4, tags: ['removal', 'defense'] },
  art: {
    subject: 'Ryn slamming her katana into the ground, a blue electric shockwave blasting outward'
  }
})
