import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, healHero, slotsNextTo } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tauron-labyrinth-lord',
  type: 'hero',
  name: 'Tauron, Lord of the Labyrinth',
  text: "Ram (5): deal earth damage equal to 8 + your weapon's attack to an enemy ally and to the allies next to it. At the start of each phase, your hero heals 2.",
  flavor: 'Nobody who enters his maze has found the way out.',
  faction: 'bronze',
  heroClass: 'warrior',
  side: 'dawn',
  restriction: { kind: 'hero', heroId: 'tauron-labyrinth-lord' },
  rarity: 'legendary',
  element: 'earth',
  cost: 0,
  health: 61,
  ability: {
    name: 'Ram',
    text: "Deal earth damage equal to 8 + your weapon's attack to an enemy ally and to the allies next to it.",
    cost: 5,
    targets: ['enemyAlly'],
    activate(ctx) {
      const amount = 6 + (ctx.engine.player(ctx.owner).hero.weapon?.attack ?? 0)

      for (const ref of [ctx.targets[0], ...slotsNextTo(ctx, ctx.targets[0])]) {
        damage(ctx, ref, amount)
      }
    }
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a gigantic bull-headed warrior with bronze armor and a huge double axe standing in the center of a stone labyrinth'
  }
})
