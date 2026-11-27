import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lance-of-mana',
  type: 'ability',
  subtype: 'spell',
  name: 'Lance of Mana',
  text: 'Deal 9 arcane damage to a frozen enemy ally, or 3 to one that is not.',
  flavor: 'Raw magic, thrown like a spear.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  element: 'arcane',
  price: 420,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      damage(ctx, ctx.targets[0], (unit.frozenUntilPhase ?? 0) >= ctx.engine.state.phase ? 9 : 3, 'arcane')
    }
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Lance of Mana: a long lance of pure energy piercing the air, circled by glowing violet runes, over a desert of red dunes, bursting toward the viewer, cobalt blue accents, mage style'
  }
})
