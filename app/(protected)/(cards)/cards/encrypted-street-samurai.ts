import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAlly, killerOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'encrypted-street-samurai',
  type: 'ally',
  name: 'Encrypted Street Samurai',
  text: 'When it dies: deal 4 damage to the ally that killed it.',
  flavor: 'His honor has a password.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'enforcer',
  attack: 5,
  health: 6,
  onDeath(ctx, unit) {
    const killer = killerOf(unit)
    const found = killer?.uid != null ? ctx.engine.findUnit(killer.uid) : null

    if (found) {
      damageAlly(ctx, found.unit, 4)
    }
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Encrypted Street Samurai: a petite middle-aged man with light brown skin, acid green hair spiky, a braided beard and a jeweled brow piercing, dressed in a sleeveless kevlar vest with chrome pauldrons, drawing a glowing katana, with calm focus, teal accents, neon cyberpunk future style'
  }
})
