import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dire-wolf-of-amber',
  type: 'ally',
  name: 'Dire Wolf of Amber',
  text: 'When it dies: your Beasts gain +1 attack and +1 health.',
  flavor: 'Its fur glows like resin in the sun.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  tribe: 'beast',
  attack: 3,
  health: 6,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'beast', 1, 1)
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Dire Wolf of Amber: a wolf with snow-white fur and tribal paint, baring its teeth, magenta accents, prehistoric jungle era style'
  }
})
