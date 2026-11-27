import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'dormant-sentinel-awakened',
  type: 'ally',
  name: 'Awakened Sentinel',
  text: 'When it dies: it comes back to your support slots as a Dormant Sentinel.',
  flavor: 'It was only resting.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'epic',
  token: true,
  cost: 4,
  tribe: 'automaton',
  attack: 6,
  health: 10,
  onDeath(ctx) {
    const side = ctx.engine.player(ctx.owner)

    if (ctx.engine.freeSupport(ctx.owner) > 0) {
      side.artifacts.push({ uid: ctx.engine.newUid(), cardId: 'dormant-sentinel' })
      ctx.engine.emit({ type: 'artifact', player: ctx.owner, cardId: 'dormant-sentinel' })
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      'Awakened Sentinel: a towering clockwork knight rising to its feet with steam bursting from its joints and a glowing chest gear, full body, bronze accents, steampunk steam era style'
  }
})
