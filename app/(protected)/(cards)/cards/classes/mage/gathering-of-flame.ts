import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gathering-of-flame',
  type: 'ability',
  name: 'Gathering of Flame',
  text: 'Summon a Rift Spark.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'legendary',
  price: 4400,
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
