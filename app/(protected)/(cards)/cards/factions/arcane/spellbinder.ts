import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spellbinder',
  type: 'ally',
  name: 'Spellbinder',
  text: 'When it attacks: deal 2 damage to the enemy hero.',
  flavor: 'Every strike carries a little curse.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  attack: 7,
  health: 7,
  onAttack(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2)
  },
  ai: { value: 2, tags: ['burn'] },
  art: {
    subject: 'a sorceress with glowing chains of runes wrapped around her arms, striking with a whip of light'
  }
})
