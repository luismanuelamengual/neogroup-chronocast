import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt, mindControl } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'neural-hijack',
  type: 'ability',
  subtype: 'program',
  name: 'Neural Hijack',
  text: 'An enemy ally attacks its own hero, and then it is destroyed.',
  flavor: 'Your soldier. My commands.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'epic',
  price: 1100,
  cost: 5,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const target = ctx.targets[0]

    if (mindControl(ctx, target, { player: target.player, slot: 'hero' })) {
      destroyAt(ctx, target)
    }
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'Neural Hijack: a glowing neural jack plugging into the back of a soldier helmet, lines of pink code streaming out, close-up filling the frame, hot pink accents, neon cyberpunk future style'
  }
})
