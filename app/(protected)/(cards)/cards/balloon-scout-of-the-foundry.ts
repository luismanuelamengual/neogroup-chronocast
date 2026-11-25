import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'balloon-scout-of-the-foundry',
  type: 'ally',
  name: 'Balloon Scout of the Foundry',
  text: 'When it enters: your hero heals 7. Its ability is paid with energy (⚡).',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  weak: ['wind'],
  price: 750,
  cost: 6,
  tribe: 'skyship',
  keywords: ['guardian'],
  attack: 7,
  health: 14,
  ability: {
    name: 'Strike',
    text: 'Deal 8 damage to an enemy slot.',
    cost: 3,
    resource: 'energy',
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 8)
    }
  },
  onEnter(ctx) {
    healHero(ctx, 7)
  },
  ai: { value: 7, tags: ['ability', 'defense', 'energy'] },
  art: {
    subject:
      'Balloon Scout of the Foundry: a scout built of black iron with glowing coals, with a cockpit with a tiny pilot, hovering above the ground, steampunk steam era style'
  }
})
