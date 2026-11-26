import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, repairArmor, repairWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lost-stance',
  type: 'ability',
  subtype: 'gadget',
  name: 'Lost Stance',
  text: 'Your weapon and armor gain +3 durability each. Draw a card.',
  flavor: 'Out of time, never out of balance.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'legendary',
  price: 2160,
  cost: 3,
  onPlay(ctx) {
    repairWeapon(ctx, ctx.owner, 3)
    repairArmor(ctx, ctx.owner, 3)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['repair', 'draw'] },
  art: {
    subject:
      'Lost Stance: a round shield and crossed spear planted firmly on stone, over a desert of red dunes, dramatic backlight, violet accents, steampunk steam era style'
  }
})
