import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'riveted-blessing',
  type: 'attachment',
  subtype: 'charm',
  name: 'Riveted Blessing',
  text: 'Attach to an ally of yours: it gains +1 attack and +2 health for each artifact of yours.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const count = artifactCount(ctx)

    buffAt(ctx, ctx.targets[0], count, 2 * count)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Riveted Blessing: an enchanted blessing made of gilded marble, stuck in the sand, bursting toward the viewer, violet accents, steampunk steam era style'
  }
})
