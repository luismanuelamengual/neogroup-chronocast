import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { boostWeapon, buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nysa-goldbow',
  type: 'hero',
  name: 'Nysa Goldbow',
  text: 'Gilded String (3): your weapon gains +3 attack and +2 durability. When another ally of yours enters, it gains +1 attack.',
  flavor: 'She hunted with the gods once. Now she hunts for herself.',
  faction: 'bronze',
  heroClass: 'hunter',
  side: 'dawn',
  restriction: { heroes: ['nysa-goldbow'] },
  rarity: 'rare',
  element: 'wind',
  cost: 0,
  health: 50,
  ability: {
    name: 'Gilded String',
    text: 'Your weapon gains +3 attack and +2 durability.',
    cost: 3,
    ai: { tags: ['weapon'] },
    canActivate(ctx) {
      return ctx.engine.player(ctx.owner).hero.weapon ? null : 'noWeapon'
    },
    activate(ctx) {
      boostWeapon(ctx, ctx.owner, 3, 2)
    }
  },
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 1, 0)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a Greek huntress with braided golden hair and a white tunic, drawing a golden bow on a marble temple rooftop at sunset'
  }
})
