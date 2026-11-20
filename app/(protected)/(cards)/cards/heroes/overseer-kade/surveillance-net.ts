import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'surveillance-net',
  type: 'trap',
  boss: true,
  name: 'Surveillance Net',
  text: 'When an enemy ally is summoned: stun it for two phases and draw a card.',
  flavor: 'Smile. You are on camera.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'overseer-kade' },
  rarity: 'epic',
  cost: 2,
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    stunAt(ctx, event.unit, 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['trap', 'control', 'draw'] },
  art: {
    subject: 'a web of red laser scanners locking onto a creature as it arrives'
  }
})
