import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spirit-caller',
  type: 'ally',
  name: 'Spirit Caller',
  text: 'Its ability is paid with energy (⚡).',
  flavor: 'The old spirits of the jungle mend what the claws tear.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 6,
  health: 9,
  ability: {
    name: 'Call of the Ancestors',
    text: 'An ally of yours heals 8 and gains +2 attack.',
    cost: 2,
    resource: 'energy',
    targets: ['friendlyAlly'],
    activate(ctx) {
      heal(ctx, ctx.targets[0], 8)
      buffAt(ctx, ctx.targets[0], 2, 0)
    }
  },
  ai: { value: 3, tags: ['ability', 'energy', 'heal'] },
  art: {
    subject: 'a tribal shaman with a bone mask and feathers summoning green spirit animals from a fire'
  }
})
