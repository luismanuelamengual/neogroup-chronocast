import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, freezeAlly, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mana-bound-mine',
  type: 'trap',
  name: 'Mana-Bound Mine',
  text: 'When the enemy uses an ability: freeze a random enemy ally and draw a card.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    const unit = randomAlly(ctx, ctx.opponent)

    if (unit) {
      freezeAlly(ctx, unit)
    }

    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['trap'] },
  art: {
    subject:
      'Mana-Bound Mine: a buried rune mine glowing faintly under the dirt, circled by glowing violet runes, seen from above, indigo accents, mage style'
  }
})
