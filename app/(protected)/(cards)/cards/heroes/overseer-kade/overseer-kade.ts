import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, healHero, stun } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'overseer-kade',
  type: 'hero',
  name: 'Overseer Kade',
  text: 'Lockdown (5): stun every enemy ally. At the start of each phase, your hero heals 2.',
  flavor: 'He sees every camera in the megacity. All at once.',
  faction: 'neon',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'overseer-kade' },
  rarity: 'legendary',
  cost: 0,
  health: 63,
  ability: {
    name: 'Lockdown',
    text: 'Stun every enemy ally.',
    cost: 5,
    ai: { tags: ['removal'] },
    activate(ctx) {
      for (const unit of alliesOf(ctx, ctx.opponent)) {
        stun(ctx, unit)
      }
    }
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a cold corporate overseer in a white suit with cybernetic eyes, hundreds of holographic camera feeds around him in a tower'
  }
})
