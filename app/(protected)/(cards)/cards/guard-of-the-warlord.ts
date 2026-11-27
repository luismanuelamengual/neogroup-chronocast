import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { boostWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'guard-of-the-warlord',
  type: 'ability',
  subtype: 'gadget',
  name: 'Guard of the Warlord',
  text: 'Your weapon gains +2 attack and +2 durability.',
  flavor: "No one touches the warlord's people.",
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    boostWeapon(ctx, ctx.owner, 2, 2)
  },
  ai: { value: 3, tags: ['repair', 'draw'] },
  art: {
    subject:
      'Guard of the Warlord: a towering tower shield standing alone, over rooftops at night, centered and seen from slightly below, violet accents, warrior style'
  }
})
