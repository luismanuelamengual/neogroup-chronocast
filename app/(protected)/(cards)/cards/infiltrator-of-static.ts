import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'infiltrator-of-static',
  type: 'ally',
  name: 'Infiltrator of Static',
  text: 'When it attacks: deal 3 lightning damage to the enemy hero.',
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
  onAttack(ctx) {
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject:
      'Infiltrator of Static: a barrel-chested young man with tan skin, chestnut hair long and straight, mutton chops and a dusting of freckles, wearing chunky headphones, dressed in a poncho of fiber-optic threads, slipping through a glowing doorway, with a haunted stare, lime green accents, neon cyberpunk future style'
  }
})
