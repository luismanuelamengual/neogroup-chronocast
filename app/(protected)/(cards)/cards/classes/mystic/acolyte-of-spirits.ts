import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'acolyte-of-spirits',
  type: 'ally',
  name: 'Acolyte of Spirits',
  text: 'When it enters: your other allies gain +2 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  resist: ['light'],
  price: 220,
  cost: 7,
  tribe: 'oracle',
  keywords: ['lifesteal'],
  attack: 7,
  health: 13,
  onEnter(ctx) {
    buffAllies(ctx, ctx.owner, 0, 2, true)
  },
  ai: { value: 7, tags: ['buff'] },
  art: {
    subject: 'an ancient temple seer in white robes, the acolyte of spirits, charging into battle, mystic healer style'
  }
})
