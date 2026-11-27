import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'toxin-of-midnight',
  type: 'ability',
  subtype: 'program',
  name: 'Toxin of Midnight',
  text: 'Poison an enemy ally (2), +2 for each Enforcer of yours.',
  flavor: 'Brewed in neon, served cold.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    poison(ctx, ctx.targets[0], 2 + 2 * tribeAllies(ctx, ctx.owner, 'enforcer').length)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Toxin of Midnight: a cracked vial leaking glowing poison, above a calm lake at dusk, swirling around the center, lime green accents, neon cyberpunk future style'
  }
})
