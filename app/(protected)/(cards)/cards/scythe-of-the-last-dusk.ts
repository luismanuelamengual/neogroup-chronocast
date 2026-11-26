import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { repairWeapon, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scythe-of-the-last-dusk',
  type: 'weapon',
  subtype: 'scythe',
  name: 'Scythe of the Last Dusk',
  text: 'When an attack of your hero with it kills an ally: it gains +1 durability.',
  flavor: 'It reaps the last light of every day.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 450,
  cost: 4,
  keywords: ['lifesteal'],
  attack: 4,
  durability: 4,
  onAttack(ctx, target) {
    const victim = unitAt(ctx, target)

    if (victim) {
      ctx.engine.afterDamage(() => {
        if (!ctx.engine.findUnit(victim.uid)) {
          repairWeapon(ctx, ctx.owner, 1)
        }
      })
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      'Scythe of the Last Dusk: a huge black scythe with a blade of purple twilight glass, dripping shadow, planted in a field of dead wheat under a dying sun, purple accents, dark end-of-time void style'
  }
})
