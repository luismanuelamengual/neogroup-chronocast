import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'empowerment-of-the-warlord',
  type: 'ability',
  subtype: 'instinct',
  name: 'Empowerment of the Warlord',
  text: 'An ally of yours gains +1 attack and +1 health (+3 and +3 if it is a Caveborn).',
  flavor: 'His shout is worth a hundred swords.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 300,
  cost: 1,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      const bonus = isTribe(unit, 'caveborn') ? 3 : 1

      buff(ctx, unit, bonus, bonus)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Empowerment of the Warlord: a floating gem overflowing with radiant energy, in a dark forest clearing, diagonal dynamic composition, cobalt blue accents, warrior style'
  }
})
