import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scavenger-of-the-crossroads',
  type: 'ally',
  name: 'Scavenger of the Crossroads',
  text: 'When it enters: you gain 1 Chronos this phase. When it dies: draw a card.',
  faction: 'neutral',
  restriction: {},
  rarity: 'epic',
  price: 1880,
  cost: 4,
  tribe: 'drifter',
  keywords: ['ranged'],
  attack: 5,
  health: 9,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['draw', 'ramp'] },
  art: {
    subject:
      'Scavenger of the Crossroads: a barrel-chested middle-aged elf man with olive skin, sandy hair in short curls, a forked beard and a scar across one eye, wearing a tricorn hat, dressed in a Victorian waistcoat with a samurai sash, carrying a sack bursting with salvaged relics, with a booming laugh, amber accents, time rift wanderer style'
  }
})
