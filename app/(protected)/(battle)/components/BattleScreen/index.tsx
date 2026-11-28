'use client'

import './index.scss'
import classNames from 'classnames'
import { CSSProperties, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { MusicId } from '@/app/(protected)/(art)/data/audio'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import { playSfx } from '@/app/(protected)/(art)/utils/sound'
import AttackArrows from '@/app/(protected)/(battle)/components/AttackArrows'
import BattleEnd from '@/app/(protected)/(battle)/components/BattleEnd'
import BoardSlot, { SlotHighlight } from '@/app/(protected)/(battle)/components/BoardSlot'
import CardStack, { STACK_DEPTH, type StackCard } from '@/app/(protected)/(battle)/components/CardStack'
import DeckPickOverlay from '@/app/(protected)/(battle)/components/DeckPickOverlay'
import MiniCard from '@/app/(protected)/(battle)/components/MiniCard'
import MulliganOverlay from '@/app/(protected)/(battle)/components/MulliganOverlay'
import TimelineBar from '@/app/(protected)/(battle)/components/TimelineBar'
import TutorialCoach from '@/app/(protected)/(battle)/components/TutorialCoach'
import { Selection } from '@/app/(protected)/(battle)/models/Selection'
import { useBattleStore } from '@/app/(protected)/(battle)/stores/battle'
import { playMoment } from '@/app/(protected)/(battle)/utils/battleSounds'
import { attackLines, heavyHeroHit, refKey, slotEffects } from '@/app/(protected)/(battle)/utils/effects'
import { KEYWORD_ICONS } from '@/app/(protected)/(battle)/utils/icons'
import { projectPlan, usedCards } from '@/app/(protected)/(battle)/utils/projection'
import {
  abilityRefs,
  allyAbility,
  artifactAbility,
  attackRefs,
  cardNeeds,
  heroCard,
  moveRefs,
  refsFor,
  sameRef,
  summonRefs
} from '@/app/(protected)/(battle)/utils/targets'
import CardSpotlight, { SpotlightAction, SpotlightCard } from '@/app/(protected)/(cards)/components/CardSpotlight'
import { ACTIONS_PER_PHASE, ALLY_SLOTS, SUPPORT_SLOTS } from '@/app/(protected)/(engine)/data/rules'
import { ActiveAbility } from '@/app/(protected)/(engine)/models/CardDefinition'
import {
  Afflictions,
  CardInstance,
  HeroState,
  MatchState,
  PlayerState,
  Unit
} from '@/app/(protected)/(engine)/models/MatchState'
import { PlannedAction } from '@/app/(protected)/(engine)/models/PlannedAction'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { aimsAtAttached, SUPPORT_TARGETS, TargetKind } from '@/app/(protected)/(engine)/models/TargetKind'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useT } from '@/app/i18n/I18nProvider'
import type { MessageKey } from '@/app/i18n/messages'

const SLOTS = Array.from({ length: ALLY_SLOTS }, (_, slot) => slot)
/** Share of the board's height of the top bar and of each side (the hand takes the rest). */
const BANDS = { top: 0.075, side: 0.37 }
/** Share of a side's height of its allies row (the supports take the rest). */
const ALLIES_SHARE = 0.65
/** Part of a card's height kept free around it for the cards attached behind it. */
const PEEK = 0.06
/** The most Chronos drawn as pips under the counter. */
const MAX_PIPS = 10
/** Width of a side that isn't cards: paddings, gaps, the row labels (px). */
const SIDE_ROOM = 96
/** Width of the column on the right with the timelines (px). */
const TIMELINE_WIDTH = 236

/** The highlighted slots for the current selection, by kind. */
interface Highlights {
  attack: SlotRef[]
  move: SlotRef[]
  summon: SlotRef[]
  target: SlotRef[]
}

const NO_HIGHLIGHTS: Highlights = { attack: [], move: [], summon: [], target: [] }

/** The card shown big in the middle, and what it is on the board (its buttons depend on it). */
type Spot =
  | { kind: 'hand'; uid: number; cardId: string }
  | { kind: 'ally'; player: PlayerId; uid: number; cardId: string }
  | { kind: 'hero'; player: PlayerId; cardId: string }
  | { kind: 'artifact'; player: PlayerId; uid: number; cardId: string }
  | { kind: 'inspect'; cardId: string; note?: string }

/** The sizes of the cards on this screen (px), from the size of the window. */
function useMetrics() {
  const [size, setSize] = useState({ width: 844, height: 390 })

  useEffect(() => {
    const measure = () => setSize({ width: window.innerWidth, height: window.innerHeight })

    measure()
    window.addEventListener('resize', measure)

    return () => window.removeEventListener('resize', measure)
  }, [])

  return useMemo(() => {
    const height = size.height - 8
    const width = size.width - TIMELINE_WIDTH - 20
    const side = height * BANDS.side - 12
    // Room is kept above the allies for one attached card, and above the hero for two.
    // The deck and the graveyard sit in that row too, at the same size, with their pile behind them.
    const allyFit = Math.max(
      20,
      Math.min((side * ALLIES_SHARE - 4) / (1.4 * (1 + PEEK)), (side * ALLIES_SHARE - 4 - STACK_DEPTH) / 1.4)
    )
    const heroFit = Math.max(30, (side - 4) / (1.4 * (1 + 2 * PEEK)))
    // A side must fit its width: hero + 5 allies + deck and graveyard (as big as an ally, with their piles).
    const room = width - SIDE_ROOM - 2 * STACK_DEPTH
    const byWidth = heroFit <= 1.7 * ((room - heroFit) / 7.5) ? (room - heroFit) / 7.5 : room / 9.2
    const ally = Math.min(allyFit, byWidth)
    const support = Math.min((side * (1 - ALLIES_SHARE) - 4) / 1.4, ally * 0.7)

    return {
      ally,
      support,
      hero: Math.min(heroFit, ally * 1.7),
      pile: ally,
      hand: Math.min((height * 0.33) / 1.4, width / 7),
      rivalHand: Math.max(14, (height * BANDS.top - 6) / 1.4)
    }
  }, [size])
}

/**
 * The battle screen (docs/PLAN.md, section 14.3), laid out like a card table:
 * each side has its hero (its weapon and armor peeking from behind it), a row
 * of 5 allies (with what is attached to them, the same way), a row of 5
 * supports (traps and artifacts), and its deck, Chronos and graveyard; the
 * rival's hand face down on top, the player's hand below, and the timelines in
 * the middle with the actions left to program. Every card is drawn whole, and
 * a tap shows it big with what can be done with it: what can't be done right
 * now shows disabled with the reason, instead of an error after trying.
 */
export default function BattleScreen({
  onChangeHeroes,
  tutorial = false,
  music = 'battle',
  renderEnd
}: {
  onChangeHeroes: () => void
  /** Show the tips of the guided first match. */
  tutorial?: boolean
  /** The theme of the battle ('boss' against a campaign's boss). */
  music?: MusicId
  /** A screen of its own for the end of the match (a campaign battle). */
  renderEnd?: (state: MatchState) => ReactNode
}) {
  const t = useT()
  const cardName = useCardName()
  const store = useBattleStore()
  const { state, view, timeline, selection, mode, frame, failures, fast, deck, rivalHeroId, me, rival, cardBacks } =
    store
  const online = !!store.online
  const metrics = useMetrics()
  const [confirmSurrender, setConfirmSurrender] = useState(false)
  const [spot, setSpot] = useState<Spot | null>(null)
  /** Choosing the card of the deck the hero's ability takes. */
  const [deckPick, setDeckPick] = useState(false)
  /** Choosing which of the cards attached to a hero or an ally to aim at (a slot with more than one). */
  const [attachedPick, setAttachedPick] = useState<{ selection: Selection; options: SlotRef[] } | null>(null)
  const programming = mode === 'planning'
  /** The timeline can be changed (online, not after it was sent). */
  const planning = programming && !store.submitted
  const projection = useMemo(
    () => (state && programming ? projectPlan(state, me, timeline) : null),
    [state, programming, timeline, me]
  )
  const effects = useMemo(() => slotEffects(frame.events, t), [frame, t])
  const winner = mode === 'finished' ? (state?.result?.winner ?? null) : undefined

  useMusic(winner === undefined ? music : winner === me ? 'victory' : 'defeat')

  const boardRef = useRef<HTMLDivElement>(null)
  const phaseStart = frame.events.find((event) => event.type === 'phaseStart')
  const phaseBanner = phaseStart?.type === 'phaseStart' ? phaseStart.phase : null

  useEffect(() => {
    if (frame.key > 0) {
      playMoment(frame.events, useBattleStore.getState().fast)
    }
  }, [frame])

  useEffect(() => {
    if (winner !== undefined) {
      playSfx(winner === me ? 'victory-sting' : 'defeat-sting')
    }
  }, [winner, me])

  // A card shown big while programming makes no sense once the resolution starts.
  useEffect(() => {
    if (!planning) {
      setSpot((current) => (current && current.kind !== 'inspect' ? null : current))
      setAttachedPick(null)
    }
  }, [planning])

  const board: MatchState | null = view ?? projection?.board ?? state
  const chronosLeft =
    projection && timeline.length > 0 ? projection.steps[timeline.length - 1].chronos : board?.players[me].chronos
  /**
   * What tapping `ref` does for the current selection: the action to program,
   * or the selection with one more target (the action needs more than one).
   */
  const nextStep = useCallback(
    (current: Selection, ref: SlotRef, kind: SlotHighlight): { action?: PlannedAction; next?: Selection } => {
      if (!board || !state) {
        return {}
      }

      switch (current.kind) {
        case 'card': {
          const card = state.players[me].hand.find((candidate) => candidate.uid === current.uid)

          if (!card) {
            return {}
          }

          if (kind === 'summon') {
            return { action: { kind: 'play', cardUid: current.uid, slot: ref.slot as number } }
          }

          const targets = [...current.targets, ref]

          return targets.length >= (getCard(card.cardId).targets?.length ?? 0)
            ? { action: { kind: 'play', cardUid: current.uid, targets } }
            : { next: { ...current, targets } }
        }

        case 'ally': {
          if (current.ability) {
            const targets = [...current.ability, ref]

            return targets.length >= (allyAbility(board, me, current.uid)?.targets?.length ?? 0)
              ? { action: { kind: 'allyAbility', allyUid: current.uid, targets } }
              : { next: { ...current, ability: targets } }
          }

          return kind === 'attack'
            ? { action: { kind: 'allyAttack', allyUid: current.uid, target: ref } }
            : { action: { kind: 'move', allyUid: current.uid, toSlot: ref.slot as number } }
        }

        case 'hero': {
          if (current.ability) {
            const targets = [...current.ability, ref]

            return targets.length >= (heroCard(board, me).ability?.targets?.length ?? 0)
              ? { action: { kind: 'heroAbility', targets } }
              : { next: { kind: 'hero', ability: targets } }
          }

          return { action: { kind: 'heroAttack', target: ref } }
        }

        case 'artifact': {
          const targets = [...current.ability, ref]

          return targets.length >= (artifactAbility(board, me, current.uid)?.targets?.length ?? 0)
            ? { action: { kind: 'artifactAbility', artifactUid: current.uid, targets } }
            : { next: { ...current, ability: targets } }
        }

        default:
          return {}
      }
    },
    [board, state, me]
  )
  /** Whether tapping `ref` would work: an action that can be programmed, or one more target. */
  const works = useCallback(
    (current: Selection, ref: SlotRef, kind: SlotHighlight) => {
      const step = nextStep(current, ref, kind)

      return !!step.next || (!!step.action && store.check(step.action) == null)
    },
    [nextStep, store]
  )
  const highlights: Highlights = useMemo(() => {
    if (!board || !planning || !selection) {
      return NO_HIGHLIGHTS
    }

    // Only the places where the action would really work light up.
    const valid = (kind: keyof Highlights, refs: SlotRef[]) => ({
      ...NO_HIGHLIGHTS,
      [kind]: refs.filter((ref) => works(selection, ref, kind))
    })

    switch (selection.kind) {
      case 'card': {
        const card = state?.players[me].hand.find((candidate) => candidate.uid === selection.uid)
        const definition = card && getCard(card.cardId)

        if (!definition) {
          return NO_HIGHLIGHTS
        }

        const needs = cardNeeds(definition)

        if (needs === 'slot') {
          return valid('summon', summonRefs(board, me))
        }

        if (needs === 'targets') {
          const kind = definition.targets![selection.targets.length]

          return kind ? valid('target', refsFor(board, me, kind)) : NO_HIGHLIGHTS
        }

        return NO_HIGHLIGHTS
      }

      case 'ally': {
        if (selection.ability) {
          const kind = allyAbility(board, me, selection.uid)?.targets?.[selection.ability.length]

          return kind ? valid('target', refsFor(board, me, kind)) : NO_HIGHLIGHTS
        }

        return selection.mode === 'move'
          ? valid('move', moveRefs(board, me, selection.uid))
          : valid('attack', attackRefs(board, me))
      }

      case 'hero': {
        if (selection.ability) {
          const heroAbility = heroCard(board, me).ability
          const kind = heroAbility?.targets?.[selection.ability.length]

          return kind && heroAbility ? valid('target', abilityRefs(board, me, heroAbility, kind)) : NO_HIGHLIGHTS
        }

        return valid('attack', attackRefs(board, me))
      }

      case 'artifact': {
        const kind = artifactAbility(board, me, selection.uid)?.targets?.[selection.ability.length]

        return kind ? valid('target', refsFor(board, me, kind)) : NO_HIGHLIGHTS
      }

      default:
        return NO_HIGHLIGHTS
    }
  }, [board, planning, selection, state, me, works])

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
        // Should not happen: the screen only offers what works. A real error of the game.
        playSfx('fail')
        toast.error(t(`battle.fail.${failure}` as MessageKey))
      } else {
        playSfx('place')
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
  const reason = (failure: string | null | undefined) => (failure ? t(`battle.fail.${failure}` as MessageKey) : null)

  // ─── Tapping the board ────────────────────────────────────────────────────

  /** The location in play on a side: its effects reach the cards of that side. */
  const locationNote = (player: PlayerId) => {
    const location = board.players[player].location

    return location ? [t('battle.statusNotes.location', { card: cardName(location.cardId) })] : []
  }

  /** Poison, burn and freeze, on a hero or an ally. */
  const afflictionNotes = (subject: Afflictions) => {
    const notes: string[] = []

    if (subject.poison) {
      notes.push(t('battle.statusNotes.poison', { amount: subject.poison }))
    }

    if (subject.burn && subject.burnPhases) {
      notes.push(t('battle.statusNotes.burn', { amount: subject.burn, phases: subject.burnPhases }))
    }

    if ((subject.frozenUntilPhase ?? 0) >= board.phase) {
      notes.push(t('battle.statusNotes.frozen', { until: until(subject.frozenUntilPhase!) }))
    }

    return notes
  }

  /** Until when a status lasts, from the last phase it is on. */
  const until = (lastPhase: number) =>
    lastPhase > board.phase
      ? t('battle.statusNotes.untilPhase', { phase: lastPhase })
      : t('battle.statusNotes.untilEnd')

  /** Everything going on with an ally: its stats, what it suffers, and why it can't act. */
  const unitNote = (unit: Unit, player: PlayerId) => {
    const definition = getCard(unit.cardId)
    const frozen = (unit.frozenUntilPhase ?? 0) >= board.phase
    const charge = unit.keywords.includes('charge')
    const restrainer = (rule: 'disarms' | 'silences') =>
      (unit.attachments ?? []).find((card) => getCard(card.cardId)[rule])
    const disarmer = restrainer('disarms')
    const silencer = restrainer('silences')
    const notes = [
      `⚔️ ${unit.attack + unit.tempAttack + (unit.veil?.attack ?? 0)} · ❤️ ${unit.health}/${unit.maxHealth}`,
      ...afflictionNotes(unit)
    ]

    if (unit.stunnedUntilPhase >= board.phase && !frozen) {
      notes.push(t('battle.statusNotes.stunned', { until: until(unit.stunnedUntilPhase) }))
    }

    if (unit.enteredPhase === board.phase && !charge) {
      notes.push(t('battle.statusNotes.notReady'))
    }

    if (disarmer) {
      notes.push(t('battle.statusNotes.disarmed', { card: cardName(disarmer.cardId) }))
    }

    if (silencer) {
      notes.push(t('battle.statusNotes.silenced', { card: cardName(silencer.cardId) }))
    }

    if (unit.abilityUsedThisPhase) {
      notes.push(t('battle.statusNotes.abilityUsed'))
    } else if (unit.attacksThisPhase >= (unit.keywords.includes('frenzy') ? 2 : 1)) {
      notes.push(t('battle.statusNotes.attacked'))
    }

    if (unit.tempAttack) {
      notes.push(t('battle.statusNotes.tempAttack', { amount: signed(unit.tempAttack) }))
    }

    if (unit.contract) {
      notes.push(t('battle.statusNotes.contract', { until: until(unit.contract.untilPhase) }))
    }

    if (unit.veil) {
      notes.push(
        unit.veil.attack > 0
          ? t('battle.statusNotes.veil', { amount: unit.veil.attack, until: until(unit.veil.untilPhase) })
          : t('battle.statusNotes.veilStealth', { until: until(unit.veil.untilPhase) })
      )
    }

    if (unit.prey && unit.prey.untilPhase >= board.phase) {
      notes.push(t('battle.statusNotes.prey', { until: until(unit.prey.untilPhase) }))
    }

    if (definition.attack != null && unit.attack !== definition.attack) {
      notes.push(
        t('battle.statusNotes.attackChange', {
          amount: signed(unit.attack - definition.attack),
          base: definition.attack
        })
      )
    }

    if (definition.health != null && unit.maxHealth !== definition.health) {
      notes.push(
        t('battle.statusNotes.healthChange', {
          amount: signed(unit.maxHealth - definition.health),
          base: definition.health
        })
      )
    }

    const gained = unit.keywords.filter((keyword) => !(definition.keywords ?? []).includes(keyword))
    const lost = (definition.keywords ?? []).filter((keyword) => !unit.keywords.includes(keyword))

    if ((definition.thorns ?? 0) !== unit.thorns && unit.keywords.includes('thorns')) {
      notes.push(t('battle.statusNotes.thornsChange', { amount: unit.thorns, base: definition.thorns ?? 0 }))
    }

    if (gained.length > 0) {
      notes.push(
        t('battle.statusNotes.gained', { keywords: gained.map((keyword) => t(`game.keywords.${keyword}`)).join(', ') })
      )
    }

    if (lost.length > 0) {
      notes.push(
        t('battle.statusNotes.lost', { keywords: lost.map((keyword) => t(`game.keywords.${keyword}`)).join(', ') })
      )
    }

    if (unit.attachments?.length) {
      notes.push(
        t('battle.statusNotes.attachments', {
          cards: unit.attachments.map((card) => cardName(card.cardId)).join(', ')
        })
      )
    }

    notes.push(...locationNote(player))

    return notes.join('\n')
  }

  /** Everything going on with a hero: health, gear, energy, what it suffers and what it already did. */
  const heroNote = (player: PlayerId) => {
    const hero = board.players[player].hero
    const notes = [
      `❤️ ${Math.max(0, hero.health)}/${hero.maxHealth} · ⚡ ${board.players[player].energy ?? 0}`,
      ...afflictionNotes(hero)
    ]

    if (hero.veil && hero.veil.untilPhase >= board.phase) {
      notes.push(t('battle.statusNotes.heroVeil', { until: until(hero.veil.untilPhase) }))
    }

    if (hero.weapon) {
      notes.push(
        t('battle.statusNotes.weapon', {
          card: cardName(hero.weapon.card.cardId),
          attack: hero.weapon.attack,
          durability: hero.weapon.durability
        })
      )
    }

    if (hero.armor) {
      notes.push(
        t('battle.statusNotes.armor', {
          card: cardName(hero.armor.card.cardId),
          reduction: hero.armor.reduction,
          durability: hero.armor.durability
        })
      )
    }

    if (hero.attackedThisPhase) {
      notes.push(t('battle.statusNotes.heroAttacked'))
    }

    if (hero.abilityUsedThisPhase) {
      notes.push(t('battle.statusNotes.heroAbilityUsed'))
    }

    for (const boon of board.players[player].boons ?? []) {
      notes.push(t(`battle.statusNotes.boon_${boon.kind}`, { amount: boon.amount, until: until(boon.untilPhase) }))
    }

    if (hero.fallen) {
      notes.push(t('battle.statusNotes.fallen'))
    }

    notes.push(...locationNote(player))

    return notes.join('\n')
  }

  /** The button of an ability, with its cost in Chronos or in energy (a hero's is always energy). */
  const abilityLabel = (ability: ActiveAbility, hero: boolean) =>
    hero || ability.resource === 'energy'
      ? t('battle.buttons.abilityEnergy', { cost: ability.cost })
      : t('battle.buttons.ability', { cost: ability.cost })

  const onSlotClick = (ref: SlotRef) => {
    const highlight = highlightOf(ref)

    // Aiming: a lit place completes (or continues) the action.
    if (planning && selection && highlight) {
      // A target that aims at an attached card: a hero or an ally with more than one asks which.
      const options = highlights[highlight].filter((candidate) => sameRef(candidate, ref))

      if (options.length > 1) {
        setAttachedPick({ selection, options })
      } else {
        aimAt(selection, options[0] ?? ref, highlight)
      }

      return
    }

    store.select(null)

    const side = board.players[ref.player]

    if (ref.slot === 'hero') {
      setSpot({ kind: 'hero', player: ref.player, cardId: side.hero.cardId })

      return
    }

    const unit = side.allies[ref.slot]

    if (unit) {
      setSpot({ kind: 'ally', player: ref.player, uid: unit.uid, cardId: unit.cardId })
    }
  }

  /** Completes (or continues) the action being aimed with one more target. */
  const aimAt = (current: Selection, ref: SlotRef, highlight: SlotHighlight) => {
    const step = nextStep(current, ref, highlight)

    if (step.action) {
      program(step.action)
    } else if (step.next) {
      store.select(step.next)
    }
  }

  /** The card a target that aims at an attached (or support) card points to, with what it is (for the choice). */
  const attachedCard = (ref: SlotRef): { cardId: string | null; note: string } | null => {
    const side = board.players[ref.player]
    const artifact = ref.slot === 'hero' ? (side.artifacts ?? []).find((card) => card.uid === ref.attached) : null
    const trap = ref.slot === 'hero' ? side.traps.find((card) => card.uid === ref.attached) : null

    if (artifact) {
      return { cardId: artifact.cardId, note: t('battle.attached.artifact') }
    }

    if (trap) {
      // The rival's traps stay face down.
      return { cardId: ref.player === me ? trap.cardId : null, note: t('battle.attached.trap') }
    }

    if (ref.slot === 'hero') {
      const { weapon, armor } = side.hero

      if (weapon && weapon.card.uid === ref.attached) {
        return {
          cardId: weapon.card.cardId,
          note: t('battle.attached.weapon', { attack: weapon.attack, durability: weapon.durability })
        }
      }

      return armor && armor.card.uid === ref.attached
        ? {
            cardId: armor.card.cardId,
            note: t('battle.attached.armor', { reduction: armor.reduction, durability: armor.durability })
          }
        : null
    }

    const card = side.allies[ref.slot]?.attachments?.find((candidate) => candidate.uid === ref.attached)

    return card ? { cardId: card.cardId, note: t('battle.attached.ally') } : null
  }

  /** The target kind the current selection asks for next (null: it is not aiming a target). */
  const nextTargetKind = (current: Selection): TargetKind | null => {
    switch (current.kind) {
      case 'card': {
        const card = state.players[me].hand.find((candidate) => candidate.uid === current.uid)

        return (card && getCard(card.cardId).targets?.[current.targets.length]) ?? null
      }

      case 'ally':
        return current.ability ? (allyAbility(board, me, current.uid)?.targets?.[current.ability.length] ?? null) : null
      case 'hero':
        return current.ability ? (heroCard(board, me).ability?.targets?.[current.ability.length] ?? null) : null
      case 'artifact':
        return artifactAbility(board, me, current.uid)?.targets?.[current.ability.length] ?? null
      default:
        return null
    }
  }

  /** Why a target kind has nothing to aim at: no attached card, or no valid place. */
  const noTarget = (kind: TargetKind) =>
    SUPPORT_TARGETS.includes(kind) ? 'noSupport' : aimsAtAttached(kind) ? 'noAttached' : 'invalidTarget'

  /** A face-up support card: an artifact opens with its ability (when it has one); a trap is only looked at. */
  const onSupportClick = (player: PlayerId, card: CardInstance) => {
    const isArtifact = (board.players[player].artifacts ?? []).some((candidate) => candidate.uid === card.uid)

    if (isArtifact) {
      store.select(null)
      setSpot({ kind: 'artifact', player, uid: card.uid, cardId: card.cardId })
    } else {
      inspect(card.cardId)
    }
  }

  const inspect = (cardId: string, note?: string) => {
    store.select(null)
    setSpot({ kind: 'inspect', cardId, note })
  }

  /** Starts aiming with `next` (closes the big card), or programs `action` right away. */
  const choose = (next: Selection | null, action?: PlannedAction) => {
    setSpot(null)

    if (action) {
      program(action)
    } else {
      store.select(next)
    }
  }

  /**
   * 'notEnoughEnergy' when an energy-paid ability costs more than the energy
   * left after the actions already programmed this phase. Checked up front so
   * the button is off even for abilities with several targets (whose first
   * tap only picks a target and never reaches the engine's check).
   */
  const energyShort = (ability: ActiveAbility, hero: boolean) =>
    board && (hero || ability.resource === 'energy') && (board.players[me].energy ?? 0) < ability.cost
      ? 'notEnoughEnergy'
      : null

  /** The first place where an action works, or why none does. */
  const firstWorking = (current: Selection, refs: SlotRef[], kind: SlotHighlight, none: string) => {
    if (refs.some((ref) => works(current, ref, kind))) {
      return null
    }

    const step = refs.length > 0 ? nextStep(current, refs[0], kind) : {}

    return (step.action && store.check(step.action)) || none
  }

  // ─── The card shown big, and its buttons ──────────────────────────────────

  // The cards of the deck the hero's ability can take (one per card, with its copies).
  const heroChoice = heroCard(board, me).ability?.choice
  const deckChoices: { cardId: string; copies: number }[] = []

  if (heroChoice === 'deckArtifact') {
    for (const card of state.players[me].deck) {
      if (getCard(card.cardId).type !== 'artifact') {
        continue
      }

      const found = deckChoices.find((choice) => choice.cardId === card.cardId)

      if (found) {
        found.copies++
      } else {
        deckChoices.push({ cardId: card.cardId, copies: 1 })
      }
    }

    deckChoices.sort((a, b) => cardName(a.cardId).localeCompare(cardName(b.cardId)))
  }

  let spotActions: SpotlightAction[] = []
  let spotNote: string | undefined

  if (spot?.kind === 'hand') {
    const definition = getCard(spot.cardId)
    const needs = cardNeeds(definition)
    const current: Selection = { kind: 'card', uid: spot.uid, targets: [] }
    const usedNow = used.has(spot.uid)

    if (planning) {
      let playReason: string | null

      if (usedNow) {
        playReason = 'cardUsed'
      } else if (needs === 'nothing') {
        playReason = store.check({ kind: 'play', cardUid: spot.uid })
      } else if (needs === 'slot') {
        playReason = firstWorking(current, summonRefs(board, me), 'summon', 'slotsFull')
      } else {
        playReason = firstWorking(
          current,
          refsFor(board, me, definition.targets![0]),
          'target',
          noTarget(definition.targets![0])
        )
      }

      spotActions = [
        {
          label: t('battle.buttons.play'),
          color: 'primary',
          disabledReason: reason(playReason),
          onClick: () => (needs === 'nothing' ? choose(null, { kind: 'play', cardUid: spot.uid }) : choose(current))
        },
        {
          label: t('battle.buttons.sacrifice'),
          color: 'secondary',
          disabledReason: reason(usedNow ? 'cardUsed' : store.check({ kind: 'sacrifice', cardUid: spot.uid })),
          onClick: () => choose(null, { kind: 'sacrifice', cardUid: spot.uid })
        }
      ]
    }
  } else if (spot?.kind === 'ally') {
    const unit = board.players[spot.player].allies.find((candidate) => candidate?.uid === spot.uid)

    spotNote = unit ? unitNote(unit, spot.player) : undefined

    if (planning && unit && spot.player === me) {
      const ability = allyAbility(board, me, unit.uid)
      const attack: Selection = { kind: 'ally', uid: unit.uid, mode: 'attack' }
      const move: Selection = { kind: 'ally', uid: unit.uid, mode: 'move' }

      spotActions = [
        {
          label: t('battle.buttons.attack'),
          color: 'primary',
          disabledReason: reason(firstWorking(attack, attackRefs(board, me), 'attack', 'invalidTarget')),
          onClick: () => choose(attack)
        },
        {
          label: t('battle.buttons.move'),
          color: 'secondary',
          disabledReason: reason(firstWorking(move, moveRefs(board, me, unit.uid), 'move', 'invalidTarget')),
          onClick: () => choose(move)
        }
      ]

      if (ability) {
        const aim: Selection = { kind: 'ally', uid: unit.uid, ability: [] }
        const direct: PlannedAction = { kind: 'allyAbility', allyUid: unit.uid, targets: [] }

        spotActions.push({
          label: abilityLabel(ability, false),
          color: 'secondary',
          disabledReason: reason(
            energyShort(ability, false) ??
              (ability.targets?.length
                ? firstWorking(aim, refsFor(board, me, ability.targets[0]), 'target', noTarget(ability.targets[0]))
                : store.check(direct))
          ),
          onClick: () => (ability.targets?.length ? choose(aim) : choose(null, direct))
        })
      }
    }
  } else if (spot?.kind === 'hero') {
    const hero = board.players[spot.player].hero

    spotNote = heroNote(spot.player)

    if (planning && spot.player === me) {
      const ability = heroCard(board, me).ability
      const attack: Selection = { kind: 'hero', ability: null }

      spotActions = [
        {
          label: t('battle.buttons.weaponAttack'),
          color: 'primary',
          disabledReason: reason(
            hero.weapon ? firstWorking(attack, attackRefs(board, me), 'attack', 'invalidTarget') : 'noWeapon'
          ),
          onClick: () => choose(attack)
        }
      ]

      if (ability?.choice) {
        const first = deckChoices[0]?.cardId

        spotActions.push({
          label: abilityLabel(ability, true),
          color: 'secondary',
          disabledReason: reason(
            energyShort(ability, true) ??
              (first ? store.check({ kind: 'heroAbility', targets: [], cardId: first }) : 'noChoice')
          ),
          onClick: () => {
            setSpot(null)
            setDeckPick(true)
          }
        })
      } else if (ability) {
        const aim: Selection = { kind: 'hero', ability: [] }
        const direct: PlannedAction = { kind: 'heroAbility', targets: [] }

        spotActions.push({
          label: abilityLabel(ability, true),
          color: 'secondary',
          disabledReason: reason(
            energyShort(ability, true) ??
              (ability.targets?.length
                ? firstWorking(
                    aim,
                    abilityRefs(board, me, ability, ability.targets[0]),
                    'target',
                    noTarget(ability.targets[0])
                  )
                : store.check(direct))
          ),
          onClick: () => (ability.targets?.length ? choose(aim) : choose(null, direct))
        })
      }
    }

    // The abilities of the hero's weapon and armor (they work like an artifact's).
    if (planning && spot.player === me) {
      for (const gear of [hero.weapon?.card, hero.armor?.card]) {
        const gearAbility = gear ? getCard(gear.cardId).ability : undefined

        if (!gear || !gearAbility) {
          continue
        }

        const aim: Selection = { kind: 'artifact', uid: gear.uid, ability: [] }
        const direct: PlannedAction = { kind: 'artifactAbility', artifactUid: gear.uid, targets: [] }

        spotActions.push({
          label: `${cardName(gear.cardId)} · ${abilityLabel(gearAbility, false)}`,
          color: 'secondary',
          disabledReason: reason(
            gear.abilityUsedThisPhase
              ? 'abilityUsed'
              : (energyShort(gearAbility, false) ??
                  (gearAbility.targets?.length
                    ? firstWorking(
                        aim,
                        refsFor(board, me, gearAbility.targets[0]),
                        'target',
                        noTarget(gearAbility.targets[0])
                      )
                    : store.check(direct)))
          ),
          onClick: () => (gearAbility.targets?.length ? choose(aim) : choose(null, direct))
        })
      }
    }
  } else if (spot?.kind === 'artifact') {
    const artifact = (board.players[spot.player].artifacts ?? []).find((candidate) => candidate.uid === spot.uid)
    const ability = artifact ? getCard(artifact.cardId).ability : undefined

    spotNote = artifact?.abilityUsedThisPhase ? t('battle.statusNotes.artifactAbilityUsed') : undefined

    if (planning && artifact && ability && spot.player === me) {
      const aim: Selection = { kind: 'artifact', uid: artifact.uid, ability: [] }
      const direct: PlannedAction = { kind: 'artifactAbility', artifactUid: artifact.uid, targets: [] }

      spotActions = [
        {
          label: abilityLabel(ability, false),
          color: 'secondary',
          disabledReason: reason(
            energyShort(ability, false) ??
              (ability.targets?.length
                ? firstWorking(aim, refsFor(board, me, ability.targets[0]), 'target', noTarget(ability.targets[0]))
                : store.check(direct))
          ),
          onClick: () => (ability.targets?.length ? choose(aim) : choose(null, direct))
        }
      ]
    }
  } else if (spot?.kind === 'inspect') {
    spotNote = spot.note
  }

  // The card tapped and what is attached to it: a tap on the big card shows the next one.
  const note = (text: string | undefined) => text && <span className="battle-screen__note">{text}</span>
  let spotStack: SpotlightCard[] | undefined

  if (spot?.kind === 'hero') {
    const hero = board.players[spot.player].hero

    spotStack = [
      { cardId: hero.cardId, note: note(spotNote) },
      ...heroAttachments(hero).map((card) => ({
        cardId: card.cardId,
        note: note(
          card.kind === 'weapon' && hero.weapon
            ? t('battle.attached.weapon', { attack: hero.weapon.attack, durability: hero.weapon.durability })
            : t('battle.attached.armor', {
                reduction: hero.armor?.reduction ?? 0,
                durability: hero.armor?.durability ?? 0
              })
        )
      }))
    ]
  } else if (spot?.kind === 'ally') {
    const unit = board.players[spot.player].allies.find((candidate) => candidate?.uid === spot.uid)

    spotStack = unit
      ? [
          { cardId: unit.cardId, note: note(spotNote) },
          ...allyAttachments(unit).map((card) => ({ cardId: card.cardId, note: note(t('battle.attached.ally')) }))
        ]
      : undefined
  }

  // ─── The hint while aiming ────────────────────────────────────────────────

  let aimHint: string | null = null

  if (planning && selection) {
    if (selection.kind === 'card') {
      const card = state.players[me].hand.find((candidate) => candidate.uid === selection.uid)

      aimHint = card && cardNeeds(getCard(card.cardId)) === 'slot' ? t('battle.hints.summon') : t('battle.hints.target')
    } else if (selection.kind === 'ally') {
      aimHint = selection.ability
        ? t('battle.hints.target')
        : selection.mode === 'move'
          ? t('battle.hints.move')
          : t('battle.hints.attack')
    } else if (selection.kind === 'hero') {
      aimHint = selection.ability ? t('battle.hints.target') : t('battle.hints.attack')
    } else if (selection.kind === 'artifact') {
      aimHint = t('battle.hints.target')
    }

    const kind = nextTargetKind(selection)

    if (kind && aimsAtAttached(kind)) {
      aimHint = SUPPORT_TARGETS.includes(kind) ? t('battle.hints.support') : t('battle.hints.attached')
    }
  }

  // ─── The board ────────────────────────────────────────────────────────────

  const allyRow = (player: PlayerId) => (
    <div className="battle-screen__row allies">
      <span className="battle-screen__zone">{t('battle.zones.allies')}</span>
      {SLOTS.map((slot) => {
        const ref = { player, slot }
        const unit = board.players[player].allies[slot]
        const real = state.players[player].allies[slot]
        const ghost = planning && !!unit && real?.uid !== unit.uid

        return (
          <BoardSlot
            key={slot}
            side={player === me ? 'bottom' : 'top'}
            className="battle-screen__slot"
            label=""
            highlight={highlightOf(ref)}
            selected={selection?.kind === 'ally' && unit?.uid === selection.uid}
            ghost={ghost}
            effects={effects.get(refKey(ref))}
            frameKey={frame.key}
            slotKey={refKey(ref)}
            onClick={() => onSlotClick(ref)}
          >
            {unit && (
              <CardStack under={stackOf(allyAttachments(unit))} width={metrics.ally}>
                <UnitCard unit={unit} width={metrics.ally} phase={board.phase} />
              </CardStack>
            )}
          </BoardSlot>
        )
      })}
    </div>
  )

  const supportRow = (player: PlayerId) => {
    const side = board.players[player]
    // Artifacts are face up for both sides; traps are face down for the rival.
    const cards = [
      ...(side.artifacts ?? []).map((card) => ({ card, faceDown: false })),
      ...side.traps.map((card) => ({ card, faceDown: player !== me }))
    ]

    return (
      <div className="battle-screen__row support">
        <span className="battle-screen__zone">{t('battle.zones.support')}</span>
        {Array.from({ length: SUPPORT_SLOTS }, (_, index) => {
          const entry = cards[index] ?? null

          return (
            <button
              key={index}
              type="button"
              className={classNames('battle-screen__support', {
                empty: !entry,
                selected: !!entry && selection?.kind === 'artifact' && selection.uid === entry.card.uid,
                'ability-ready':
                  planning &&
                  player === me &&
                  !!entry &&
                  !entry.faceDown &&
                  !!getCard(entry.card.cardId).ability &&
                  !entry.card.abilityUsedThisPhase
              })}
              disabled={!entry || entry.faceDown}
              onClick={() => entry && !entry.faceDown && onSupportClick(player, entry.card)}
            >
              {entry && (
                <CardStack width={metrics.support}>
                  <MiniCard
                    cardId={entry.faceDown ? null : entry.card.cardId}
                    back={cardBacks[player]}
                    width={metrics.support}
                  />
                </CardStack>
              )}
              {entry?.card.charges !== undefined && (
                <span className="battle-screen__attached-badge">⏳{entry.card.charges}</span>
              )}
              {entry && (entry.card.disabledUntilPhase ?? 0) >= board.phase && (
                <span className="battle-screen__status" title={t('battle.statusNotes.disabled')}>
                  ⛔
                </span>
              )}
            </button>
          )
        })}
      </div>
    )
  }

  const heroSlot = (player: PlayerId) => {
    const ref = { player, slot: 'hero' } as const
    const hero = board.players[player].hero

    return (
      <BoardSlot
        side={player === me ? 'bottom' : 'top'}
        className="battle-screen__hero"
        slotKey={refKey(ref)}
        highlight={highlightOf(ref)}
        selected={player === me && selection?.kind === 'hero'}
        effects={effects.get(refKey(ref))}
        frameKey={frame.key}
        onClick={() => onSlotClick(ref)}
      >
        <CardStack under={stackOf(heroAttachments(hero))} width={metrics.hero}>
          <MiniCard
            cardId={hero.cardId}
            width={metrics.hero}
            className={classNames({ fallen: hero.fallen, frozen: (hero.frozenUntilPhase ?? 0) >= board.phase })}
          >
            {hero.veil && hero.veil.untilPhase >= board.phase && (
              // The same stealth mark as the allies'.
              <span className="battle-screen__keywords">
                <span>{KEYWORD_ICONS.stealth}</span>
              </span>
            )}
            {hero.weapon && (
              <>
                <span className="battle-screen__badge attack big">{hero.weapon.attack}</span>
                <span className="battle-screen__badge durability weapon">{hero.weapon.durability}</span>
              </>
            )}
            <span className="battle-screen__badge health big">{Math.max(0, hero.health)}</span>
            {hero.armor && (
              <>
                <span className="battle-screen__badge armor big">-{hero.armor.reduction}</span>
                <span className="battle-screen__badge durability armor-durability">{hero.armor.durability}</span>
              </>
            )}
            <StatusBadges subject={hero} phase={board.phase} />
          </MiniCard>
        </CardStack>
      </BoardSlot>
    )
  }

  /** The deck and the graveyard, in the allies row: as big as an ally, with their pile behind them. */
  const piles = (player: PlayerId) => {
    const side: PlayerState = board.players[player]
    const top = side.discard.at(-1)
    const label = (zone: 'deck' | 'graveyard', count: number) => (
      <>
        <span className="battle-screen__count">{count}</span>
        <span className="battle-screen__pile-label">{t(`battle.zones.${zone}`)}</span>
      </>
    )

    return (
      <div className="battle-screen__piles">
        <div className="battle-screen__pile" title={t('battle.zones.deck')}>
          <CardStack
            className="battle-screen__pile-stack"
            under={side.deck.slice(1).map(() => ({ cardId: null }))}
            back={cardBacks[player]}
            width={metrics.pile}
          >
            {side.deck.length > 0 ? (
              <MiniCard cardId={null} back={cardBacks[player]} width={metrics.pile}>
                {label('deck', side.deck.length)}
              </MiniCard>
            ) : (
              <span className="battle-screen__pile-empty">{label('deck', 0)}</span>
            )}
          </CardStack>
        </div>
        <button
          type="button"
          className={classNames('battle-screen__pile', { empty: !top })}
          disabled={!top}
          title={t('battle.zones.graveyard')}
          onClick={() => top && inspect(top.cardId)}
        >
          <CardStack
            className="battle-screen__pile-stack"
            under={side.discard.slice(0, -1).map((card) => ({ cardId: card.cardId }))}
            width={metrics.pile}
          >
            {top ? (
              <MiniCard cardId={top.cardId} width={metrics.pile}>
                {label('graveyard', side.discard.length)}
              </MiniCard>
            ) : (
              <span className="battle-screen__pile-empty">{label('graveyard', 0)}</span>
            )}
          </CardStack>
        </button>
      </div>
    )
  }

  /** The Chronos and the energy, in the supports row, on the right. */
  const counters = (player: PlayerId) => {
    const side: PlayerState = board.players[player]
    const chronos = player === me ? (chronosLeft ?? 0) : side.chronos
    const capacity = side.chronosCapacity

    return (
      <div className="battle-screen__counters">
        <div className="battle-screen__counter chronos" title={t('battle.zones.chronos')}>
          <span className="battle-screen__counter-icon" aria-hidden="true">
            ⌛
          </span>
          <span className="battle-screen__counter-body">
            <strong className="battle-screen__counter-value">
              {chronos}
              <small>/{capacity}</small>
            </strong>
            <span className="battle-screen__counter-pips" aria-hidden="true">
              {Array.from({ length: Math.min(capacity, MAX_PIPS) }, (_, index) => (
                <i key={index} className={classNames({ on: index < chronos })} />
              ))}
            </span>
          </span>
        </div>
        <div className="battle-screen__counter energy" title={t('battle.zones.energy')}>
          <span className="battle-screen__counter-icon" aria-hidden="true">
            ⚡
          </span>
          <span className="battle-screen__counter-body">
            <strong className="battle-screen__counter-value">{side.energy ?? 0}</strong>
            <span className="battle-screen__counter-name">{t('battle.zones.energy')}</span>
          </span>
        </div>
      </div>
    )
  }

  const side = (player: PlayerId) => (
    <div className={classNames('battle-screen__side', player === me ? 'mine' : 'theirs')}>
      {heroSlot(player)}
      {supportRow(player)}
      {allyRow(player)}
      {piles(player)}
      {counters(player)}
    </div>
  )
  const left = ACTIONS_PER_PHASE - timeline.length
  const vars = {
    '--ally-w': `${metrics.ally}px`,
    '--support-w': `${metrics.support}px`,
    '--hero-w': `${metrics.hero}px`,
    '--pile-w': `${metrics.pile}px`,
    '--pile-depth': `${STACK_DEPTH}px`,
    '--hand-w': `${metrics.hand}px`,
    '--peek': PEEK,
    '--slot': `${metrics.ally}px`,
    '--timeline-w': `${TIMELINE_WIDTH}px`
  } as CSSProperties

  return (
    <div className="battle-screen" style={vars} data-silent>
      <div
        className={classNames(
          'battle-screen__board',
          // Two names, so a heavy blow right after another one shakes again.
          heavyHeroHit(frame.events) && (frame.key % 2 ? 'shake-odd' : 'shake-even')
        )}
        ref={boardRef}
      >
        <AttackArrows lines={attackLines(frame.events)} frameKey={frame.key} container={boardRef} />
        {phaseBanner !== null && (
          <span key={`banner-${phaseBanner}`} className="battle-screen__banner" aria-hidden="true">
            {t('battle.phase', { phase: phaseBanner })}
          </span>
        )}

        <div className="battle-screen__top">
          <span className="battle-screen__phase">{t('battle.phase', { phase: board.phase })}</span>
          <div className="battle-screen__rival-hand" aria-label={t('battle.rivalHand')}>
            {board.players[rival].hand.map((card) => (
              <MiniCard key={card.uid} cardId={null} back={cardBacks[rival]} width={metrics.rivalHand} />
            ))}
            <span className="battle-screen__count">{board.players[rival].hand.length}</span>
          </div>
          <div className="battle-screen__menu">
            <button type="button" className={fast ? 'active' : ''} onClick={store.toggleFast}>
              {t('battle.fast')}
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
        </div>

        {side(rival)}

        <div className="battle-screen__middle">
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
            actionsLeft={planning ? left : null}
            step={store.step}
            failures={failures}
            deadline={store.deadline}
            onRemove={(index) => {
              playSfx('remove')
              store.unprogram(index)
            }}
            onReady={() => {
              playSfx('ready')
              store.select(null)
              setSpot(null)
              store.ready()
            }}
          />
          {aimHint && (
            <div className="battle-screen__aim">
              <span>{aimHint}</span>
              <button type="button" onClick={() => store.select(null)}>
                {t('battle.buttons.cancel')}
              </button>
            </div>
          )}
        </div>

        {side(me)}

        <div className="battle-screen__hand">
          {handSource.map((card, index) => {
            const definition = getCard(card.cardId)
            const usedNow = planning && used.has(card.uid)
            const expensive = planning && !usedNow && definition.cost > (chronosLeft ?? 0)

            return (
              <button
                key={card.uid}
                type="button"
                className={classNames('battle-screen__hand-card', {
                  used: usedNow,
                  expensive,
                  aiming: selection?.kind === 'card' && selection.uid === card.uid
                })}
                style={{ zIndex: index + 1 }}
                onClick={() => {
                  store.select(null)
                  setSpot(
                    planning
                      ? { kind: 'hand', uid: card.uid, cardId: card.cardId }
                      : { kind: 'inspect', cardId: card.cardId }
                  )
                }}
              >
                <MiniCard cardId={card.cardId} width={metrics.hand} />
                {usedNow && <span className="battle-screen__used">✓</span>}
              </button>
            )
          })}
        </div>
      </div>

      {spot && (
        <CardSpotlight
          key={`${spot.kind}-${spot.cardId}`}
          cardId={spot.cardId}
          onClose={() => setSpot(null)}
          actions={spotActions}
          note={spotNote && <span className="battle-screen__note">{spotNote}</span>}
          stack={spotStack}
        />
      )}

      {deckPick && planning && (
        <DeckPickOverlay
          options={deckChoices.map(({ cardId, copies }) => ({ key: cardId, cardId, copies }))}
          onClose={() => setDeckPick(false)}
          onPick={(cardId) => {
            setDeckPick(false)
            program({ kind: 'heroAbility', targets: [], cardId })
          }}
        />
      )}
      {attachedPick && planning && (
        <DeckPickOverlay
          title={t('battle.attachedPick.title')}
          text={t('battle.attachedPick.text')}
          options={attachedPick.options.flatMap((ref) => {
            const card = attachedCard(ref)

            return card ? [{ key: String(ref.attached), ...card }] : []
          })}
          onClose={() => setAttachedPick(null)}
          onPick={(key) => {
            const ref = attachedPick.options.find((option) => String(option.attached) === key)

            setAttachedPick(null)

            if (ref) {
              aimAt(attachedPick.selection, ref, 'target')
            }
          }}
        />
      )}
      {mode === 'mulligan' && (
        <MulliganOverlay
          hand={state.players[me].hand}
          waiting={store.submitted}
          deadline={online ? store.deadline : null}
          onConfirm={store.confirmMulligan}
        />
      )}
      {mode === 'finished' && renderEnd?.(state)}
      {mode === 'finished' && !renderEnd && (
        <BattleEnd
          state={state}
          me={me}
          online={online}
          reward={store.reward}
          onRematch={() => deck && store.start(deck, rivalHeroId)}
          onChangeHeroes={() => {
            store.leave()
            onChangeHeroes()
          }}
        />
      )}
      {tutorial && <TutorialCoach mode={mode} phase={state.phase} />}
    </div>
  )
}

/** An ally on the board: its whole card, with its live attack and health, keywords and state. */
function UnitCard({ unit, width, phase }: { unit: Unit; width: number; phase: number }) {
  const attack = unit.attack + unit.tempAttack + (unit.veil?.attack ?? 0)
  const keywords = unit.keywords.filter((keyword) => KEYWORD_ICONS[keyword])
  const frozen = (unit.frozenUntilPhase ?? 0) >= phase
  const stunned = unit.stunnedUntilPhase >= phase && !frozen
  const fresh = unit.enteredPhase === phase && !unit.keywords.includes('charge')

  return (
    <MiniCard cardId={unit.cardId} width={width} className={classNames('unit-card', { stunned, frozen, fresh })}>
      {keywords.length > 0 && (
        <span className="battle-screen__keywords">
          {keywords.map((keyword) => (
            <span key={keyword}>{KEYWORD_ICONS[keyword]}</span>
          ))}
        </span>
      )}
      <span className={classNames('battle-screen__badge attack', { boosted: unit.tempAttack > 0 || !!unit.veil })}>
        {attack}
      </span>
      <span className={classNames('battle-screen__badge health', { hurt: unit.health < unit.maxHealth })}>
        {unit.health}
      </span>
      {(stunned || fresh) && !frozen && <span className="battle-screen__status">{stunned ? '💫' : '💤'}</span>}
      <StatusBadges subject={unit} phase={phase} prey={!!unit.prey && unit.prey.untilPhase >= phase} />
      {unit.contract && <span className="battle-screen__contract">📜</span>}
    </MiniCard>
  )
}

/** Poison, burn and freeze on a hero or an ally, as small badges over its card. */
function StatusBadges({ subject, phase, prey = false }: { subject: Afflictions; phase: number; prey?: boolean }) {
  const frozen = (subject.frozenUntilPhase ?? 0) >= phase
  const burning = !!subject.burn && !!subject.burnPhases

  if (!subject.poison && !burning && !frozen && !prey) {
    return null
  }

  return (
    <span className="battle-screen__afflictions">
      {prey && <span className="prey">🎯</span>}
      {!!subject.poison && <span className="poison">☠️{subject.poison}</span>}
      {burning && <span className="burn">🔥{subject.burn}</span>}
      {frozen && <span className="freeze">❄️</span>}
    </span>
  )
}

/** A card attached to another one on the board. */
interface AttachedCard {
  cardId: string
  kind: 'weapon' | 'armor' | 'ally'
}

/** The hero's weapon and armor, in the order they show behind it. */
function heroAttachments(hero: HeroState): AttachedCard[] {
  const cards: AttachedCard[] = []

  if (hero.weapon) {
    cards.push({ cardId: hero.weapon.card.cardId, kind: 'weapon' })
  }

  if (hero.armor) {
    cards.push({ cardId: hero.armor.card.cardId, kind: 'armor' })
  }

  return cards
}

/** The cards attached to an ally. */
function allyAttachments(unit: Unit): AttachedCard[] {
  return (unit.attachments ?? []).map((card) => ({ cardId: card.cardId, kind: 'ally' }))
}

/** The cards attached to a card, as the cards under it in its stack: the first attached at the bottom. */
function stackOf(cards: AttachedCard[]): StackCard[] {
  return cards.map((card) => ({ cardId: card.cardId, className: card.kind })).reverse()
}

/** A change in a number, with its sign (+2, -1). */
function signed(amount: number): string {
  return amount > 0 ? `+${amount}` : `${amount}`
}
