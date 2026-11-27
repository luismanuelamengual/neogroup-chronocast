import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'midnight-insignia',
  type: 'attachment',
  subtype: 'implant',
  name: 'Midnight Insignia',
  text: 'Attach to an ally of yours: it gains +1 attack and Quick. At the start of each phase, it gains +1 attack and +1 health.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  keywords: ['quick'],
  attack: 1,
  targets: ['friendlyAlly'],
  onPhaseStart(ctx) {
    const found = host(ctx)

    if (found) {
      buff(ctx, found.unit, 1, 1)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Midnight Insignia: an enchanted insignia made of carved obsidian, on cracked stone tiles, framed by drifting embers, emerald accents, neon cyberpunk future style'
  }
})
