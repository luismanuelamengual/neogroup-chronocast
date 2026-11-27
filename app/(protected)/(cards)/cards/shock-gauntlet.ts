import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shock-gauntlet',
  type: 'attachment',
  subtype: 'implant',
  name: 'Shock Gauntlet',
  text: 'Attach to an ally of yours: it gains +2 attack. Each time it attacks, deal 1 lightning damage to a random enemy ally.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  attack: 2,
  targets: ['friendlyAlly'],
  onHostAttack(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 1, 'lightning')
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Shock Gauntlet: a robotic forearm with crackling electric coils along the knuckles, clenched into a fist, electric blue accents, neon cyberpunk future style'
  }
})
