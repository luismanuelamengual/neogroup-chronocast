import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isSpell } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'circlet-of-mana',
  type: 'armor',
  subtype: 'circlet',
  name: 'Circlet of Mana',
  text: 'Spell power +1. Channel: when you cast a spell, your hero heals 2.',
  flavor: 'It hums when spells are near.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  price: 70,
  cost: 5,
  armor: 4,
  durability: 4,
  onOwnerPlay(ctx, card) {
    if (isSpell(card)) {
      healHero(ctx, 2)
    }
  },
  spellPower: 1,
  ai: { value: 5 },
  art: {
    subject:
      'Circlet of Mana: a single circlet made of dark yew wood and brass fittings, on a workbench with tools, close-up filling the frame, amber accents, mage style'
  }
})
