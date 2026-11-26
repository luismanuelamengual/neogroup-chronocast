import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, slotsNextTo } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-dying-star',
  type: 'ability',
  reward: true,
  name: 'The Dying Star',
  text: 'Deal 8 arcane damage to an enemy slot and 3 to the slots next to it.',
  flavor: 'One less.',
  faction: 'arcane',
  restriction: { heroes: ['hollow-astronomer'] },
  rarity: 'legendary',
  element: 'arcane',
  cost: 4,
  keywords: ['unique'],
  targets: ['enemySlot'],
  onPlay(ctx) {
    const target = ctx.targets[0]

    damage(ctx, target, 8)

    for (const slot of slotsNextTo(ctx, target)) {
      damage(ctx, slot, 3)
    }
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'The Dying Star: a collapsing star bursting into a ring of violet fire in deep space, close-up filling the frame, gold accents'
  }
})
