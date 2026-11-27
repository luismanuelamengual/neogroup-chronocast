import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-dawn',
  type: 'attachment',
  subtype: 'curse',
  name: 'Hex of Dawn',
  text: 'Attach to an enemy ally: it has -3 attack. When it dies, your hero heals 5.',
  flavor: 'A curse that only works in daylight.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['dawn'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: -3,
  targets: ['enemyAlly'],
  onHostDeath(ctx) {
    healHero(ctx, 5)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Hex of Dawn: an enchanted hex made of rough stone and sinew, half buried in snow, seen from above, magenta accents, dark end-of-time void style'
  }
})
