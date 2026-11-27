import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ember-gargoyle',
  type: 'ally',
  name: 'Ember Gargoyle',
  text: 'Every damage it takes is 2 lower.',
  flavor: 'Stone skin, burning heart.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'common',
  price: 60,
  cost: 3,
  tribe: 'horror',
  attack: 3,
  health: 8,
  modifyDamage(ctx, target, amount) {
    return unitAt(ctx, target)?.uid === ctx.self.uid ? Math.max(0, amount - 2) : amount
  },
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject:
      'Ember Gargoyle: a hunched stone gargoyle with glowing ember cracks and bat wings perched on a ruined spire, full body, orange accents, dark end-of-time void style'
  }
})
