import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, isSpell } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'fae-channeler',
  type: 'ally',
  name: 'Fae Channeler',
  text: 'Channel: when you cast a spell, it gains +1 attack and +1 health.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 150,
  cost: 3,
  tribe: 'fae',
  attack: 2,
  health: 4,
  onOwnerPlay(ctx, card) {
    if (isSpell(card)) {
      buffSelf(ctx, 1, 1)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Fae Channeler: a slender fairy with translucent wings drawing streams of glowing magic from the air into her hands, floating in an enchanted forest, cobalt blue accents, medieval magic order style'
  }
})
