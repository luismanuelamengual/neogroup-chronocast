import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { returnToHand, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'uprooting-dagger',
  type: 'weapon',
  subtype: 'dagger',
  name: 'Uprooting Dagger',
  text: "When your hero hits an ally with it and doesn't kill it: that ally returns to its owner's hand.",
  flavor: 'It cuts you out of the moment.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 420,
  cost: 5,
  attack: 3,
  durability: 5,
  onAttack(ctx, target) {
    const victim = unitAt(ctx, target)

    if (victim) {
      ctx.engine.afterDamage(() => {
        const found = ctx.engine.findUnit(victim.uid)

        if (found) {
          returnToHand(ctx, found.unit)
        }
      })
    }
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Uprooting Dagger: a wavy obsidian dagger trailing a tear of black void where it cuts the air, on a velvet cloth, close-up filling the frame, violet accents, dark end-of-time void style'
  }
})
