import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'xulthars-void-spawn',
  type: 'ally',
  name: "Xulthar's Void Spawn",
  text: 'When another Horror of yours enters: your hero heals 2. When it dies: deal 4 shadow damage to the enemy hero.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'legendary',
  element: 'shadow',
  resist: ['shadow'],
  weak: ['sonic'],
  price: 2320,
  cost: 5,
  tribe: 'horror',
  keywords: ['poison', 'unique'],
  attack: 6,
  health: 11,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'horror')) {
      healHero(ctx, 2)
    }
  },
  onDeath(ctx) {
    damageEnemyHero(ctx, 4)
  },
  ai: { value: 7, tags: ['aggro', 'heal'] },
  art: {
    subject:
      "Xulthar's Void Spawn: a spawn with oily black flesh with ultraviolet eyes and a mouth full of tentacles, leaping forward, ivory accents, dark end-of-time void style"
  }
})
