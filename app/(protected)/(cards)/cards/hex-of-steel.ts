import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze, slotsNextTo } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-steel',
  type: 'ability',
  subtype: 'spell',
  name: 'Hex of Steel',
  text: 'Freeze an enemy ally and the allies next to it.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])

    for (const ref of slotsNextTo(ctx, ctx.targets[0])) {
      freeze(ctx, ref)
    }
  },
  ai: { value: 3, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Hex of Steel: a glowing hex sigil burning in the air, circled by glowing violet runes, over burning grassland, close-up filling the frame, lime green accents, warrior style'
  }
})
