import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, damageRandomAlly, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'morgraths-satyr',
  type: 'ally',
  name: "Morgrath's Satyr",
  text: 'When it enters: it gains +1 attack and +1 health for each other Fae of yours. When it dies: deal 6 shadow damage to a random enemy ally.',
  faction: 'void',
  restriction: { heroes: ['morgrath-lich-abbot'] },
  rarity: 'legendary',
  element: 'shadow',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 2320,
  cost: 5,
  tribe: 'fae',
  keywords: ['flying', 'unique'],
  attack: 6,
  health: 8,
  onEnter(ctx) {
    const count = tribeAllies(ctx, ctx.owner, 'fae', true).length

    buffSelf(ctx, 1 * count, 1 * count)
  },
  onDeath(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 6)
  },
  ai: { value: 7, tags: ['buff', 'removal', 'tribe'] },
  art: {
    subject:
      "Morgrath's Satyr: a satyr with bark-brown skin with leafy hair and moth wings, with withered moth wings, rearing up among glowing green grave mist, sickly green accents, dark end-of-time void style"
  }
})
