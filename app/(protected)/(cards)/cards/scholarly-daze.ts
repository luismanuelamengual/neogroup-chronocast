import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAttachedAt, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scholarly-daze',
  type: 'ability',
  subtype: 'program',
  name: 'Scholarly Daze',
  text: 'Destroy an enemy attachment, weapon or armor; if it was on an ally, stun that ally. Fast.',
  flavor: 'A lecture so dense it stuns.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAttachment'],
  onPlay(ctx) {
    const target = ctx.targets[0]

    if (target && destroyAttachedAt(ctx, target) && target.slot !== 'hero') {
      stunAt(ctx, { player: target.player, slot: target.slot })
    }
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Scholarly Daze: spinning stars and swirls circling a dented helmet, in a snowy pass, framed by drifting embers, turquoise accents, mage style'
  }
})
