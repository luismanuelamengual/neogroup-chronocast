import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isSpell, seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'open-grimoire',
  type: 'ability',
  subtype: 'spell',
  name: 'Open Grimoire',
  text: 'Draw the first 2 spells of your deck.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  onPlay(ctx) {
    seek(ctx, ctx.owner, isSpell)
    seek(ctx, ctx.owner, isSpell)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Open Grimoire: an ancient spellbook floating open on a lectern, pages turning by themselves, glowing glyphs rising off the parchment, close-up, cobalt blue accents, medieval magic order style'
  }
})
