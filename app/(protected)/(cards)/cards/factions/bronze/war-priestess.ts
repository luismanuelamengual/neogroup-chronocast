import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buffThisPhase } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'war-priestess',
  type: 'ally',
  name: 'War Priestess',
  text: 'Its ability is paid with energy (⚡).',
  flavor: 'Her hymn turns tired soldiers into a wall of bronze.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 175,
  cost: 3,
  attack: 5,
  health: 10,
  ability: {
    name: 'Battle Hymn',
    text: 'Your allies gain +3 attack this phase.',
    cost: 2,
    resource: 'energy',
    activate(ctx) {
      for (const unit of alliesOf(ctx, ctx.owner)) {
        buffThisPhase(ctx, unit, 3)
      }
    }
  },
  ai: { value: 3, tags: ['ability', 'energy', 'buff'] },
  art: {
    subject: 'a roman priestess in white and bronze singing with raised arms in front of marching legionaries'
  }
})
