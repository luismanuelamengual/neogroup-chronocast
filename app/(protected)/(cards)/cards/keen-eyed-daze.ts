import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze, returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'keen-eyed-daze',
  type: 'ability',
  subtype: 'spell',
  name: 'Keen-Eyed Daze',
  text: "Return an enemy ally to its owner's hand and freeze another one. Fast.",
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'fast',
  targets: ['enemyAlly', 'enemyAlly'],
  onPlay(ctx) {
    const [bounced, frozen] = ctx.targets

    returnAt(ctx, bounced)

    if (frozen) {
      freeze(ctx, frozen)
    }
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Keen-Eyed Daze: spinning stars and swirls circling a dented helmet, in a misty valley, bursting toward the viewer, scarlet accents, hunter style'
  }
})
