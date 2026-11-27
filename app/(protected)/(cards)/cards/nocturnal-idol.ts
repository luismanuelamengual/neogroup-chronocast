import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { consume, damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nocturnal-idol',
  type: 'artifact',
  name: 'Nocturnal Idol',
  text: 'At the start of each phase: Consume 1; if you do, deal 3 shadow damage to the enemy hero.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  onPhaseStart(ctx) {
    if (consume(ctx, 1)) {
      damageEnemyHero(ctx, 3, 'shadow')
    }
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject:
      'Nocturnal Idol: an ancient idol made of ivory and jade, wrapped in swirling black smoke, standing on a windy cliff, diagonal dynamic composition, magenta accents, hunter style'
  }
})
