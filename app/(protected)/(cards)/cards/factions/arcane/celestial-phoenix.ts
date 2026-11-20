import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'celestial-phoenix',
  type: 'ally',
  name: 'Celestial Phoenix',
  text: 'On enter: deal 10 damage to the enemy hero. When it dies: deal 6 damage to every enemy ally.',
  flavor: 'It burns blue, and it never stays dead.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'exotic',
  price: 13500,
  cost: 7,
  attack: 26,
  health: 44,
  keywords: ['flying', 'echo', 'unique'],
  onEnter(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 10)
  },
  onDeath(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
  },
  ai: { value: 9, tags: ['burn', 'removal'] },
  art: {
    subject: 'a radiant phoenix made of blue and violet starfire soaring above a sea of clouds'
  }
})
