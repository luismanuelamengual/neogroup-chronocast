import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vigor-of-the-ancestors',
  type: 'ability',
  subtype: 'tactic',
  name: 'Vigor of the Ancestors',
  text: 'An ally of yours gains +2 attack this phase for each card attached to it and for your weapon and armor. Instant.',
  flavor: 'The old blood still runs strong.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])
    const hero = ctx.engine.player(ctx.owner).hero

    if (unit) {
      buffThisPhase(ctx, unit, 2 * ((unit.attachments?.length ?? 0) + (hero.weapon ? 1 : 0) + (hero.armor ? 1 : 0)))
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Vigor of the Ancestors: a glowing heart of green life energy pulsing with veins of light, in a sunlit meadow, diagonal dynamic composition, rose pink accents, mystic healer style'
  }
})
