import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'executioners-gauntlets',
  type: 'armor',
  subtype: 'plate',
  name: "Executioner's Gauntlets",
  text: 'Sentence (3⚡): an enemy ally loses all its attack.',
  flavor: 'One grip, and the sword falls from your hand.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'rare',
  price: 420,
  cost: 5,
  armor: 3,
  durability: 5,
  ability: {
    name: 'Sentence',
    text: 'An enemy ally loses all its attack.',
    cost: 3,
    resource: 'energy',
    targets: ['enemyAlly'],
    ai: { tags: ['control'] },
    activate(ctx) {
      const victim = unitAt(ctx, ctx.targets[0])

      if (victim && victim.attack > 0) {
        ctx.engine.buff(victim.uid, -victim.attack, 0)
      }
    }
  },
  ai: { value: 5, tags: ['control'] },
  art: {
    subject:
      "Executioner's Gauntlets: a pair of heavy spiked bronze gauntlets on an executioner block, dramatic side light, dark red accents, ancient bronze-age empire style"
  }
})
