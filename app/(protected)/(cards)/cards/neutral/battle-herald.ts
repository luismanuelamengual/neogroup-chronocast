import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'battle-herald',
  type: 'ally',
  name: 'Battle Herald',
  text: 'On enter: your other allies gain +3 attack.',
  flavor: 'When he blows the horn, every era answers.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 9,
  health: 18,
  onEnter(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      if (unit.uid !== ctx.self.uid) {
        buff(ctx, unit, 3, 0)
      }
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a herald in a colorful tabard blowing a huge brass horn on a battlefield'
  }
})
