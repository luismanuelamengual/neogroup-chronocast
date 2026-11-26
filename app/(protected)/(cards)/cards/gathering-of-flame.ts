import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gathering-of-flame',
  type: 'ability',
  subtype: 'spell',
  name: 'Gathering of Flame',
  text: 'Summon a Rift Spark.',
  flavor: 'Small sparks, one great fire.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['eclipse'] },
  rarity: 'legendary',
  price: 2080,
  cost: 2,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'rift-spark')
  },
  ai: { value: 4, tags: ['summon'] },
  art: {
    subject:
      'Gathering of Flame: many small lights converging into one bright orb, in a snowy pass, bursting toward the viewer, amber accents, mage style'
  }
})
