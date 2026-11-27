import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, hasPanoply } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'faithful-amulet',
  type: 'attachment',
  subtype: 'charm',
  name: 'Faithful Amulet',
  text: 'Attach to an ally of yours: it gains +2 attack, and +4 health with Panoply.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  attack: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    if (hasPanoply(ctx)) {
      buffAt(ctx, ctx.targets[0], 0, 4)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Faithful Amulet: an enchanted amulet made of ivory and jade, on a mossy rock, close-up filling the frame, violet accents, ancient bronze-age empire style'
  }
})
