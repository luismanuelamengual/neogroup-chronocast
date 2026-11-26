import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kades-courier',
  type: 'ally',
  name: "Kade's Courier",
  text: 'When it enters: deal 1 damage to the enemy hero for each Enforcer of yours. When it attacks: deal 3 damage to the enemy hero.',
  faction: 'neon',
  restriction: { heroes: ['overseer-kade'] },
  rarity: 'legendary',
  price: 2320,
  cost: 5,
  tribe: 'enforcer',
  keywords: ['quick', 'unique'],
  attack: 6,
  health: 11,
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'enforcer').length)
  },
  onAttack(ctx) {
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 7, tags: ['aggro', 'tribe'] },
  art: {
    subject:
      "Kade's Courier: a broad-shouldered young woman with ruddy skin, electric teal hair in an undercut and a scar across one eye, wearing a fedora, dressed in a sleeveless kevlar vest with chrome pauldrons, clutching a sealed glowing letter, with wide-eyed wonder, violet accents, neon cyberpunk future style"
  }
})
