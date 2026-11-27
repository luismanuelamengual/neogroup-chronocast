import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'parasite-code',
  type: 'attachment',
  subtype: 'implant',
  name: 'Parasite Code',
  text: 'Attach to an enemy ally: it has -2 attack, and its hero loses 1 energy at the start of each phase.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  attack: -2,
  targets: ['enemyAlly'],
  onPhaseStart(ctx) {
    drainEnergy(ctx, ctx.opponent, 1)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Parasite Code: a writhing worm made of green glowing code crawling into a cyborg neck port, close-up, acid green accents, neon cyberpunk future style'
  }
})
