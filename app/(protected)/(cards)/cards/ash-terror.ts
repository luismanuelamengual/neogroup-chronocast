import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damageAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ash-terror',
  type: 'ally',
  name: 'Ash Terror',
  text: 'When it enters: deal 4 fire damage to every other ally, yours too.',
  flavor: 'It is born screaming, and so is everything near it.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 420,
  cost: 5,
  tribe: 'drake',
  element: 'fire',
  resist: ['fire'],
  attack: 7,
  health: 6,
  onEnter(ctx) {
    for (const player of [ctx.owner, ctx.opponent]) {
      for (const unit of alliesOf(ctx, player)) {
        if (unit.uid !== ctx.self.uid) {
          damageAlly(ctx, unit, 4)
        }
      }
    }
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Ash Terror: a gaunt drake made of smoldering ash with burning eyes, wings spread in an explosion of embers, full body, scarlet accents, medieval magic order style'
  }
})
