import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'neural-implant',
  type: 'attachment',
  subtype: 'implant',
  name: 'Neural Implant',
  text: 'Attach to an ally of yours: it gains +1 attack, +1 health and Quick.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  price: 50,
  cost: 1,
  keywords: ['quick'],
  attack: 1,
  health: 1,
  targets: ['friendlyAlly'],
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject:
      'Neural Implant: a tiny chrome chip with glowing teal circuit lines held by surgical tweezers over a cybernetic skull port, extreme close-up, teal accents, neon cyberpunk future style'
  }
})
