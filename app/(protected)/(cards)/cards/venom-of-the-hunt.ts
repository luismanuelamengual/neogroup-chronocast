import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'venom-of-the-hunt',
  type: 'ability',
  subtype: 'ritual',
  name: 'Venom of the Hunt',
  text: 'Poison an enemy ally (3).',
  flavor: 'One drop for the prey, two for the proud.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    poison(ctx, ctx.targets[0], 3)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Venom of the Hunt: fangs dripping thick glowing venom, over burning grassland, dramatic backlight, violet accents, hunter style'
  }
})
