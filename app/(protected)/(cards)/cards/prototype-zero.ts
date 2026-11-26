import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'prototype-zero',
  type: 'ally',
  reward: true,
  name: 'Prototype Zero',
  text: 'When it enters: summon 2 Cog Drones.',
  flavor: 'The first machine Omnigear built. The only one it kept.',
  faction: 'clockwork',
  restriction: { heroes: ['omnigear-prime'] },
  rarity: 'legendary',
  resist: ['acid'],
  weak: ['lightning'],
  cost: 6,
  tribe: 'automaton',
  keywords: ['guardian', 'unique'],
  attack: 5,
  health: 12,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'cog-drone')
    summonCard(ctx, ctx.owner, 'cog-drone')
  },
  ai: { value: 6, tags: ['summon'] },
  art: {
    subject:
      'an old battered prototype robot of riveted iron with a single glowing eye, two tiny cog drones orbiting it, in a smoky foundry'
  }
})
