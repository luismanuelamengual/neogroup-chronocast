import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damageAlly, isPrey } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'swift-pterodon',
  type: 'ally',
  name: 'Swift Pterodon',
  text: 'When it enters: deal 3 wind damage to every enemy ally that is your Prey.',
  flavor: 'The sky belonged to it first.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'common',
  weak: ['ice'],
  price: 65,
  cost: 4,
  tribe: 'saurian',
  keywords: ['charge'],
  attack: 5,
  health: 10,
  onEnter(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      if (isPrey(ctx, unit)) {
        damageAlly(ctx, unit, 3, 'wind')
      }
    }
  },
  ai: { value: 4 },
  art: {
    subject:
      'Swift Pterodon: a pterodon with a moss-green hide with yellow stripes and tribal paint, rearing up, cobalt blue accents, prehistoric jungle era style'
  }
})
