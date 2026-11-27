import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freezeAlly, host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'relentless-rune',
  type: 'attachment',
  subtype: 'rune',
  name: 'Relentless Rune',
  text: 'Attach to an enemy ally: at the start of each phase, freeze it.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  price: 50,
  cost: 4,
  targets: ['enemyAlly'],
  onPhaseStart(ctx) {
    const found = host(ctx)

    if (found) {
      freezeAlly(ctx, found.unit)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Relentless Rune: an enchanted rune made of crystal and silver filigree, in a beam of light from above, dramatic backlight, ivory accents, warrior style'
  }
})
