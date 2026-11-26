import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { disableSupportAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'trojan-virus',
  type: 'ability',
  subtype: 'program',
  name: 'Trojan Virus',
  text: 'Hack an enemy artifact or face-down trap: it does nothing until the end of the next 2 phases. Fast.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 150,
  cost: 2,
  speed: 'fast',
  targets: ['enemyArtifact'],
  onPlay(ctx) {
    disableSupportAt(ctx, ctx.targets[0], 2)
  },
  ai: { value: 2, tags: ['hack'] },
  art: {
    subject:
      'Trojan Virus: a glowing green wireframe horse made of code galloping through a cascade of corrupted data blocks, glitch effects, teal accents, neon cyberpunk future style'
  }
})
