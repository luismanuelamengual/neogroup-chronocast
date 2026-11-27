import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, drainEnergy, energyOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shackle-of-the-pack',
  type: 'ability',
  subtype: 'program',
  name: 'Shackle of the Pack',
  text: 'Drain all the energy of the enemy hero: deal 2 lightning damage to a random enemy ally for each point drained.',
  flavor: 'The pack never lets go.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  onPlay(ctx) {
    const drained = drainEnergy(ctx, ctx.opponent, energyOf(ctx, ctx.opponent))

    for (let hit = 0; hit < drained; hit++) {
      damageRandomAlly(ctx, ctx.opponent, 2, 'lightning')
    }
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Shackle of the Pack: heavy iron shackles snapping closed, in a snowy pass, swirling around the center, lime green accents, hunter style'
  }
})
