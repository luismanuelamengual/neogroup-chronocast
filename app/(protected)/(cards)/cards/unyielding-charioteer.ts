import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unyielding-charioteer',
  type: 'ally',
  name: 'Unyielding Charioteer',
  text: 'When it enters: draw the first Legionnaire of your deck.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  tribe: 'legionnaire',
  keywords: ['guardian', 'retaliate'],
  attack: 2,
  health: 10,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'legionnaire')
  },
  ai: { value: 3, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'Unyielding Charioteer: a towering adult woman with light brown skin, sandy hair long and straight and a tattooed neck, wearing a crested helmet, dressed in a Greek hoplite panoply with a horsehair crest, cracking a whip from a bronze chariot, with a fierce scowl, gold accents, ancient bronze-age empire style'
  }
})
