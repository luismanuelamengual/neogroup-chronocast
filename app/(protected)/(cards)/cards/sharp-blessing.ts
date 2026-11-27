import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sharp-blessing',
  type: 'attachment',
  subtype: 'charm',
  name: 'Sharp Blessing',
  text: 'Attach to an ally of yours: it gains +1 attack and +4 health. When that ally dies: your hero heals 4.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 55,
  cost: 3,
  keywords: ['ranged'],
  attack: 1,
  health: 4,
  targets: ['friendlyAlly'],
  onHostDeath(ctx) {
    healHero(ctx, 4)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Sharp Blessing: an enchanted blessing made of crystal and silver filigree, on a fur rug, centered and seen from slightly below, emerald accents, hunter style'
  }
})
