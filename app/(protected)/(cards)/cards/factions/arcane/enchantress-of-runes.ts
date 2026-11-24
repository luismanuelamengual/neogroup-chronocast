import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, freeze, randomAlly, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'enchantress-of-runes',
  type: 'ally',
  name: 'Enchantress of Runes',
  text: 'When it enters: freeze a random enemy ally. At the start of each phase: deal 1 arcane damage to the enemy hero.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'epic',
  element: 'arcane',
  resist: ['arcane'],
  price: 1720,
  cost: 3,
  tribe: 'magus',
  keywords: ['flying', 'ranged'],
  attack: 3,
  health: 7,
  onEnter(ctx) {
    const victim = randomAlly(ctx, ctx.opponent)
    const ref = victim && slotOf(ctx, victim)

    if (ref) {
      freeze(ctx, ref)
    }
  },
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 1)
  },
  ai: { value: 4, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Enchantress of Runes: a towering middle-aged elf woman with pale skin, ash brown hair in a topknot and glowing tattoos on the cheeks, dressed in a hooded traveling cloak with silver clasps, weaving threads of light between the fingers, with a sly grin, lime green accents, medieval magic order style'
  }
})
