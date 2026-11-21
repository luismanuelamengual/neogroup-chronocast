import { playSfx } from '@/app/(protected)/(art)/utils/sound'

/** What sounds like a button when tapped. */
const CLICKABLE = 'button, [role="button"], [role="tab"], [role="option"], [role="menuitem"], a[href]'
let installed = false

/**
 * The click of every button, link and tab of the game, from one listener on
 * the document (so no screen has to remember it). An element inside
 * `[data-silent]` makes no click: the ones with a sound of their own.
 */
export function installUiSounds(): void {
  if (installed || typeof document === 'undefined') {
    return
  }

  installed = true
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target instanceof Element ? event.target.closest(CLICKABLE) : null

      if (!target || target.closest('[data-silent]') || target.matches(':disabled, [aria-disabled="true"]')) {
        return
      }

      playSfx('button')
    },
    { capture: true, passive: true }
  )
}
