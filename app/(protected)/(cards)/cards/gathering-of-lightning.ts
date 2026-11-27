import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freezeAlly, randomAlly, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gathering-of-lightning',
  type: 'ability',
  subtype: 'spell',
  name: 'Gathering of Lightning',
  text: 'Summon 2 Arcane Familiars and freeze a random enemy ally.',
  flavor: 'Every storm starts with a single spark.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'mythic',
  price: 4160,
  cost: 3,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'arcane-familiar')
    summonCard(ctx, ctx.owner, 'arcane-familiar')

    const unit = randomAlly(ctx, ctx.opponent)

    if (unit) {
      freezeAlly(ctx, unit)
    }
  },
  ai: { value: 6, tags: ['summon'] },
  art: {
    subject:
      'Gathering of Lightning: many small lights converging into one bright orb, over burning grassland, framed by drifting embers, violet accents, mage style'
  }
})
