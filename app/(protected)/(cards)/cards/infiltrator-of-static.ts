import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, self, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'infiltrator-of-static',
  type: 'ally',
  name: 'Infiltrator of Static',
  text: 'When it attacks an ally that has an attachment: it gains +4 attack this phase.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['dawn'] },
  rarity: 'uncommon',
  element: 'lightning',
  price: 200,
  cost: 5,
  tribe: 'netrunner',
  keywords: ['stealth'],
  attack: 5,
  health: 10,
  onAttack(ctx, target) {
    const unit = self(ctx)

    if (unit && unitAt(ctx, target)?.attachments?.length) {
      buffThisPhase(ctx, unit, 4)
    }
  },
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject:
      'Infiltrator of Static: a barrel-chested young man with tan skin, chestnut hair long and straight, mutton chops and a dusting of freckles, wearing chunky headphones, dressed in a poncho of fiber-optic threads, slipping through a glowing doorway, with a haunted stare, lime green accents, neon cyberpunk future style'
  }
})
