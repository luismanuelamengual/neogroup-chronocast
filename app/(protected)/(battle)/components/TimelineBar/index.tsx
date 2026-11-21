'use client'

import './index.scss'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { playSfx } from '@/app/(protected)/(art)/utils/sound'
import { ACTION_ICONS } from '@/app/(protected)/(battle)/utils/icons'
import { StepProjection } from '@/app/(protected)/(battle)/utils/projection'
import { ACTIONS_PER_PHASE, PLANNING_SECONDS } from '@/app/(protected)/(engine)/data/rules'
import { FailReason } from '@/app/(protected)/(engine)/models/MatchEvent'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { PlannedAction } from '@/app/(protected)/(engine)/models/PlannedAction'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { MatchEngine } from '@/app/(protected)/(engine)/utils/engine'
import { actionSpeed } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useT } from '@/app/i18n/I18nProvider'

const STEPS = Array.from({ length: ACTIONS_PER_PHASE }, (_, step) => step)

/** The card a "play" or "sacrifice" uses (looked up in the hand or discard pile at the start of the phase), or the ally of an ability. */
function actionCard(state: MatchState, player: PlayerId, action: PlannedAction): string | null {
  // An ally's ability is named after the ally.
  if (action.kind === 'allyAbility') {
    return state.players[player].allies.find((unit) => unit?.uid === action.allyUid)?.cardId ?? null
  }

  if (action.kind !== 'play' && action.kind !== 'sacrifice') {
    return null
  }

  const side = state.players[player]
  const card = [...side.hand, ...side.discard].find((candidate) => candidate.uid === action.cardUid)

  return card?.cardId ?? null
}

function targetLabel(target: SlotRef | undefined): string {
  if (!target) {
    return ''
  }

  return target.slot === 'hero' ? '👑' : `${target.slot + 1}`
}

interface ActionBoxProps {
  action: PlannedAction | null
  state: MatchState
  player: PlayerId
  hidden?: boolean
  projection?: StepProjection
  failure?: FailReason | null
  active?: boolean
  done?: boolean
  onClick?: () => void
}

function ActionBox({ action, state, player, hidden, projection, failure, active, done, onClick }: ActionBoxProps) {
  const t = useT()
  const cardName = useCardName()

  if (hidden) {
    return <span className={classNames('action-box hidden', { filled: !!action })}>🂠</span>
  }

  if (!action || action.kind === 'wait') {
    return (
      <span className={classNames('action-box empty', { active, done })}>
        {projection && <span className="action-box__chronos">⌛{projection.chronos}</span>}
      </span>
    )
  }

  const cardId = actionCard(state, player, action)
  const speed = actionSpeed(new MatchEngine(state), player, action)
  const target =
    action.kind === 'allyAttack' || action.kind === 'heroAttack'
      ? targetLabel(action.target)
      : action.kind === 'move'
        ? `${action.toSlot + 1}`
        : targetLabel(
            action.kind === 'play' || action.kind === 'heroAbility' || action.kind === 'allyAbility'
              ? action.targets?.[0]
              : undefined
          )
  const label = cardId ? cardName(cardId) : t(`battle.actions.${action.kind}`)
  const warning = failure ?? projection?.failure

  return (
    <button
      type="button"
      className={classNames('action-box', `speed-${speed}`, { active, done, failed: !!warning })}
      onClick={onClick}
      title={warning ? t(`battle.fail.${warning}`) : `${label} · ${t(`battle.speeds.${speed}`)}`}
    >
      <span className="action-box__icon">{ACTION_ICONS[action.kind]}</span>
      <span className="action-box__label">
        {action.kind === 'sacrifice' ? t('battle.actions.sacrifice') : label}
        {target && <strong> → {target}</strong>}
      </span>
      {projection && <span className="action-box__chronos">⌛{projection.chronos}</span>}
      {warning && <span className="action-box__fail">✖</span>}
    </button>
  )
}

function Clock({ deadline, running, onExpire }: { deadline: number; running: boolean; onExpire: () => void }) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!running) {
      return
    }

    const timer = setInterval(() => setNow(Date.now()), 250)

    return () => clearInterval(timer)
  }, [running])

  const left = running ? Math.max(0, Math.ceil((deadline - now) / 1000)) : 0

  useEffect(() => {
    if (running && left === 0) {
      onExpire()
    }
  }, [running, left, onExpire])

  useEffect(() => {
    if (running && left > 0 && left <= 10) {
      playSfx('tick')
    }
  }, [running, left])

  const ratio = left / PLANNING_SECONDS

  return (
    <span className={classNames('timeline-clock', { urgent: running && left <= 10, idle: !running })}>
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <circle cx="18" cy="18" r="15.5" className="track" />
        <circle cx="18" cy="18" r="15.5" className="ring" strokeDasharray={`${ratio * 97.4} 97.4`} />
      </svg>
      <span className="timeline-clock__value">{running ? left : '⏳'}</span>
    </span>
  )
}

interface TimelineBarProps {
  state: MatchState
  me: PlayerId
  rival: PlayerId
  actions: PlannedAction[]
  projection: StepProjection[]
  rivalActions: PlannedAction[] | null
  rivalReady: boolean
  /** Who the rival is (the computer, or the rival's name online). */
  rivalLabel: string
  planning: boolean
  /** Online: the timeline was sent, waiting for the rival. */
  waiting?: boolean
  step: number | null
  failures: Record<PlayerId, (FailReason | null)[]>
  deadline: number
  onRemove: (index: number) => void
  onReady: () => void
}

/**
 * The timelines in the middle of the board: the rival's 5 actions (face down
 * until the resolution) above, the player's below with the Chronos left after
 * each one, the 90 s clock and the Ready button.
 */
export default function TimelineBar({
  state,
  me,
  rival,
  actions,
  projection,
  rivalActions,
  rivalReady,
  rivalLabel,
  planning,
  waiting = false,
  step,
  failures,
  deadline,
  onRemove,
  onReady
}: TimelineBarProps) {
  const t = useT()

  return (
    <div className="timeline-bar">
      <div className="timeline-bar__side">
        <span className={classNames('timeline-bar__rival', { ready: rivalReady })}>
          {rivalLabel}: {rivalReady ? t('battle.rivalReady') : t('battle.rivalThinking')}
        </span>
        <Clock deadline={deadline} running={planning || waiting} onExpire={onReady} />
      </div>
      <div className="timeline-bar__steps">
        {STEPS.map((index) => (
          <div key={index} className={classNames('timeline-bar__step', { active: step === index })}>
            {/* Remounted when the rival's plan is revealed, so its boxes flip over one by one. */}
            <span
              key={rivalActions ? 'revealed' : 'hidden'}
              className={classNames('timeline-bar__rival-box', { revealed: !!rivalActions })}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <ActionBox
                action={rivalActions?.[index] ?? null}
                state={state}
                player={rival}
                hidden={!rivalActions}
                failure={failures[rival][index]}
                active={step === index}
                done={step != null && index < step}
              />
            </span>
            <span className="timeline-bar__number">{index + 1}</span>
            <ActionBox
              action={actions[index] ?? null}
              state={state}
              player={me}
              projection={planning ? projection[index] : undefined}
              failure={failures[me][index]}
              active={step === index}
              done={step != null && index < step}
              onClick={planning ? () => onRemove(index) : undefined}
            />
          </div>
        ))}
      </div>
      <div className="timeline-bar__side">
        <button
          type="button"
          className={classNames('timeline-bar__ready', { waiting })}
          disabled={!planning}
          onClick={onReady}
        >
          {waiting ? t('battle.waitingRival') : t('battle.ready')}
        </button>
      </div>
    </div>
  )
}
