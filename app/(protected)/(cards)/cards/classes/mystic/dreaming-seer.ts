import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dreaming-seer',
  type: 'ally',
  name: 'Dreaming Seer',
  text: 'At the start of each phase: your hero heals 2.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  resist: ['light'],
  price: 170,
  cost: 3,
  tribe: 'oracle',
  keywords: ['shield'],
  attack: 5,
  health: 6,
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Dreaming Seer: a broad-shouldered elderly man with pale skin, silver hair in a sharp bob, heavy stubble and a dusting of freckles, wearing a laurel wreath, dressed in linen robes painted with eye symbols, gazing into a bowl of water, with a fierce scowl, teal accents, mystic healer style'
  }
})
