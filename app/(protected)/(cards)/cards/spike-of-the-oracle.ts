import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-of-the-oracle',
  type: 'ability',
  subtype: 'tactic',
  name: 'Spike of the Oracle',
  text: 'Deal 2 light damage to an enemy slot, +2 for each Oracle of yours.',
  flavor: 'She foresaw where to strike.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  element: 'light',
  price: 55,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 2 + 2 * tribeAllies(ctx, ctx.owner, 'oracle').length, 'light')
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Spike of the Oracle: a giant jagged spike bursting up from cracked ground, radiating golden holy light, in a snowy pass, close-up filling the frame, rose pink accents, ancient bronze-age empire style'
  }
})
