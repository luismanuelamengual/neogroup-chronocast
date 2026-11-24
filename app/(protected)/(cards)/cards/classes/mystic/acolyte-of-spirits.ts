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
    subject:
      'Acolyte of Spirits: a towering adult man with deep brown skin, chestnut hair in a messy bun, a forked beard and war paint stripes, wearing a sheer veil, dressed in a sky-blue peplos with a veil, carrying a smoking censer, with a sly grin, saffron yellow accents, mystic healer style'
  }
})
