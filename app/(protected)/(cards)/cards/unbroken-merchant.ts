import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unbroken-merchant',
  type: 'ally',
  name: 'Unbroken Merchant',
  text: 'When it kills an ally: draw a card.',
  flavor: 'Robbed nine times. Still open for business.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 55,
  cost: 3,
  keywords: ['cleave'],
  attack: 4,
  health: 4,
  onAttack(ctx, target) {
    const victim = unitAt(ctx, target)

    if (victim) {
      ctx.engine.afterDamage(() => {
        if (!ctx.engine.findUnit(victim.uid)) {
          draw(ctx, ctx.owner, 1)
        }
      })
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Unbroken Merchant: a wiry middle-aged catfolk man with platinum blond hair in short curls, a braided beard and a monocle, wearing a deep hood, dressed in a monk robe with a futuristic utility belt, balancing a scale heaped with glowing trinkets, with grim determination, scarlet accents, warrior style'
  }
})
