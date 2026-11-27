import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, spellPowerOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'enchantress-of-the-tower',
  type: 'ally',
  name: 'Enchantress of the Tower',
  text: 'When it enters: if you have spell power, draw a card.',
  flavor: 'Her songs bind stone and starlight.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'common',
  resist: ['arcane'],
  price: 50,
  cost: 2,
  tribe: 'magus',
  keywords: ['shield'],
  attack: 3,
  health: 3,
  onEnter(ctx) {
    if (spellPowerOf(ctx, ctx.owner) > 0) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Enchantress of the Tower: a hunched young dwarf woman with dark ebony skin, sandy hair in a tall mohawk and sharp cheekbones, wearing a pointed hat, dressed in a crimson mantle with ember-edged sleeves, weaving threads of light between the fingers, with a mischievous wink, violet accents, medieval magic order style'
  }
})
