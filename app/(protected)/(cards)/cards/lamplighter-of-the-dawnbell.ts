import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, heal, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lamplighter-of-the-dawnbell',
  type: 'ally',
  name: 'Lamplighter of the Dawnbell',
  text: 'When it enters: your other allies heal 5.',
  flavor: 'Every dawn starts with her small flame.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 5,
  health: 8,
  onEnter(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      if (unit.uid !== ctx.self.uid) {
        const ref = slotOf(ctx, unit)

        if (ref) {
          heal(ctx, ref, 5)
        }
      }
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Lamplighter of the Dawnbell: a wiry elderly halfling man with ruddy skin, snow-white hair in a single long braid, mutton chops and heavy golden earrings, wearing a straw hat, dressed in a monk robe with a futuristic utility belt, raising a lantern on a long pole, with calm focus, emerald accents, mystic healer style'
  }
})
