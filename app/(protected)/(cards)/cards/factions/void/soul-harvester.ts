import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, discardSize } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'soul-harvester',
  type: 'ally',
  name: 'Soul Harvester',
  text: 'On enter: if your discard pile has 5 or more cards, it gains +4 attack and +4 health.',
  flavor: 'He reaps where others fell.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 9,
  health: 9,
  onEnter(ctx) {
    if (discardSize(ctx, ctx.owner) >= 5) {
      buffSelf(ctx, 4, 4)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a skeletal reaper with a glowing green scythe gathering floating souls on a dark field'
  }
})
