import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'plate-of-rage',
  type: 'armor',
  subtype: 'plate',
  name: 'Plate of Rage',
  text: 'At the start of each phase: if your hero has a weapon, deal 1 damage to the enemy hero.',
  flavor: 'Anger is the best rivet.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 300,
  cost: 1,
  armor: 1,
  durability: 4,
  onPhaseStart(ctx) {
    if (ctx.engine.player(ctx.owner).hero.weapon) {
      damageEnemyHero(ctx, 1)
    }
  },
  ai: { value: 2 },
  art: {
    subject:
      'Plate of Rage: a single plate made of rough stone and sinew, stuck in the sand, diagonal dynamic composition, lime green accents, warrior style'
  }
})
