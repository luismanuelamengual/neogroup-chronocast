import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

export default defineCard({
  id: 'acolyte-of-spirits',
  type: 'ally',
  name: 'Acolyte of Spirits',
  text: 'When it enters: your hero heals 2 for each ally in your discard pile (up to 12).',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  resist: ['light'],
  price: 220,
  cost: 7,
  tribe: 'oracle',
  keywords: ['lifesteal'],
  attack: 7,
  health: 13,
  onEnter(ctx) {
    const fallen = ctx.engine.player(ctx.owner).discard.filter((card) => getCard(card.cardId).type === 'ally').length

    healHero(ctx, Math.min(12, 2 * fallen))
  },
  ai: { value: 7, tags: ['buff'] },
  art: {
    subject:
      'Acolyte of Spirits: a towering adult man with deep brown skin, chestnut hair in a messy bun, a forked beard and war paint stripes, wearing a sheer veil, dressed in a sky-blue peplos with a veil, carrying a smoking censer, with a sly grin, saffron yellow accents, mystic healer style'
  }
})
