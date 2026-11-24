import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze, randomAlly, slotOf, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pilgrim-of-ice',
  type: 'ally',
  name: 'Pilgrim of Ice',
  text: 'When it enters: freeze a random enemy ally. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  element: 'ice',
  price: 570,
  cost: 3,
  attack: 4,
  health: 9,
  ability: {
    name: 'Daze',
    text: 'Stun an enemy ally.',
    cost: 2,
    resource: 'energy',
    targets: ['enemyAlly'],
    activate(ctx) {
      stunAt(ctx, ctx.targets[0])
    }
  },
  onEnter(ctx) {
    const victim = randomAlly(ctx, ctx.opponent)
    const ref = victim && slotOf(ctx, victim)

    if (ref) {
      freeze(ctx, ref)
    }
  },
  ai: { value: 4, tags: ['ability', 'energy', 'removal'] },
  art: {
    subject:
      'Pilgrim of Ice: a barrel-chested adult elf man with warm beige skin, snow-white hair in a single long braid and a gap-toothed grin, wearing a straw hat, dressed in a colonial explorer jacket covered in pockets, holding prayer beads and a staff, with a sly grin, amber accents, mage style'
  }
})
