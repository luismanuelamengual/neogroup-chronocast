import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, grantKeyword, heal, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hallowed-deserter',
  type: 'ally',
  name: 'Hallowed Deserter',
  text: 'When it enters: your other allies heal 3 and gain Retaliate.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  element: 'light',
  price: 180,
  cost: 4,
  keywords: ['shield'],
  attack: 4,
  health: 9,
  onEnter(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      if (unit.uid !== ctx.self.uid) {
        const ref = slotOf(ctx, unit)

        if (ref) {
          heal(ctx, ref, 3)
        }

        grantKeyword(ctx, unit, 'retaliate')
      }
    }
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Hallowed Deserter: a barrel-chested middle-aged foxfolk man with auburn hair in an afro, a thin mustache and a burn scar on the jaw, dressed in a medieval tabard over a space suit liner, dragging a broken standard, with wide-eyed wonder, gold accents, mystic healer style'
  }
})
