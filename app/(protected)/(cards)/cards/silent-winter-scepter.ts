import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freezeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'silent-winter-scepter',
  type: 'weapon',
  subtype: 'orb',
  name: 'Silent Winter Scepter',
  text: "When any ally enters, yours or the rival's: it is frozen for 2 phases.",
  flavor: 'In its presence, nothing moves.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'epic',
  price: 1100,
  cost: 5,
  element: 'ice',
  attack: 2,
  durability: 5,
  onAnyAllyEnter(ctx, ally) {
    freezeAlly(ctx, ally, 2)
  },
  ai: { value: 5, tags: ['control'] },
  art: {
    subject:
      'Silent Winter Scepter: a crystal scepter topped with a frozen orb trapping a snowflake, frost spreading from its base, pale blue accents, medieval magic order style'
  }
})
