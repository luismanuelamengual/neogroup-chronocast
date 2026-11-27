import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'chrome-skeleton',
  type: 'attachment',
  subtype: 'implant',
  name: 'Chrome Skeleton',
  text: 'Attach to an ally of yours: it gains +3 attack, +6 health and Guardian.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'epic',
  price: 1100,
  cost: 5,
  keywords: ['guardian'],
  attack: 3,
  health: 6,
  targets: ['friendlyAlly'],
  ai: { value: 6, tags: ['buff'] },
  art: {
    subject:
      'Chrome Skeleton: a full mirror-polished chrome endoskeleton standing in an upgrade bay with sparks falling, silver and cyan accents, neon cyberpunk future style'
  }
})
