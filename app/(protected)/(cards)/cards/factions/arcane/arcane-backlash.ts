import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'arcane-backlash',
  type: 'trap',
  name: 'Arcane Backlash',
  text: 'When the enemy hero uses its ability: cancel it, deal 10 damage to the enemy hero and draw a card.',
  flavor: 'Magic always comes back to the one who throws it.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'exotic',
  price: 11500,
  cost: 3,
  trigger: 'enemyAbility',
  onTrigger(ctx, event) {
    event.cancel()
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 10)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['trap', 'control', 'burn', 'draw'] },
  art: {
    subject: 'a spell reflecting off a glowing violet barrier and blasting back at the caster'
  }
})
