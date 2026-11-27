import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, stunAt, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'binding-of-the-legion',
  type: 'ability',
  subtype: 'tactic',
  name: 'Binding of the Legion',
  text: 'Stun an enemy ally. Your Legionnaires gain +1 attack and +1 health. Fast.',
  flavor: 'Shields close in. No way out.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'rare',
  price: 540,
  cost: 5,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0])

    for (const unit of tribeAllies(ctx, ctx.owner, 'legionnaire')) {
      buff(ctx, unit, 1, 1)
    }
  },
  ai: { value: 6, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Binding of the Legion: glowing chains coiling tightly around nothing, locking shut, in a ruined temple, centered and seen from slightly below, teal accents, ancient bronze-age empire style'
  }
})
