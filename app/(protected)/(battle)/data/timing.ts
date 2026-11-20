import { ResolutionFrame } from '@/app/(protected)/(engine)/utils/resolvePhase'

/** How long each moment of the resolution stays on screen (halved at ×2). */
export const FRAME_MS = 1100
/** The end of the phase and the start of the next one. */
export const PHASE_END_MS = 700

/** How long the resolution of a phase takes to play at normal speed (PvP waits for it before the next clock). */
export function resolutionMs(frames: ResolutionFrame[]): number {
  return frames.reduce((total, frame) => total + (frame.step >= 0 ? FRAME_MS : PHASE_END_MS), 0)
}
