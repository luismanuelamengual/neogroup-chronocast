import { POLL_MS } from '@/app/(protected)/(pvp)/data/pvp'
import { MatchView } from '@/app/(protected)/(pvp)/models/MatchView'

/**
 * How the screen hears about the match (docs/PLAN.md, section 12.3). The first
 * version asks the server every 1.5 s; a push service (Ably, Pusher, Supabase
 * Realtime) can replace it later without touching the rest.
 */
export interface MatchChannel {
  /** Calls `onView` with every newer view of the match. Returns the function that stops listening. */
  subscribe(onView: (view: MatchView) => void): () => void
}

/**
 * The polling channel: asks with the last version known (`currentVersion`)
 * and gets null while nothing changed. A failed request just waits for the
 * next turn (the player may be offline for a moment); coming back to the tab
 * asks right away.
 */
export function pollingChannel(
  fetchView: (version: number | null) => Promise<MatchView | null>,
  currentVersion: () => number | null
): MatchChannel {
  return {
    subscribe(onView) {
      let stopped = false
      let timer: ReturnType<typeof setTimeout> | undefined
      let busy = false

      const poll = async () => {
        if (stopped || busy) {
          return
        }

        busy = true
        clearTimeout(timer)

        try {
          const view = await fetchView(currentVersion())

          if (view && !stopped) {
            onView(view)
          }
        } catch {
          // Offline for a moment: the next turn tries again.
        } finally {
          busy = false

          if (!stopped) {
            timer = setTimeout(poll, POLL_MS)
          }
        }
      }

      const onVisible = () => {
        if (document.visibilityState === 'visible') {
          void poll()
        }
      }

      document.addEventListener('visibilitychange', onVisible)
      timer = setTimeout(poll, POLL_MS)

      return () => {
        stopped = true
        clearTimeout(timer)
        document.removeEventListener('visibilitychange', onVisible)
      }
    }
  }
}
