import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, cleanse, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dawnwing-griffin',
  type: 'ally',
  name: 'Dawnwing Griffin',
  text: 'When it enters: your hero and your allies lose their poison and burn.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'epic',
  price: 1000,
  cost: 5,
  tribe: 'colossus',
  keywords: ['flying'],
  attack: 6,
  health: 10,
  onEnter(ctx) {
    cleanse(ctx, { player: ctx.owner, slot: 'hero' })

    for (const unit of alliesOf(ctx, ctx.owner)) {
      const ref = slotOf(ctx, unit)

      if (ref) {
        cleanse(ctx, ref)
      }
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Dawnwing Griffin: a white-feathered griffin with golden-tipped wings landing in a burst of morning light that washes away green poison mist, mystic healer style'
  }
})
