import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'codebreaker-of-neon',
  type: 'ally',
  name: 'Codebreaker of Neon',
  text: 'When it dies: your Netrunners gain +1 attack and +1 health.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['dawn'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  tribe: 'netrunner',
  keywords: ['quick'],
  attack: 5,
  health: 7,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'netrunner', 1, 1)
  },
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Codebreaker of Neon: a towering young android woman with a smooth metal scalp and a bandaged forehead, wearing a VR visor, dressed in a lab coat with VR rig, twisting a cube of glowing code, with a serene smile, magenta accents, neon cyberpunk future style'
  }
})
