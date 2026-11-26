import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'tower-apprentice',
  type: 'ally',
  name: 'Tower Apprentice',
  text: 'Spell power +1 (your spells deal 1 more damage).',
  flavor: 'Reads every book twice. Burns half of them.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  tribe: 'magus',
  attack: 2,
  health: 3,
  spellPower: 1,
  ai: { value: 2, tags: ['spellPower'] },
  art: {
    subject:
      'Tower Apprentice: a young apprentice wizard in an oversized blue robe juggling three glowing spell orbs, stacks of books around, full body, cobalt blue accents, medieval magic order style'
  }
})
