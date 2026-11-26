import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { markPrey } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stalkers-eye',
  type: 'ability',
  subtype: 'instinct',
  name: "Stalker's Eye",
  text: 'An enemy ally becomes your Prey. Fast.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 50,
  cost: 1,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    markPrey(ctx, ctx.targets[0])
  },
  ai: { value: 1, tags: ['prey'] },
  art: {
    subject:
      "Stalker's Eye: the glowing amber eye of a crouching hunter peering through tall grass at distant prey, extreme close-up, lime green accents, prehistoric jungle era style"
  }
})
