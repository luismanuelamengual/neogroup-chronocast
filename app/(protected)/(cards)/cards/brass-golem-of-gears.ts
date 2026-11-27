import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, buffSelf, grantKeyword, self } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brass-golem-of-gears',
  type: 'ally',
  name: 'Brass Golem of Gears',
  text: 'When it enters: if you have 2 or more artifacts, it gains Guardian and +3 health.',
  flavor: 'Ten thousand gears, one purpose.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['eclipse'] },
  rarity: 'common',
  element: 'earth',
  resist: ['acid'],
  weak: ['lightning'],
  price: 65,
  cost: 4,
  tribe: 'automaton',
  keywords: ['shield'],
  attack: 5,
  health: 10,
  onEnter(ctx) {
    const unit = self(ctx)

    if (unit && artifactCount(ctx) >= 2) {
      grantKeyword(ctx, unit, 'guardian')
      buffSelf(ctx, 0, 3)
    }
  },
  ai: { value: 4 },
  art: {
    subject:
      'Brass Golem of Gears: a golem built of riveted copper with green patina, with a smoking chimney, turning its lens toward the viewer, steampunk steam era style'
  }
})
