import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'overseer-kade',
  type: 'hero',
  name: 'Overseer Kade',
  text: 'Lockdown (4): stun an enemy ally for two phases. At the start of each phase, your hero gains 2 armor.',
  flavor: 'He sees every camera in the megacity. All at once.',
  faction: 'neon',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'overseer-kade' },
  rarity: 'legendary',
  cost: 0,
  health: 63,
  ability: {
    name: 'Lockdown',
    text: 'Stun an enemy ally for two phases.',
    cost: 4,
    targets: ['enemyAlly'],
    activate(ctx) {
      stunAt(ctx, ctx.targets[0], 1)
    }
  },
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a cold corporate overseer in a white suit with cybernetic eyes, hundreds of holographic camera feeds around him in a tower'
  }
})
