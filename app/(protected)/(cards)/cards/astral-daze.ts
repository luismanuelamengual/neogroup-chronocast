import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, freezeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'astral-daze',
  type: 'ability',
  subtype: 'spell',
  name: 'Astral Daze',
  text: 'Freeze every enemy ally that has 5 attack or more.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 200,
  cost: 5,
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      if (ctx.engine.attackOf(unit) >= 5) {
        freezeAlly(ctx, unit)
      }
    }
  },
  ai: { value: 5, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Astral Daze: spinning stars and swirls circling a dented helmet, circled by glowing violet runes, inside a cave of crystals, seen from above, scarlet accents, mage style'
  }
})
