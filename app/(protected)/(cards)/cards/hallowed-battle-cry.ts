import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, grantKeyword, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hallowed-battle-cry',
  type: 'ability',
  subtype: 'tactic',
  name: 'Hallowed Battle Cry',
  text: 'An ally of yours gains +2 attack, +2 health and Retaliate.',
  flavor: 'Heard by the living and the dead.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      buff(ctx, unit, 2, 2)
      grantKeyword(ctx, unit, 'retaliate')
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Hallowed Battle Cry: a visible shockwave of sound blasting across a battlefield, over rooftops at night, centered and seen from slightly below, cobalt blue accents, mystic healer style'
  }
})
