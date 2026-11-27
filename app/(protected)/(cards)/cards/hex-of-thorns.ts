import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freezeAlly, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-thorns',
  type: 'ability',
  subtype: 'spell',
  name: 'Hex of Thorns',
  text: 'Freeze a random enemy ally.',
  flavor: 'Every step costs a little blood.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  price: 40,
  cost: 0,
  onPlay(ctx) {
    const unit = randomAlly(ctx, ctx.opponent)

    if (unit) {
      freezeAlly(ctx, unit)
    }
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Hex of Thorns: a glowing hex sigil burning in the air, against a starry sky, dramatic backlight, rose pink accents, hunter style'
  }
})
