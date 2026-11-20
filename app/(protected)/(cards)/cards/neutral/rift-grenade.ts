import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { ALLY_SLOTS } from '@/app/(protected)/(engine)/data/rules'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-grenade',
  type: 'item',
  name: 'Rift Grenade',
  text: 'Deal 12 damage to an enemy ally and 6 to the allies next to it.',
  flavor: 'Pull the pin. Step back a few centuries.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const target = ctx.targets[0]

    damage(ctx, target, 12)

    if (typeof target.slot === 'number') {
      for (const slot of [target.slot - 1, target.slot + 1]) {
        if (slot >= 0 && slot < ALLY_SLOTS) {
          damage(ctx, { player: target.player, slot }, 6)
        }
      }
    }
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'a spherical grenade cracking open with turquoise rift energy, blowing creatures apart'
  }
})
