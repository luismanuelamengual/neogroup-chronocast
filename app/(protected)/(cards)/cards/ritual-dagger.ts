import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, boostWeapon, destroy, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ritual-dagger',
  type: 'weapon',
  subtype: 'dagger',
  name: 'Ritual Dagger',
  text: 'When it is equipped: sacrifice an ally of yours (the one you choose, or the weakest); it gains as much attack as that ally had.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 1,
  attack: 1,
  durability: 3,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const chosen = ctx.targets[0]?.player === ctx.owner ? unitAt(ctx, ctx.targets[0]) : null
    const victim = chosen ?? alliesOf(ctx, ctx.owner).sort((a, b) => a.attack + a.health - (b.attack + b.health))[0]

    if (!victim) {
      return
    }

    const attack = ctx.engine.attackOf(victim)

    destroy(ctx, victim)
    boostWeapon(ctx, ctx.owner, attack, 0)
  },
  ai: { value: 2, tags: ['sacrifice'] },
  art: {
    subject:
      'Ritual Dagger: a curved obsidian dagger with a bone hilt resting on a blood-stained altar among black candles, close-up, purple accents, dark end-of-time void style'
  }
})
