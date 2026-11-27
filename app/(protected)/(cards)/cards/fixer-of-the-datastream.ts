import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAttachedAt, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'fixer-of-the-datastream',
  type: 'ally',
  name: 'Fixer of the Datastream',
  text: 'When it attacks an ally: first destroy every card attached to it.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'uncommon',
  element: 'sonic',
  price: 200,
  cost: 5,
  tribe: 'enforcer',
  keywords: ['stealth'],
  attack: 5,
  health: 10,
  onAttack(ctx, target) {
    for (const attachment of [...(unitAt(ctx, target)?.attachments ?? [])]) {
      destroyAttachedAt(ctx, { ...target, attached: attachment.uid })
    }
  },
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject:
      'Fixer of the Datastream: a muscular elderly man with freckled fair skin, snow-white hair in a single long braid, a thin mustache and sharp cheekbones, wearing a street hood, dressed in a leather duster with LED fringe, holding a strange relic, standing tall with arms crossed, with a sly grin, emerald accents, neon cyberpunk future style'
  }
})
