import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clever-chrononaut',
  type: 'ally',
  name: 'Clever Chrononaut',
  text: 'At the start of each phase: your hero heals 2. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 220,
  cost: 6,
  tribe: 'drifter',
  keywords: ['charge'],
  attack: 7,
  health: 14,
  ability: {
    name: 'Daze',
    text: 'Stun an enemy ally.',
    cost: 2,
    resource: 'energy',
    targets: ['enemyAlly'],
    activate(ctx) {
      stunAt(ctx, ctx.targets[0])
    }
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 6, tags: ['ability', 'energy', 'heal'] },
  art: {
    subject:
      'Clever Chrononaut: a towering adult halfling woman with umber skin, sandy hair in cornrows and a burn scar on the jaw, dressed in a patchwork coat stitched from fabrics of many centuries, adjusting a brass time compass on the wrist, with a booming laugh, ivory accents, time rift wanderer style'
  }
})
