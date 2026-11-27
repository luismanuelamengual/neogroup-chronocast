import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, isSpell, self, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nymph-of-the-tower',
  type: 'ally',
  name: 'Nymph of the Tower',
  text: 'Channel: when you cast a spell, it heals 3.',
  flavor: 'She sings to the moss on the old stones.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 80,
  cost: 7,
  tribe: 'fae',
  attack: 8,
  health: 15,
  onOwnerPlay(ctx, card) {
    const unit = self(ctx)
    const ref = unit ? slotOf(ctx, unit) : null

    if (ref && isSpell(card)) {
      heal(ctx, ref, 3)
    }
  },
  ai: { value: 7 },
  art: {
    subject:
      'Nymph of the Tower: a nymph with snowy coat and silver mane and dragonfly wings, charging head-on, gold accents, medieval magic order style'
  }
})
