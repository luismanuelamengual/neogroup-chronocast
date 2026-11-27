import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, grantKeyword } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'oath-of-the-dawn',
  type: 'item',
  name: 'Oath of the Dawn',
  text: 'Your allies gain Retaliate.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      grantKeyword(ctx, unit, 'retaliate')
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Oath of the Dawn: a parchment oath sealed with golden wax and a sun sigil, glowing hands raised over it in a vow, mystic healer style'
  }
})
