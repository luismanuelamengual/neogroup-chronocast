import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'midnight-insignia',
  type: 'attachment',
  name: 'Midnight Insignia',
  text: 'Attach to an ally of yours: it gains +1 attack and +3 health.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 50,
  cost: 2,
  keywords: ['quick'],
  attack: 1,
  health: 3,
  targets: ['friendlyAlly'],
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Midnight Insignia: an enchanted insignia made of carved obsidian, on cracked stone tiles, framed by drifting embers, emerald accents, neon cyberpunk future style'
  }
})
