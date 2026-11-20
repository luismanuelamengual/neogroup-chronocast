import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'primeval-titan',
  type: 'ally',
  name: 'The Primeval Titan',
  text: 'At the start of each phase, your allies gain +2 attack and +4 health and your hero heals 5.',
  flavor: 'Before the eras, there was only it.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'mythic',
  price: 35000,
  cost: 9,
  attack: 36,
  health: 80,
  keywords: ['unique', 'guardian', 'cleave'],
  onPhaseStart(ctx) {
    buffAllies(ctx, ctx.owner, 2, 4)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 5)
  },
  ai: { value: 12, tags: ['buff', 'heal', 'defense'] },
  art: {
    subject:
      'a primordial titan made of rock, lava and ancient forest rising from the earth, dinosaurs fleeing at its feet'
  }
})
