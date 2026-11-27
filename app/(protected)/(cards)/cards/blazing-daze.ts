import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blazing-daze',
  type: 'ability',
  subtype: 'program',
  name: 'Blazing Daze',
  text: 'Stun an enemy ally for two phases. The enemy hero loses 2 energy. Fast.',
  flavor: 'Too bright to think.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0], 1)
    drainEnergy(ctx, ctx.opponent, 2)
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Blazing Daze: spinning stars and swirls circling a dented helmet, above a calm lake at dusk, swirling around the center, violet accents, mage style'
  }
})
