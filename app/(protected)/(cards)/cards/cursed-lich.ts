import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, discardSize } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cursed-lich',
  type: 'ally',
  name: 'Cursed Lich',
  text: 'When it enters: if your discard pile has 6 or more cards, it gains +2 attack and +2 health.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['dawn'] },
  rarity: 'common',
  resist: ['shadow', 'ice'],
  price: 55,
  cost: 3,
  tribe: 'undead',
  attack: 4,
  health: 8,
  onEnter(ctx) {
    if (discardSize(ctx, ctx.owner) >= 6) {
      buffSelf(ctx, 2, 2)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Cursed Lich: a lich with pale glowing white spirit-light and a wailing open mouth, leaping forward, scarlet accents, dark end-of-time void style'
  }
})
