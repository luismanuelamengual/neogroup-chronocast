import { DRAW_PER_PHASE } from '@/app/(protected)/(engine)/data/rules'
import { PLAYER_IDS } from '@/app/(protected)/(engine)/models/PlayerId'
import { MatchEngine } from '@/app/(protected)/(engine)/utils/engine'

/**
 * Starts the next phase: draws (not in the first one), refills the Chronos,
 * readies the hero and the allies and runs the "at the start of the phase"
 * logic. The match may end here (fatigue, a location's damage).
 */
export function startPhase(engine: MatchEngine): void {
  const state = engine.state

  state.phase++
  state.step = -1
  engine.emit({ type: 'phaseStart', phase: state.phase })

  for (const id of PLAYER_IDS) {
    const player = engine.player(id)

    if (state.phase > 1) {
      engine.draw(id, DRAW_PER_PHASE)
    }

    player.chronos = player.chronosCapacity
    player.sacrificesThisPhase = 0
    player.hero.attackedThisPhase = false
    player.hero.abilityUsedThisPhase = false

    for (const unit of engine.allies(id)) {
      unit.attacksThisPhase = 0
      unit.abilityUsedThisPhase = false
      unit.tempAttack = 0
    }
  }

  for (const id of PLAYER_IDS) {
    engine.dispatch(id, 'onPhaseStart')
  }

  engine.flush()

  if (!engine.checkVictory()) {
    state.status = 'planning'
  }
}
