import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'plating-of-mana',
  type: 'attachment',
  subtype: 'implant',
  name: 'Plating of Mana',
  text: 'Attach to an ally of yours: it gains +3 attack and +5 health.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 3,
  health: 5,
  targets: ['friendlyAlly'],
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Plating of Mana: an enchanted plating made of blue steel with silver runes, leaning against a ruined wall, diagonal dynamic composition, magenta accents, mage style'
  }
})
