import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { addBoon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clan-moon',
  type: 'ability',
  subtype: 'instinct',
  name: 'Clan Moon',
  text: 'Until the end of the next phase: you deal 3 more damage to the enemy hero and allies, and your allies take 3 less damage.',
  flavor: 'When the moon is full, the clan hunts as one.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  price: 420,
  cost: 4,
  onPlay(ctx) {
    addBoon(ctx, ctx.owner, 'empower', 3)
    addBoon(ctx, ctx.owner, 'guard', 3)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Clan Moon: a huge full moon rising over a jungle ridge with wolf silhouettes howling in a row, magenta accents, prehistoric jungle era style'
  }
})
