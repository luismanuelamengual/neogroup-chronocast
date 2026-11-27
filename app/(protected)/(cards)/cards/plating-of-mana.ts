import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isHost } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'plating-of-mana',
  type: 'attachment',
  subtype: 'implant',
  name: 'Plating of Mana',
  text: 'Attach to an ally of yours: it gains +5 health, and every damage it takes is 2 lower.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  health: 5,
  targets: ['friendlyAlly'],
  modifyDamage(ctx, target, amount) {
    return isHost(ctx, target) ? Math.max(0, amount - 2) : amount
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Plating of Mana: an enchanted plating made of blue steel with silver runes, leaning against a ruined wall, diagonal dynamic composition, magenta accents, mage style'
  }
})
