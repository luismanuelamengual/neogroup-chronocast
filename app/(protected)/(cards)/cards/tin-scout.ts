import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tin-scout',
  type: 'ally',
  name: 'Tin Scout',
  text: 'Its ability is paid with energy (⚡).',
  flavor: 'It finds its brothers by the ticking.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 60,
  cost: 3,
  tribe: 'automaton',
  keywords: ['charge'],
  attack: 2,
  health: 8,
  ability: {
    name: 'Recruit',
    text: 'Draw the first Automaton of your deck.',
    cost: 2,
    resource: 'energy',
    ai: { tags: ['draw'] },
    activate(ctx) {
      seekTribe(ctx, ctx.owner, 'automaton')
    }
  },
  ai: { value: 3, tags: ['ability', 'energy', 'draw'] },
  art: {
    subject:
      'Tin Scout: a small tin robot scout with a telescope eye and clockwork legs running across a rooftop, full body, silver accents, steampunk steam era style'
  }
})
