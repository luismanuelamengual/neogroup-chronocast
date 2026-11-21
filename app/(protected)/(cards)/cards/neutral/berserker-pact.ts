import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { host, setHealth } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'berserker-pact',
  type: 'attachment',
  name: 'Berserker Pact',
  text: 'Attach to an ally of yours: its health becomes 1 and it has +12 attack.',
  flavor: 'All in. Nothing held back.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 200,
  cost: 2,
  targets: ['friendlyAlly'],
  attack: 12,
  onPlay(ctx) {
    const found = host(ctx)

    if (found) {
      setHealth(ctx, found.unit, 1)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a frenzied warrior with glowing red eyes and blood-red runes, a broken chain around the neck'
  }
})
