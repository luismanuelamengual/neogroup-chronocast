import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scavenger-of-borrowed-hours',
  type: 'ally',
  name: 'Scavenger of Borrowed Hours',
  text: 'When it enters: destroy the priciest enemy artifact. When it dies: draw a card.',
  faction: 'neutral',
  restriction: {},
  rarity: 'exotic',
  element: 'time',
  price: 10800,
  cost: 2,
  tribe: 'drifter',
  keywords: ['flying', 'unique'],
  attack: 2,
  health: 8,
  onEnter(ctx) {
    destroyArtifact(ctx, ctx.opponent)
  },
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['antiGear', 'draw'] },
  art: {
    subject:
      'Scavenger of Borrowed Hours: a broad-shouldered adult lizardfolk woman with light brown scales and glowing tattoos on the cheeks, wearing a wide-brimmed hat, dressed in a long ferryman cloak with tide-worn hems, carrying a sack bursting with salvaged relics, with a serene smile, gold accents, time rift wanderer style'
  }
})
