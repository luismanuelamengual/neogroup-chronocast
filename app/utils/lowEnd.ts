/**
 * Whether the device looks like a low-end phone: few cores or little memory
 * (`navigator.deviceMemory`, in GB, only on Chrome). Then `html.low-end` turns
 * off the costliest decoration (blurs behind dialogs, the floating cards of
 * the menu, endless pulses), see globals.scss.
 */
export function isLowEndDevice(): boolean {
  if (typeof navigator === 'undefined') {
    return false
  }

  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory
  const cores = navigator.hardwareConcurrency

  return (memory !== undefined && memory <= 3) || (cores !== undefined && cores > 0 && cores <= 4)
}

/** Marks the page for a low-end device (once, on the client). */
export function markLowEndDevice(): void {
  if (typeof document !== 'undefined' && isLowEndDevice()) {
    document.documentElement.classList.add('low-end')
  }
}
