import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'implant-of-spirits',
  type: 'attachment',
  subtype: 'implant',
  name: 'Implant of Spirits',
  text: 'Attach to an ally of yours: it gains +2 attack and +5 health.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  keywords: ['lifesteal'],
  attack: 2,
  health: 5,
  targets: ['friendlyAlly'],
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Implant of Spirits: an enchanted implant made of white bone and leather wraps, stuck in the sand, close-up filling the frame, crimson accents, mystic healer style'
  }
})
