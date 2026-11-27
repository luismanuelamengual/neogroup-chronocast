import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damageAlly, isPrey } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pit-of-spirits',
  type: 'trap',
  name: 'Pit of Spirits',
  text: 'When the enemy uses an ability: deal 5 light damage to every enemy ally that is your Prey.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  element: 'light',
  price: 55,
  cost: 3,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      if (isPrey(ctx, unit)) {
        damageAlly(ctx, unit, 5, 'light')
      }
    }
  },
  ai: { value: 3, tags: ['trap'] },
  art: {
    subject:
      'Pit of Spirits: a camouflaged pit with sharpened stakes, radiating golden holy light, swirling around the center, indigo accents, mystic healer style'
  }
})
