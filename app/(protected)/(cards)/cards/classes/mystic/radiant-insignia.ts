import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'radiant-insignia',
  type: 'attachment',
  name: 'Radiant Insignia',
  text: 'Attach to an ally of yours: it gains +2 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 40,
  cost: 1,
  keywords: ['lifesteal'],
  health: 2,
  targets: ['friendlyAlly'],
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject: 'Radiant Insignia: a glowing magical radiant charm, mystic healer style'
  }
})
