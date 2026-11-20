'use client'

import './index.scss'
import { ReactNode, useCallback, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import ActionPanel, { PanelButton } from '@/app/(protected)/(battle)/components/ActionPanel'
import BattleEnd from '@/app/(protected)/(battle)/components/BattleEnd'
import BattleLog from '@/app/(protected)/(battle)/components/BattleLog'
import BoardSlot, { SlotHighlight } from '@/app/(protected)/(battle)/components/BoardSlot'
import HandCard from '@/app/(protected)/(battle)/components/HandCard'
import HeroZone from '@/app/(protected)/(battle)/components/HeroZone'
import MulliganOverlay from '@/app/(protected)/(battle)/components/MulliganOverlay'
import TimelineBar from '@/app/(protected)/(battle)/components/TimelineBar'
import TutorialCoach from '@/app/(protected)/(battle)/components/TutorialCoach'
import UnitToken from '@/app/(protected)/(battle)/components/UnitToken'
import { useBattleStore } from '@/app/(protected)/(battle)/stores/battle'
import { refKey, slotEffects } from '@/app/(protected)/(battle)/utils/effects'
import { projectPlan, usedCards } from '@/app/(protected)/(battle)/utils/projection'
import {
  attackRefs,
  cardNeeds,
  heroCard,
  moveRefs,
  refsFor,
  sameRef,
  summonRefs
} from '@/app/(protected)/(battle)/utils/targets'
import { ALLY_SLOTS } from '@/app/(protected)/(engine)/data/rules'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { PlannedAction } from '@/app/(protected)/(engine)/models/PlannedAction'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { useT } from '@/app/i18n/I18nProvider'

const SLOTS = Array.from({ length: ALLY_SLOTS }, (_, slot) => slot)

/** The highlighted slots for the current selection, by kind. */
interface Highlights {
  attack: SlotRef[]
  move: SlotRef[]
  summon: SlotRef[]
  target: SlotRef[]
}

const NO_HIGHLIGHTS: Highlights = { attack: [], move: [], summon: [], target: [] }

/**
 * The battle screen (docs/PLAN.md, section 14.3): the rival's board above, the
 * player's below, the timelines in the middle, and the hand and the selected
 * card on the side. While programming, the board shows the projection of the
 * plan (what the plan summons or moves looks translucent); while resolving, it
 * shows each moment of the resolution with its animations.
 */
export default function BattleScreen({
  onChangeHeroes,
  tutorial = false,
  renderEnd
}: {
  onChangeHeroes: () => void
  /** Show the tips of the guided first match. */
  tutorial?: boolean
  /** A screen of its own for the end of the match (a campaign battle); `showLog` opens the log. */
  renderEnd?: (state: MatchState, showLog: () => void) => ReactNode
}) {
  const t = useT()
  const store = useBattleStore()
  const { state, view, timeline, selection, mode, frame, failures, log, fast, deck, rivalHeroId, me, rival } = store
  const online = !!store.online
  const [logOpen, setLogOpen] = useState(false)
  const [confirmSurrender, setConfirmSurrender] = useState(false)
  const programming = mode === 'planning'
  /** The timeline can be changed (online, not after it was sent). */
  const planning = programming && !store.submitted
  const projection = useMemo(
    () => (state && programming ? projectPlan(state, me, timeline) : null),
    [state, programming, timeline, me]
  )
  const effects = useMemo(() => slotEffects(frame.events, t), [frame, t])
  const board: MatchState | null = view ?? projection?.board ?? state
  const chronosLeft =
    projection && timeline.length > 0 ? projection.steps[timeline.length - 1].chronos : board?.players[me].chronos
  const highlights: Highlights = useMemo(() => {
    if (!board || !planning || !selection) {
      return NO_HIGHLIGHTS
    }

    switch (selection.kind) {
      case 'card': {
        const card = state?.players[me].hand.find((candidate) => candidate.uid === selection.uid)
        const definition = card && getCard(card.cardId)

        if (!definition) {
          return NO_HIGHLIGHTS
        }

        const needs = cardNeeds(definition)

        if (needs === 'slot') {
          return { ...NO_HIGHLIGHTS, summon: summonRefs(board, me) }
        }

        if (needs === 'targets') {
          const kind = definition.targets![selection.targets.length]

          return { ...NO_HIGHLIGHTS, target: kind ? refsFor(board, me, kind) : [] }
        }

        return NO_HIGHLIGHTS
      }

      case 'ally':
        return { ...NO_HIGHLIGHTS, attack: attackRefs(board, me), move: moveRefs(board, me, selection.uid) }

      case 'hero': {
        if (selection.ability) {
          const kind = heroCard(board, me).ability?.targets?.[selection.ability.length]

          return { ...NO_HIGHLIGHTS, target: kind ? refsFor(board, me, kind) : [] }
        }

        return board.players[me].hero.weapon ? { ...NO_HIGHLIGHTS, attack: attackRefs(board, me) } : NO_HIGHLIGHTS
      }

      default:
        return NO_HIGHLIGHTS
    }
  }, [board, planning, selection, state, me])

  const highlightOf = (ref: SlotRef): SlotHighlight => {
    for (const kind of ['target', 'summon', 'attack', 'move'] as const) {
      if (highlights[kind].some((candidate) => sameRef(candidate, ref))) {
        return kind
      }
    }

    return null
  }

  const program = useCallback(
    (action: PlannedAction) => {
      const failure = store.program(action)

      if (failure) {
        toast.error(t(`battle.fail.${failure}`))
      }
    },
    [store, t]
  )

  if (!state || !board) {
    return null
  }

  const mySide = board.players[me]
  const handSource = programming || mode === 'mulligan' ? state.players[me].hand : mySide.hand
  const used = usedCards(timeline)
  const selectedCard =
    selection?.kind === 'card' ? state.players[me].hand.find((card) => card.uid === selection.uid) : undefined

  const selectOwn = (ref: SlotRef) => {
    if (ref.slot === 'hero') {
      store.select({ kind: 'hero', ability: null })
    } else {
      const unit = board.players[me].allies[ref.slot]

      store.select(unit ? { kind: 'ally', uid: unit.uid } : null)
    }
  }

  const inspect = (ref: SlotRef) => {
    const side = board.players[ref.player]
    const cardId = ref.slot === 'hero' ? side.hero.cardId : side.allies[ref.slot]?.cardId

    store.select(cardId ? { kind: 'inspect', cardId } : null)
  }

  const onSlotClick = (ref: SlotRef) => {
    if (!planning) {
      inspect(ref)

      return
    }

    const highlight = highlightOf(ref)

    if (selection && highlight) {
      switch (selection.kind) {
        case 'card': {
          const definition = getCard(selectedCard!.cardId)

          if (highlight === 'summon') {
            program({ kind: 'play', cardUid: selection.uid, slot: ref.slot as number })
          } else {
            const targets = [...selection.targets, ref]

            if (targets.length >= (definition.targets?.length ?? 0)) {
              program({ kind: 'play', cardUid: selection.uid, targets })
            } else {
              store.select({ ...selection, targets })
            }
          }

          return
        }

        case 'ally':
          program(
            highlight === 'attack'
              ? { kind: 'allyAttack', allyUid: selection.uid, target: ref }
              : { kind: 'move', allyUid: selection.uid, toSlot: ref.slot as number }
          )

          return

        case 'hero': {
          if (selection.ability) {
            const targets = [...selection.ability, ref]

            if (targets.length >= (heroCard(board, me).ability?.targets?.length ?? 0)) {
              program({ kind: 'heroAbility', targets })
            } else {
              store.select({ kind: 'hero', ability: targets })
            }
          } else {
            program({ kind: 'heroAttack', target: ref })
          }

          return
        }

        default:
          break
      }
    }

    if (ref.player === me) {
      selectOwn(ref)
    } else {
      inspect(ref)
    }
  }

  // ─── The side panel ────────────────────────────────────────────────────────

  let panelCard: string | null = null
  let hint = t('battle.hints.idle')
  const buttons: PanelButton[] = []
  const cancel: PanelButton = { label: t('battle.buttons.cancel'), color: 'ghost', onClick: () => store.select(null) }

  if (mode === 'resolving') {
    hint = t('battle.hints.resolving')
  } else if (planning && timeline.length >= 5 && !selection) {
    hint = t('battle.hints.full')
  }

  if (selection?.kind === 'card' && selectedCard) {
    const definition = getCard(selectedCard.cardId)
    const needs = cardNeeds(definition)

    panelCard = definition.id
    hint =
      needs === 'slot'
        ? t('battle.hints.summon')
        : needs === 'targets'
          ? t('battle.hints.target')
          : t('battle.hints.card')

    if (needs === 'nothing') {
      buttons.push({
        label: t('battle.buttons.play'),
        color: 'lime',
        onClick: () => program({ kind: 'play', cardUid: selectedCard.uid })
      })
    }

    buttons.push(
      {
        label: t('battle.buttons.sacrifice'),
        color: 'violet',
        onClick: () => program({ kind: 'sacrifice', cardUid: selectedCard.uid })
      },
      cancel
    )
  } else if (selection?.kind === 'ally') {
    panelCard = board.players[me].allies.find((unit) => unit?.uid === selection.uid)?.cardId ?? null
    hint = t('battle.hints.ally')
    buttons.push(cancel)
  } else if (selection?.kind === 'hero') {
    const hero = heroCard(board, me)
    const ability = hero.ability

    panelCard = hero.id
    hint = selection.ability
      ? t('battle.hints.target')
      : mySide.hero.weapon
        ? t('battle.hints.hero')
        : t('battle.hints.heroNoWeapon')

    if (ability && !selection.ability) {
      buttons.push({
        label: t('battle.buttons.ability', { cost: ability.cost }),
        color: 'cyan',
        onClick: () =>
          ability.targets?.length
            ? store.select({ kind: 'hero', ability: [] })
            : program({ kind: 'heroAbility', targets: [] })
      })
    }

    buttons.push(cancel)
  } else if (selection?.kind === 'inspect') {
    panelCard = selection.cardId
    hint = t('battle.hints.inspect')
    buttons.push({ ...cancel, label: t('common.close') })
  }

  // ─── The board ─────────────────────────────────────────────────────────────

  const allyRow = (player: PlayerId) => (
    <div className="battle-screen__row">
      {SLOTS.map((slot) => {
        const ref = { player, slot }
        const unit = board.players[player].allies[slot]
        const real = state.players[player].allies[slot]
        const ghost = planning && !!unit && real?.uid !== unit.uid

        return (
          <BoardSlot
            key={slot}
            side={player === me ? 'bottom' : 'top'}
            label={t('battle.emptySlot', { slot: slot + 1 })}
            highlight={highlightOf(ref)}
            selected={selection?.kind === 'ally' && unit?.uid === selection.uid}
            ghost={ghost}
            effects={effects.get(refKey(ref))}
            frameKey={frame.key}
            onClick={() => onSlotClick(ref)}
          >
            {unit && (
              <UnitToken
                unit={unit}
                fresh={unit.enteredPhase === board.phase && !unit.keywords.includes('charge')}
                stunned={unit.stunnedUntilPhase >= board.phase}
              />
            )}
          </BoardSlot>
        )
      })}
    </div>
  )

  const heroZone = (player: PlayerId) => {
    const ref = { player, slot: 'hero' } as const

    return (
      <HeroZone
        side={board.players[player]}
        position={player === me ? 'bottom' : 'top'}
        chronos={player === me ? (chronosLeft ?? 0) : board.players[player].chronos}
        highlight={highlightOf(ref)}
        selected={player === me && selection?.kind === 'hero'}
        effects={effects.get(refKey(ref))}
        frameKey={frame.key}
        onHeroClick={() => onSlotClick(ref)}
        onInspect={(cardId) => store.select({ kind: 'inspect', cardId })}
      />
    )
  }

  return (
    <div className="battle-screen">
      <div className="battle-screen__board">
        {heroZone(rival)}
        {allyRow(rival)}
        <TimelineBar
          state={state}
          me={me}
          rival={rival}
          actions={timeline}
          projection={projection?.steps ?? []}
          rivalActions={store.rivalTimeline}
          rivalReady={store.rivalReady}
          rivalLabel={online ? store.rivalName : t('battle.cpu')}
          planning={planning}
          waiting={programming && store.submitted}
          step={store.step}
          failures={failures}
          deadline={store.deadline}
          onRemove={store.unprogram}
          onReady={store.ready}
        />
        {allyRow(me)}
        {heroZone(me)}
      </div>

      <div className="battle-screen__side">
        <div className="battle-screen__top">
          <span className="battle-screen__phase">{t('battle.phase', { phase: board.phase })}</span>
          <button type="button" className={fast ? 'active' : ''} onClick={store.toggleFast}>
            {t('battle.fast')}
          </button>
          <button type="button" onClick={() => setLogOpen(true)}>
            📜 {t('battle.log')}
          </button>
          {online ? (
            <button
              type="button"
              className={confirmSurrender ? 'danger' : ''}
              disabled={mode === 'finished'}
              onClick={() => {
                if (confirmSurrender) {
                  setConfirmSurrender(false)
                  void store.surrender()
                } else {
                  setConfirmSurrender(true)
                  setTimeout(() => setConfirmSurrender(false), 4000)
                }
              }}
            >
              🏳️ {confirmSurrender ? t('battle.surrenderConfirm') : t('battle.giveUp')}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                store.leave()
                onChangeHeroes()
              }}
            >
              🚪 {t('battle.surrender')}
            </button>
          )}
        </div>
        <ActionPanel cardId={panelCard} hint={hint} buttons={buttons} />
        <div className="battle-screen__hand">
          {handSource.map((card) => (
            <HandCard
              key={card.uid}
              cardId={card.cardId}
              used={planning && used.has(card.uid)}
              expensive={planning && getCard(card.cardId).cost > (chronosLeft ?? 0)}
              selected={selection?.kind === 'card' && selection.uid === card.uid}
              onClick={() =>
                planning
                  ? store.select(
                      selection?.kind === 'card' && selection.uid === card.uid
                        ? null
                        : { kind: 'card', uid: card.uid, targets: [] }
                    )
                  : store.select({ kind: 'inspect', cardId: card.cardId })
              }
            />
          ))}
        </div>
      </div>

      {mode === 'mulligan' && (
        <MulliganOverlay
          hand={state.players[me].hand}
          waiting={store.submitted}
          deadline={online ? store.deadline : null}
          onConfirm={store.confirmMulligan}
        />
      )}
      {mode === 'finished' && renderEnd?.(state, () => setLogOpen(true))}
      {mode === 'finished' && !renderEnd && (
        <BattleEnd
          state={state}
          me={me}
          online={online}
          reward={store.reward}
          onRematch={() => deck && store.start(deck, rivalHeroId)}
          onShowLog={() => setLogOpen(true)}
          onChangeHeroes={() => {
            store.leave()
            onChangeHeroes()
          }}
        />
      )}
      {tutorial && <TutorialCoach mode={mode} phase={state.phase} />}
      {logOpen && <BattleLog log={log} state={state} onClose={() => setLogOpen(false)} />}
    </div>
  )
}
