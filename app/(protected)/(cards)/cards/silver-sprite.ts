import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, freezeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'silver-sprite',
  type: 'ally',
  name: 'Silver Sprite',
  text: 'When it enters: freeze the 2 enemy allies with the most attack.',
  flavor: 'Quick as moonlight, twice as nosy.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 80,
  cost: 6,
  tribe: 'fae',
  attack: 7,
  health: 16,
  onEnter(ctx) {
    const strongest = alliesOf(ctx, ctx.opponent)
      .sort((one, other) => ctx.engine.attackOf(other) - ctx.engine.attackOf(one))
      .slice(0, 2)

    for (const unit of strongest) {
      freezeAlly(ctx, unit)
    }
  },
  ai: { value: 6 },
  art: {
    subject:
      'Silver Sprite: a sprite with lilac skin and silver hair and a crown of mushrooms, roaring with jaws wide open, emerald accents, medieval magic order style'
  }
})
