import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'arcane-mine',
  type: 'trap',
  name: 'Arcane Mine',
  text: 'When an enemy ally is summoned: deal 3 arcane damage to it and freeze it.',
  flavor: 'Step lightly. Read the runes. Too late.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 3, 'arcane')
      freeze(ctx, event.unit)
    }
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject:
      'Arcane Mine: a buried rune mine glowing faintly under the dirt, close-up filling the frame, turquoise accents, medieval magic order style'
  }
})
