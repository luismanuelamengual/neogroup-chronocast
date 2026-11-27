import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, tribeAllies, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'caeluss-axe',
  type: 'weapon',
  subtype: 'axe',
  name: "Caelus's Axe",
  text: 'When an attack of your hero with it kills an ally: your Colossi gain +1 attack and +1 health.',
  flavor: 'Taken from a king. Kept by a usurper.',
  faction: 'bronze',
  restriction: { heroes: ['caelus-the-usurper'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onAttack(ctx, target) {
    const victim = unitAt(ctx, target)

    if (victim) {
      ctx.engine.afterDamage(() => {
        if (!ctx.engine.findUnit(victim.uid)) {
          for (const unit of tribeAllies(ctx, ctx.owner, 'colossus')) {
            buff(ctx, unit, 1, 1)
          }
        }
      })
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Caelus's Axe: a single axe made of copper with green patina, leaning against a ruined wall, bursting toward the viewer, cobalt blue accents, ancient bronze-age empire style"
  }
})
