import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, boostWeapon, draw, isPrey } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devout-fury',
  type: 'ability',
  subtype: 'instinct',
  name: 'Devout Fury',
  text: 'Your weapon gains +1 attack. If an enemy ally is your Prey, draw a card.',
  flavor: 'The faithful hit hardest.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 120,
  cost: 0,
  onPlay(ctx) {
    boostWeapon(ctx, ctx.owner, 1, 0)

    if (alliesOf(ctx, ctx.opponent).some((unit) => isPrey(ctx, unit))) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject:
      'Devout Fury: a roaring red storm of rage swirling around a cracked war axe, in a dark forest clearing, dramatic backlight, crimson accents, mystic healer style'
  }
})
