import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, host, isSpell } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-rune',
  type: 'attachment',
  subtype: 'rune',
  name: 'Wandering Rune',
  text: 'Attach to an ally of yours: it gains +4 health. Channel: when you cast a spell, it gains +1 attack.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  health: 4,
  targets: ['friendlyAlly'],
  onOwnerPlay(ctx, card) {
    const found = host(ctx)

    if (found && isSpell(card)) {
      buff(ctx, found.unit, 1, 0)
    }
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Wandering Rune: an enchanted rune made of blue steel with silver runes, on a fur rug, centered and seen from slightly below, teal accents, medieval magic order style'
  }
})
