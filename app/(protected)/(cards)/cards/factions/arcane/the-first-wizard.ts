import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damageRandomAlly, draw, stun } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-first-wizard',
  type: 'ally',
  name: 'The First Wizard',
  text: 'On enter: stun every enemy ally and draw 2 cards. At the start of each phase, deal 6 damage to a random enemy ally.',
  flavor: 'Before him, magic was only a word nobody knew how to say.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'mythic',
  price: 35000,
  cost: 8,
  attack: 26,
  health: 56,
  keywords: ['unique', 'ranged', 'shield'],
  onEnter(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      stun(ctx, unit)
    }

    draw(ctx, ctx.owner, 2)
  },
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 6)
  },
  ai: { value: 11, tags: ['control', 'draw', 'removal', 'defense'] },
  art: {
    subject:
      'a primordial wizard made of pure starlight floating above the first book of magic, galaxies swirling in his robes'
  }
})
