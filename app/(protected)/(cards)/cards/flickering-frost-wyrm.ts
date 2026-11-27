import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freezeAlly, killerOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-frost-wyrm',
  type: 'ally',
  name: 'Flickering Frost Wyrm',
  text: 'When it dies: freeze the enemy ally that killed it for 2 phases.',
  flavor: 'It blinks between winters.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'ice',
  resist: ['fire'],
  weak: ['ice'],
  price: 70,
  cost: 5,
  tribe: 'drake',
  keywords: ['flying'],
  attack: 7,
  health: 9,
  onDeath(ctx, unit) {
    const killer = killerOf(unit)
    const found = killer?.uid != null ? ctx.engine.findUnit(killer.uid) : null

    if (found) {
      freezeAlly(ctx, found.unit, 2)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      'Flickering Frost Wyrm: a wyrm with obsidian scales with ember cracks and smoke curling from its nostrils, pawing the ground, indigo accents, mage style'
  }
})
