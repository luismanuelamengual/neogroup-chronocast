import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ilyra-starweaver',
  type: 'hero',
  name: 'Ilyra Starweaver',
  text: 'Starfall (3): deal 5 arcane damage to 3 different enemy slots. Spell power +1 (your spells deal 1 more damage).',
  flavor: 'She reads the future in the constellations, then rewrites it.',
  faction: 'arcane',
  side: 'dawn',
  restriction: { heroes: ['ilyra-starweaver'] },
  rarity: 'common',
  element: 'arcane',
  cost: 0,
  health: 60,
  spellPower: 1,
  ability: {
    name: 'Starfall',
    text: 'Deal 5 arcane damage to 3 different enemy slots.',
    cost: 3,
    targets: ['enemySlot', 'enemySlot', 'enemySlot'],
    canActivate(ctx) {
      const slots = new Set(ctx.targets.map((target) => `${target.player}:${target.slot}`))

      return slots.size < ctx.targets.length ? 'invalidTarget' : null
    },
    activate(ctx) {
      for (const target of ctx.targets) {
        damage(ctx, target, 5)
      }
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a young elven archmage with silver hair and a deep blue robe embroidered with stars, weaving glowing constellation threads between her hands on a tower balcony at night'
  }
})
