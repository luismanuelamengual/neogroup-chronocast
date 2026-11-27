import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, hasPanoply } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lance-of-the-wilds',
  type: 'ability',
  subtype: 'tactic',
  name: 'Lance of the Wilds',
  text: 'Deal 4 damage to an enemy slot, or 9 with Panoply.',
  flavor: 'Carved from a tree that was struck by lightning.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], hasPanoply(ctx) ? 9 : 4)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Lance of the Wilds: a long lance of pure energy piercing the air, in a dark forest clearing, close-up filling the frame, amber accents, hunter style'
  }
})
