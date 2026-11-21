import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'storm-caller',
  type: 'ally',
  name: 'Storm Caller',
  text: '',
  flavor: 'The clouds answer him before he finishes the word.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 190,
  cost: 5,
  attack: 14,
  health: 28,
  keywords: ['ranged'],
  ability: {
    name: 'Chain Lightning',
    text: 'Deal 4 damage to every enemy ally.',
    cost: 3,
    activate(ctx) {
      damageAllAllies(ctx, ctx.opponent, 4)
    }
  },
  ai: { value: 5, tags: ['ability'] },
  art: {
    subject: 'a bearded wizard on a cliff raising a staff into a swirling storm, lightning striking around him'
  }
})
