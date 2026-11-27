import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'subdermal-mesh',
  type: 'attachment',
  subtype: 'implant',
  name: 'Subdermal Mesh',
  text: 'Attach to an ally of yours: it gains +4 health and Retaliate.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  keywords: ['retaliate'],
  health: 4,
  targets: ['friendlyAlly'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Subdermal Mesh: a sheet of fine hexagonal chrome mesh glowing under translucent skin, close-up, magenta accents, neon cyberpunk future style'
  }
})
