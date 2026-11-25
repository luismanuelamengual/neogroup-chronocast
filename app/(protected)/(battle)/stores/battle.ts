import { create } from 'zustand'
import { FRAME_MS, PHASE_END_MS } from '@/app/(protected)/(battle)/data/timing'
import { Selection } from '@/app/(protected)/(battle)/models/Selection'
import { createPracticeMatch } from '@/app/(protected)/(battle)/utils/practice'
import { padTimeline, projectPlan } from '@/app/(protected)/(battle)/utils/projection'
import type { BattleRecord } from '@/app/(protected)/(campaign)/utils/playCampaign'
import { chooseTimeline } from '@/app/(protected)/(engine)/ai/chooseTimeline'
import { planTimeline } from '@/app/(protected)/(engine)/ai/planTimeline'
import { ACTIONS_PER_PHASE, PLANNING_SECONDS } from '@/app/(protected)/(engine)/data/rules'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { FailReason, MatchEvent } from '@/app/(protected)/(engine)/models/MatchEvent'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { PlannedAction, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { opponentOf, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { mulligan } from '@/app/(protected)/(engine)/utils/createMatch'
import { ResolutionFrame, resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import type { MatchView, PlayerReward } from '@/app/(protected)/(pvp)/models/MatchView'

/** The side of the player in a practice match (the computer plays "b"). */
export const ME: PlayerId = 'a'
export const RIVAL: PlayerId = 'b'

export type BattleMode = 'idle' | 'mulligan' | 'planning' | 'resolving' | 'finished'

/** What an online (PvP) match asks of the server; every answer is the match as this player sees it. */
export interface OnlineMatch {
  matchId: number
  submitMulligan: (cardUids: number[]) => Promise<MatchView>
  submitPlan: (phase: number, timeline: Timeline) => Promise<MatchView>
  forfeit: () => Promise<MatchView>
}

interface BattleStore {
  deck: DeckList | null
  rivalHeroId: string
  /** Against the computer: its level (ai/levels.ts), or null for the plain greedy one of the practice. */
  aiLevel: number | null
  /** Against the computer: the player's mulligan and timelines so far. */
  record: BattleRecord
  /** The sides on this screen: practice plays "a"; online, the seat taken in the match. */
  me: PlayerId
  rival: PlayerId
  /** Online: the rival's name (practice: empty, the computer). */
  rivalName: string
  mode: BattleMode
  /** The real state of the match (at the start of the phase being programmed). */
  state: MatchState | null
  /** What the board shows while the resolution plays (null: the projection of the plan). */
  view: MatchState | null
  /** The actions programmed so far (at most 5, in order). */
  timeline: PlannedAction[]
  selection: Selection | null
  /** When the planning time runs out (ms since epoch). */
  deadline: number
  rivalReady: boolean
  /** Online: the timeline (or the mulligan) is sent, waiting for the rival. */
  submitted: boolean
  /** The rival's timeline, revealed when the resolution starts. */
  rivalTimeline: Timeline | null
  /** The step being resolved (null: none). */
  step: number | null
  /** The events of the moment on screen, to animate. `key` changes with each moment. */
  frame: { key: number; events: MatchEvent[] }
  /** The actions that failed in the phase being resolved, by side and step. */
  failures: Record<PlayerId, (FailReason | null)[]>
  fast: boolean
  /** Changes on each new match or exit, so a resolution still playing knows it must stop. */
  run: number
  /** Online: the server side of the match, the last version applied and one that arrived mid-resolution. */
  online: OnlineMatch | null
  version: number
  pendingView: MatchView | null
  /** Online: what the finished match paid this player. */
  reward: PlayerReward | null

  /** A practice match: the player's deck against the starter deck of the computer's hero. */
  start: (deck: DeckList, rivalHeroId: string) => void
  /** A match against the computer from a state already created (a campaign battle). */
  startLocal: (state: MatchState, deck: DeckList, aiLevel: number | null) => void
  /** Opens an online match from the server's view of it. */
  startOnline: (view: MatchView, online: OnlineMatch) => void
  /** A newer view of the online match (from the polling or an answer). */
  applyView: (view: MatchView) => void
  confirmMulligan: (cardUids: number[]) => void
  select: (selection: Selection | null) => void
  /** Why an action can't be added at the end of the timeline right now (null: it can), without adding it. */
  check: (action: PlannedAction) => FailReason | 'timelineFull' | 'notPlanning' | null
  /** Adds an action at the end of the timeline. Returns why it can't be programmed, or null. */
  program: (action: PlannedAction) => FailReason | 'timelineFull' | null
  unprogram: (index: number) => void
  ready: () => Promise<void>
  /** Online: gives up the match. */
  surrender: () => Promise<void>
  toggleFast: () => void
  leave: () => void
}

const noFailures = (): Record<PlayerId, (FailReason | null)[]> => ({
  a: Array.from({ length: ACTIONS_PER_PHASE }, () => null),
  b: Array.from({ length: ACTIONS_PER_PHASE }, () => null)
})
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
let rivalTimer: ReturnType<typeof setTimeout> | undefined

/** Puts the cards revealed by a resolution into the hidden hand of the rival (to name them in its timeline). */
function reveal(state: MatchState, rival: PlayerId, revealed: Record<number, string> | undefined): MatchState {
  if (!revealed) {
    return state
  }

  const hand = state.players[rival].hand.map((card) => ({ ...card, cardId: revealed[card.uid] ?? card.cardId }))

  return { ...state, players: { ...state.players, [rival]: { ...state.players[rival], hand } } }
}

/**
 * The battle: practice against the computer, played entirely in the browser
 * with the engine, or an online match whose server resolves the phases
 * (docs/PLAN.md, section 12). Both share the mulligan, the programming with
 * projection and a 90 s clock, and the resolution played moment by moment.
 */
export const useBattleStore = create<BattleStore>()((set, get) => {
  /** A new planning phase: empty timeline and a fresh clock. In practice, the computer "thinks" for a moment. */
  const beginPlanning = (deadline: number = Date.now() + PLANNING_SECONDS * 1000) => {
    clearTimeout(rivalTimer)
    set({
      mode: 'planning',
      timeline: [],
      selection: null,
      deadline,
      rivalReady: false,
      submitted: false,
      rivalTimeline: null,
      step: null,
      failures: noFailures()
    })

    if (!get().online) {
      rivalTimer = setTimeout(() => set({ rivalReady: true }), 1500 + Math.random() * 3500)
    }
  }

  /** Plays the moments of a resolution on the board. False if the match was left meanwhile. */
  const playFrames = async (frames: ResolutionFrame[], run: number): Promise<boolean> => {
    for (const frame of frames) {
      if (get().run !== run) {
        return false
      }

      set((store) => {
        const failures = { a: [...store.failures.a], b: [...store.failures.b] }

        for (const event of frame.events) {
          if (event.type === 'fail') {
            failures[event.player][event.step] = event.reason
          }
        }

        return {
          view: frame.state,
          step: frame.step >= 0 ? frame.step : null,
          frame: { key: store.frame.key + 1, events: frame.events },
          failures
        }
      })
      await sleep((frame.step >= 0 ? FRAME_MS : PHASE_END_MS) / (get().fast ? 2 : 1))
    }

    return get().run === run
  }

  /** Online: shows the stage the server says the match is in (without a resolution to play). */
  const enterStage = (view: MatchView) => {
    const { mode, state } = get()
    const deadline = Date.now() + view.deadlineIn

    set({ state: view.state, version: view.version, reward: view.reward, rivalReady: view.rivalReady })

    if (view.stage === 'mulligan') {
      set({ mode: 'mulligan', submitted: view.submitted, deadline })
    } else if (view.stage === 'planning') {
      if (mode !== 'planning' || state?.phase !== view.state?.phase) {
        beginPlanning(deadline)
        set({ rivalReady: view.rivalReady, submitted: view.submitted })
      } else {
        set({ deadline, submitted: view.submitted })
      }
    } else if (view.stage === 'over') {
      clearTimeout(rivalTimer)
      set({ mode: 'finished', step: null, selection: null })
    }
  }

  return {
    deck: null,
    rivalHeroId: '',
    aiLevel: null,
    record: { mulligan: [], timelines: [] },
    me: ME,
    rival: RIVAL,
    rivalName: '',
    mode: 'idle',
    state: null,
    view: null,
    timeline: [],
    selection: null,
    deadline: 0,
    rivalReady: false,
    submitted: false,
    rivalTimeline: null,
    step: null,
    frame: { key: 0, events: [] },
    failures: noFailures(),
    fast: false,
    run: 0,
    online: null,
    version: -1,
    pendingView: null,
    reward: null,

    start: (deck, rivalHeroId) => {
      get().startLocal(createPracticeMatch(deck, rivalHeroId, Date.now() % 2147483647), deck, null)
    },

    startLocal: (state, deck, aiLevel) => {
      clearTimeout(rivalTimer)
      set((store) => ({
        deck,
        rivalHeroId: state.players[RIVAL].hero.cardId,
        aiLevel,
        record: { mulligan: [], timelines: [] },
        me: ME,
        rival: RIVAL,
        rivalName: '',
        online: null,
        version: -1,
        pendingView: null,
        reward: null,
        submitted: false,
        mode: 'mulligan',
        state,
        view: null,
        timeline: [],
        selection: null,
        rivalTimeline: null,
        step: null,
        frame: { key: 0, events: [] },
        failures: noFailures(),
        run: store.run + 1
      }))
    },

    startOnline: (view, online) => {
      clearTimeout(rivalTimer)
      set((store) => ({
        deck: null,
        rivalHeroId: view.rival?.heroId ?? '',
        me: view.me,
        rival: opponentOf(view.me),
        rivalName: view.rival?.name ?? '',
        online,
        version: -1,
        pendingView: null,
        reward: null,
        submitted: false,
        mode: 'idle',
        state: null,
        view: null,
        timeline: [],
        selection: null,
        rivalTimeline: null,
        step: null,
        frame: { key: 0, events: [] },
        failures: noFailures(),
        run: store.run + 1
      }))
      get().applyView(view)
    },

    applyView: (incoming) => {
      const store = get()

      if (!store.online || incoming.version <= store.version || !incoming.state) {
        return
      }

      if (store.mode === 'resolving') {
        if (!store.pendingView || incoming.version > store.pendingView.version) {
          set({ pendingView: incoming })
        }

        return
      }

      const current = store.state
      const resolution = incoming.resolution
      const fresh =
        !!resolution &&
        !!current &&
        store.mode !== 'finished' &&
        resolution.phase === current.phase &&
        (incoming.state.phase > current.phase || incoming.state.status === 'finished')

      if (!fresh) {
        enterStage(incoming)

        return
      }

      const { run, rival } = store
      const start = reveal(current, rival, resolution.revealed)

      clearTimeout(rivalTimer)
      set({
        mode: 'resolving',
        selection: null,
        rivalReady: true,
        state: start,
        view: start,
        rivalTimeline: resolution.timelines[rival],
        version: incoming.version
      })

      void playFrames(resolution.frames, run).then((done) => {
        if (!done) {
          return
        }

        set({ mode: 'idle', view: null })
        enterStage(incoming)

        const pending = get().pendingView

        set({ pendingView: null })

        if (pending && pending.version > incoming.version) {
          get().applyView(pending)
        }
      })
    },

    confirmMulligan: (cardUids) => {
      const { state, online, me } = get()

      if (!state) {
        return
      }

      if (online) {
        set({ submitted: true })
        online
          .submitMulligan(cardUids)
          .then((view) => get().applyView(view))
          .catch(() => set({ submitted: false }))

        return
      }

      set((store) => ({
        state: mulligan(state, me, cardUids),
        record: { ...store.record, mulligan: [...cardUids] }
      }))
      beginPlanning()
    },

    select: (selection) => set({ selection }),

    check: (action) => {
      const { state, timeline, mode, me, submitted } = get()

      if (!state || mode !== 'planning' || submitted) {
        return 'notPlanning'
      }

      if (timeline.length >= ACTIONS_PER_PHASE) {
        return 'timelineFull'
      }

      const next = [...timeline, action]

      return projectPlan(state, me, next).steps[next.length - 1].failure
    },

    program: (action) => {
      const { state, timeline, mode, me, submitted } = get()

      if (!state || mode !== 'planning' || submitted) {
        return null
      }

      if (timeline.length >= ACTIONS_PER_PHASE) {
        return 'timelineFull'
      }

      const next = [...timeline, action]
      const failure = projectPlan(state, me, next).steps[next.length - 1].failure

      if (failure) {
        return failure
      }

      set({ timeline: next, selection: null })

      return null
    },

    unprogram: (index) => {
      if (get().mode === 'planning' && !get().submitted) {
        set((store) => ({ timeline: store.timeline.filter((_, position) => position !== index), selection: null }))
      }
    },

    ready: async () => {
      const { state, timeline, mode, run, online, submitted } = get()

      if (!state || mode !== 'planning' || submitted) {
        return
      }

      if (online) {
        set({ submitted: true, selection: null })

        try {
          get().applyView(await online.submitPlan(state.phase, padTimeline(timeline)))
        } catch {
          if (get().run === run) {
            set({ submitted: false })
          }
        }

        return
      }

      clearTimeout(rivalTimer)

      const { aiLevel } = get()
      const rivalTimeline = aiLevel ? chooseTimeline(state, RIVAL, aiLevel) : planTimeline(state, RIVAL)
      const mine = padTimeline(timeline)
      const result = resolvePhase(state, { [ME]: mine, [RIVAL]: rivalTimeline } as Record<PlayerId, Timeline>, {
        frames: true
      })

      set((store) => ({
        mode: 'resolving',
        selection: null,
        rivalReady: true,
        rivalTimeline,
        view: state,
        record: { ...store.record, timelines: [...store.record.timelines, mine] }
      }))

      if (!(await playFrames(result.frames, run))) {
        return
      }

      set({ state: result.state, view: null })

      if (result.state.status === 'finished') {
        set({ mode: 'finished', step: null })
      } else {
        beginPlanning()
      }
    },

    surrender: async () => {
      const { online } = get()

      if (online) {
        get().applyView(await online.forfeit())
      }
    },

    toggleFast: () => set((store) => ({ fast: !store.fast })),

    leave: () => {
      clearTimeout(rivalTimer)
      set((store) => ({ mode: 'idle', state: null, view: null, online: null, pendingView: null, run: store.run + 1 }))
    }
  }
})
