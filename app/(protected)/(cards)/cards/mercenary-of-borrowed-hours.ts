import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mercenary-of-borrowed-hours',
  type: 'ally',
  name: 'Mercenary of Borrowed Hours',
  text: 'When it enters: draw a card. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  element: 'time',
  price: 630,
  cost: 4,
  tribe: 'drifter',
  keywords: ['shield'],
  attack: 5,
  health: 9,
  ability: {
    name: 'Strike',
    text: 'Deal 6 time damage to an enemy slot.',
    cost: 3,
    resource: 'energy',
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 6)
    }
  },
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['ability', 'draw', 'energy'] },
  art: {
    subject:
      'Mercenary of Borrowed Hours: a broad-shouldered adult halfling woman with pale skin, honey blond hair in a wild mane and round spectacles, wearing a fur hat, dressed in desert robes with an aviator scarf, resting a notched greatsword on the shoulder, with calm focus, teal accents, time rift wanderer style'
  }
})
