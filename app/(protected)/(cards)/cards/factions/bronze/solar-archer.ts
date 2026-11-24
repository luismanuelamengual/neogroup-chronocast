import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, stunAt, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'solar-archer',
  type: 'ally',
  name: 'Solar Archer',
  text: 'When it enters: it gains +1 attack and +1 health for each other Legionnaire of yours. Its ability is paid with energy (⚡).',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  element: 'light',
  price: 170,
  cost: 3,
  tribe: 'legionnaire',
  keywords: ['shield'],
  attack: 3,
  health: 8,
  ability: {
    name: 'Daze',
    text: 'Stun an enemy ally.',
    cost: 2,
    resource: 'energy',
    targets: ['enemyAlly'],
    activate(ctx) {
      stunAt(ctx, ctx.targets[0])
    }
  },
  onEnter(ctx) {
    const count = tribeAllies(ctx, ctx.owner, 'legionnaire', true).length

    buffSelf(ctx, 1 * count, 1 * count)
  },
  ai: { value: 3, tags: ['ability', 'buff', 'energy', 'tribe'] },
  art: {
    subject:
      'Solar Archer: a barrel-chested middle-aged woman with golden skin, honey blond hair in an afro and a scar across one eye, dressed in a bronze muscle cuirass and red cape, holding a lantern, turning to look over the shoulder, with a confident smirk, magenta accents, ancient bronze-age empire style'
  }
})
