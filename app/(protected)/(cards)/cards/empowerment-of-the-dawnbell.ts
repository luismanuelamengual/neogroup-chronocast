import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'empowerment-of-the-dawnbell',
  type: 'ability',
  subtype: 'instinct',
  name: 'Empowerment of the Dawnbell',
  text: 'An ally of yours gains +1 attack and +1 health for each Beast of yours.',
  flavor: 'The bell rings and strength returns.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const beasts = tribeAllies(ctx, ctx.owner, 'beast').length

    buffAt(ctx, ctx.targets[0], beasts, beasts)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Empowerment of the Dawnbell: a floating gem overflowing with radiant energy, over a stormy battlefield, framed by drifting embers, violet accents, mystic healer style'
  }
})
