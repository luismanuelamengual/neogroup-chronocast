import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'faithful-amulet',
  type: 'attachment',
  subtype: 'charm',
  name: 'Faithful Amulet',
  text: 'Attach to an ally of yours: it gains +2 attack and +3 health.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  attack: 2,
  health: 3,
  targets: ['friendlyAlly'],
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Faithful Amulet: an enchanted amulet made of ivory and jade, on a mossy rock, close-up filling the frame, violet accents, ancient bronze-age empire style'
  }
})
