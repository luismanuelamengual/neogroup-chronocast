import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, repairArmor, repairWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'guard-of-the-warlord',
  type: 'ability',
  name: 'Guard of the Warlord',
  text: 'Your weapon and armor gain +2 durability each. Draw a card.',
  flavor: "No one touches the warlord's people.",
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    repairWeapon(ctx, ctx.owner, 2)
    repairArmor(ctx, ctx.owner, 2)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['repair', 'draw'] },
  art: {
    subject:
      'Guard of the Warlord: a towering tower shield standing alone, over rooftops at night, centered and seen from slightly below, violet accents, warrior style'
  }
})
