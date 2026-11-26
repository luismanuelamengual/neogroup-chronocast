import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gathering-of-lightning',
  type: 'ability',
  subtype: 'spell',
  name: 'Gathering of Lightning',
  text: 'Summon an Arcane Familiar.',
  flavor: 'Every storm starts with a single spark.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'mythic',
  price: 4160,
  cost: 3,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'arcane-familiar')
  },
  ai: { value: 6, tags: ['summon'] },
  art: {
    subject:
      'Gathering of Lightning: many small lights converging into one bright orb, over burning grassland, framed by drifting embers, violet accents, mage style'
  }
})
