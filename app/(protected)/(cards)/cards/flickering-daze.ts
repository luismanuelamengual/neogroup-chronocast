import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroy, freeze, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-daze',
  type: 'ability',
  subtype: 'spell',
  name: 'Flickering Daze',
  text: 'Freeze an enemy ally. If it was already frozen, destroy it.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit && (unit.frozenUntilPhase ?? 0) >= ctx.engine.state.phase) {
      destroy(ctx, unit)
    } else {
      freeze(ctx, ctx.targets[0])
    }
  },
  ai: { value: 3, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Flickering Daze: spinning stars and swirls circling a dented helmet, covered in frost and ice crystals, over a stormy battlefield, centered and seen from slightly below, crimson accents, mage style'
  }
})
