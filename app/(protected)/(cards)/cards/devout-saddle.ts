import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devout-saddle',
  type: 'attachment',
  subtype: 'mount',
  name: 'Devout Saddle',
  text: 'Attach to an ally of yours: it gains +1 attack and +3 health. When that ally dies: summon a Raptor Hatchling.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  keywords: ['lifesteal'],
  attack: 1,
  health: 3,
  targets: ['friendlyAlly'],
  onHostDeath(ctx) {
    summonCard(ctx, ctx.owner, 'raptor-hatchling')
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Devout Saddle: an enchanted saddle made of dark yew wood and brass fittings, in a beam of light from above, centered and seen from slightly below, ivory accents, mystic healer style'
  }
})
