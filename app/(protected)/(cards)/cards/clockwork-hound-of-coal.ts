import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekType } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clockwork-hound-of-coal',
  type: 'ally',
  name: 'Clockwork Hound of Coal',
  text: 'When it dies: draw the first artifact of your deck.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['eclipse'] },
  rarity: 'common',
  resist: ['acid'],
  weak: ['lightning'],
  price: 50,
  cost: 2,
  tribe: 'automaton',
  keywords: ['shield'],
  attack: 1,
  health: 7,
  onDeath(ctx) {
    seekType(ctx, ctx.owner, 'artifact')
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject:
      'Clockwork Hound of Coal: a hound built of gunmetal with orange hazard stripes, with segmented spider legs, standing guard, steampunk steam era style'
  }
})
