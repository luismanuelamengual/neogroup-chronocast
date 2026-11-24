import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wind-up-tin-sentry',
  type: 'ally',
  name: 'Wind-Up Tin Sentry',
  text: 'When it enters: draw the first Automaton of your deck.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  resist: ['acid'],
  weak: ['lightning'],
  price: 630,
  cost: 4,
  tribe: 'automaton',
  keywords: ['shield'],
  attack: 6,
  health: 7,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'automaton')
  },
  ai: { value: 5, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'Wind-Up Tin Sentry: a sentry built of polished brass with ruby lenses, with tank treads, skidding into position, steampunk steam era style'
  }
})
