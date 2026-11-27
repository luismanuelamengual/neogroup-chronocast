import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gearwright-artisan',
  type: 'ally',
  name: 'Gearwright Artisan',
  text: 'Your artifacts that cost 4 or more cost 2 less. Its ability is paid with energy (⚡).',
  flavor: 'Big machines, small bills.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  tribe: 'inventor',
  attack: 3,
  health: 10,
  artifactDiscount: { minCost: 4, amount: 2 },
  ability: {
    name: 'Commission',
    text: 'Draw the first artifact of your deck that costs 4 or more.',
    cost: 2,
    resource: 'energy',
    ai: { tags: ['draw'] },
    activate(ctx) {
      seek(ctx, ctx.owner, (card) => card.type === 'artifact' && card.cost >= 4)
    }
  },
  ai: { value: 4, tags: ['ability', 'energy', 'draw'] },
  art: {
    subject:
      'Gearwright Artisan: an inventor with brass goggles and a leather apron assembling a giant clockwork engine, full body, copper accents, steampunk steam era style'
  }
})
