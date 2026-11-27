import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damage, freeze, isSpell, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'malachar-the-unmade',
  type: 'hero',
  name: 'Malachar the Unmade',
  text: 'Unmaking Frost (6), a spell: freeze every enemy ally. When you play a spell, deal 1 shadow damage to the enemy hero.',
  flavor: 'He unmade himself to see what lies beyond time.',
  faction: 'arcane',
  side: 'eclipse',
  restriction: { heroes: ['malachar-the-unmade'] },
  rarity: 'legendary',
  element: 'shadow',
  cost: 0,
  health: 55,
  ability: {
    name: 'Unmaking Frost',
    text: 'A spell: freeze every enemy ally.',
    cost: 6,
    spell: true,
    ai: { tags: ['removal'] },
    activate(ctx) {
      for (const unit of alliesOf(ctx, ctx.opponent)) {
        const ref = slotOf(ctx, unit)

        if (ref) {
          freeze(ctx, ref)
        }
      }
    }
  },
  onOwnerPlay(ctx, card) {
    if (isSpell(card)) {
      damage(ctx, { player: ctx.opponent, slot: 'hero' }, 1)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a dark sorcerer whose body unravels into glowing violet runes and silver starlight sparks, a hollow crown of floating arcane sigils above his head, in a ruined star-lit observatory'
  }
})
