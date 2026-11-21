import { SfxId } from '@/app/(protected)/(art)/data/audio'

/**
 * The sound effects made by code (Web Audio): each one is a few oscillators
 * and bursts of filtered noise with short envelopes, so they weigh nothing
 * and need no files. They play whenever there is no file for an effect (see
 * sound.ts); a file in art/source/sfx/ with the same name replaces one.
 */

interface ToneOptions {
  wave?: OscillatorType
  /** Hz at the start, and at the end (it glides there). */
  from: number
  to?: number
  /** Seconds after the start of the effect. */
  at?: number
  duration: number
  volume?: number
  attack?: number
  /** A wobble of the pitch: how fast (Hz) and how far (Hz). */
  vibrato?: { rate: number; depth: number }
  /** Jumps the pitch at random around `from` (share of it), like an electric arc. */
  jitter?: number
  filter?: { type: BiquadFilterType; from: number; to?: number; q?: number }
}

interface NoiseOptions {
  filter: BiquadFilterType
  /** Hz of the filter at the start, and at the end. */
  from: number
  to?: number
  q?: number
  at?: number
  duration: number
  volume?: number
  attack?: number
}

const SILENT = 0.0001
const noiseBuffers = new WeakMap<BaseAudioContext, AudioBuffer>()

/** Two seconds of white noise, made once per audio context. */
function noiseBuffer(context: BaseAudioContext): AudioBuffer {
  let buffer = noiseBuffers.get(context)

  if (!buffer) {
    buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate)

    const data = buffer.getChannelData(0)

    for (let index = 0; index < data.length; index++) {
      data[index] = Math.random() * 2 - 1
    }

    noiseBuffers.set(context, buffer)
  }

  return buffer
}

function random(min: number, max: number): number {
  return min + Math.random() * (max - min)
}

/** One effect being made: it schedules its sounds from `start` into `output`. */
class Voice {
  /** When its last sound ends (seconds, in the context's clock). */
  end: number

  constructor(
    readonly context: BaseAudioContext,
    readonly output: AudioNode,
    readonly start: number,
    /** Multiplies every pitch: the hits vary a little each time. */
    readonly pitch: number
  ) {
    this.end = start
  }

  /** A gain that rises to `volume` in `attack` and fades out by the end. */
  private envelope(at: number, duration: number, volume: number, attack: number): GainNode {
    const gain = this.context.createGain()
    const peak = Math.min(attack, duration * 0.5)

    gain.gain.setValueAtTime(SILENT, at)
    gain.gain.linearRampToValueAtTime(volume, at + peak)
    gain.gain.exponentialRampToValueAtTime(SILENT, at + duration)
    gain.connect(this.output)
    this.end = Math.max(this.end, at + duration)

    return gain
  }

  tone({
    wave = 'sine',
    from,
    to,
    at = 0,
    duration,
    volume = 0.2,
    attack = 0.005,
    vibrato,
    jitter,
    filter
  }: ToneOptions): void {
    const time = this.start + at
    const oscillator = this.context.createOscillator()
    const gain = this.envelope(time, duration, volume, attack)

    oscillator.type = wave
    oscillator.frequency.setValueAtTime(from * this.pitch, time)

    if (jitter) {
      const steps = Math.max(8, Math.round(duration * 60))
      const curve = new Float32Array(steps)

      for (let index = 0; index < steps; index++) {
        curve[index] = from * this.pitch * (1 + random(-jitter, jitter))
      }

      oscillator.frequency.setValueCurveAtTime(curve, time, duration)
    } else if (to !== undefined && to !== from) {
      oscillator.frequency.exponentialRampToValueAtTime(to * this.pitch, time + duration)
    }

    if (vibrato) {
      const lfo = this.context.createOscillator()
      const depth = this.context.createGain()

      lfo.frequency.value = vibrato.rate
      depth.gain.value = vibrato.depth * this.pitch
      lfo.connect(depth).connect(oscillator.frequency)
      lfo.start(time)
      lfo.stop(time + duration + 0.05)
    }

    let head: AudioNode = oscillator

    if (filter) {
      head = head.connect(this.filter(filter.type, filter.from, filter.to, filter.q, time, duration))
    }

    head.connect(gain)
    oscillator.start(time)
    oscillator.stop(time + duration + 0.05)
  }

  noise({ filter, from, to, q = 1, at = 0, duration, volume = 0.2, attack = 0.005 }: NoiseOptions): void {
    const time = this.start + at
    const source = this.context.createBufferSource()
    const buffer = noiseBuffer(this.context)

    source.buffer = buffer
    source
      .connect(this.filter(filter, from, to, q, time, duration))
      .connect(this.envelope(time, duration, volume, attack))
    // From a random spot, so two bursts never sound the same.
    source.start(time, random(0, buffer.duration - Math.min(duration, 1) - 0.01))
    source.stop(time + duration + 0.05)
  }

  /** Notes one after the other (`step` seconds apart), each lasting `duration`. */
  notes(frequencies: number[], step: number, options: Omit<ToneOptions, 'from' | 'to'>): void {
    frequencies.forEach((from, index) => this.tone({ ...options, from, at: (options.at ?? 0) + index * step }))
  }

  /** Notes that sound together. */
  chord(frequencies: number[], options: Omit<ToneOptions, 'from' | 'to'>): void {
    this.notes(frequencies, 0, options)
  }

  private filter(
    type: BiquadFilterType,
    from: number,
    to: number | undefined,
    q: number | undefined,
    time: number,
    duration: number
  ): BiquadFilterNode {
    const filter = this.context.createBiquadFilter()

    filter.type = type
    filter.Q.value = q ?? 1
    filter.frequency.setValueAtTime(from, time)

    if (to !== undefined && to !== from) {
      filter.frequency.exponentialRampToValueAtTime(to, time + duration)
    }

    return filter
  }
}

/** Frequency of a note, in semitones from A4 (440 Hz). */
const note = (semitones: number) => 440 * 2 ** (semitones / 12)
const C4 = note(-9)
const G4 = note(-2)
const C5 = note(3)
const E5 = note(7)
const G5 = note(10)
const A5 = note(12)
const B5 = note(14)
const C6 = note(15)
const D6 = note(17)
const E6 = note(19)
const G6 = note(22)
const B6 = note(26)
const C7 = note(27)
const E7 = note(31)
const EB4 = note(-6)
const RECIPES: Record<SfxId, (voice: Voice) => void> = {
  // Combat: a swish when an ally strikes, the thud of the hit, a heavier one on a hero.
  attack: (v) => {
    v.noise({ filter: 'bandpass', from: 1200, to: 4800, q: 1.2, duration: 0.17, volume: 0.5, attack: 0.03 })
    v.tone({ wave: 'triangle', from: 1700, to: 900, at: 0.06, duration: 0.09, volume: 0.06 })
  },
  hit: (v) => {
    v.tone({ from: 160, to: 42, duration: 0.25, volume: 0.8, attack: 0.002 })
    v.noise({ filter: 'lowpass', from: 1500, to: 300, duration: 0.12, volume: 0.5, attack: 0.002 })
  },
  'hero-hit': (v) => {
    v.tone({ from: 210, to: 38, duration: 0.4, volume: 0.85, attack: 0.002 })
    v.noise({ filter: 'highpass', from: 2400, to: 1200, duration: 0.14, volume: 0.5, attack: 0.002 })
    v.noise({ filter: 'lowpass', from: 1800, to: 200, duration: 0.3, volume: 0.4, attack: 0.002 })
    v.tone({
      wave: 'square',
      from: 230,
      to: 110,
      at: 0.04,
      duration: 0.15,
      volume: 0.06,
      filter: { type: 'lowpass', from: 900 }
    })
  },
  miss: (v) => {
    v.noise({ filter: 'bandpass', from: 500, to: 1900, q: 1.5, duration: 0.3, volume: 0.32, attack: 0.09 })
  },
  armor: (v) => {
    ;[520, 1230, 1870, 2650, 3400].forEach((from, index) =>
      v.tone({ from, duration: 0.45 - index * 0.06, volume: 0.15, attack: 0.001 })
    )
    v.noise({ filter: 'highpass', from: 3000, duration: 0.03, volume: 0.4, attack: 0.001 })
  },
  shield: (v) => {
    v.tone({ wave: 'triangle', from: 520, to: 1040, duration: 0.3, volume: 0.12, attack: 0.02 })
    v.chord([1560, 2340], { at: 0.08, duration: 0.4, volume: 0.06 })
    v.noise({ filter: 'highpass', from: 4000, duration: 0.25, volume: 0.05, attack: 0.05 })
  },

  // Effects of the cards.
  heal: (v) => {
    v.notes([C5, E5, G5, C6], 0.07, { wave: 'triangle', duration: 0.45, volume: 0.17, attack: 0.01 })
    v.chord([E6, G6], { at: 0.25, duration: 0.45, volume: 0.05, attack: 0.05 })
  },
  buff: (v) => {
    v.tone({ wave: 'triangle', from: 392, to: 784, duration: 0.25, volume: 0.2, attack: 0.02 })
    v.notes([G5, D6], 0.06, { wave: 'triangle', at: 0.12, duration: 0.28, volume: 0.12 })
  },
  stun: (v) => {
    v.tone({ from: 1300, duration: 0.6, volume: 0.08, attack: 0.02, vibrato: { rate: 14, depth: 250 } })
    v.tone({ from: 1750, at: 0.06, duration: 0.55, volume: 0.06, attack: 0.02, vibrato: { rate: 11, depth: 300 } })
  },
  summon: (v) => {
    v.noise({ filter: 'bandpass', from: 300, to: 2400, q: 1.5, duration: 0.3, volume: 0.25, attack: 0.08 })
    v.tone({ from: 120, to: 60, at: 0.22, duration: 0.18, volume: 0.45, attack: 0.002 })
    v.notes([G5, C6], 0.05, { wave: 'triangle', at: 0.24, duration: 0.25, volume: 0.07 })
  },
  death: (v) => {
    v.tone({ from: 220, to: 40, duration: 0.7, volume: 0.4 })
    v.noise({ filter: 'lowpass', from: 1500, to: 100, duration: 0.8, volume: 0.4, attack: 0.02 })
    v.tone({ wave: 'sawtooth', from: 110, to: 55, duration: 0.5, volume: 0.07, filter: { type: 'lowpass', from: 600 } })
  },
  spell: (v) => {
    v.tone({ from: 660, duration: 0.7, volume: 0.1, attack: 0.04 })
    v.tone({ from: 663.5, duration: 0.7, volume: 0.1, attack: 0.04 })
    v.notes([A5, E6, A5 * 2], 0.06, { wave: 'triangle', at: 0.08, duration: 0.4, volume: 0.08 })
    v.noise({ filter: 'highpass', from: 5000, duration: 0.4, volume: 0.06, attack: 0.08 })
  },
  attach: (v) => {
    v.noise({ filter: 'highpass', from: 2500, duration: 0.04, volume: 0.4, attack: 0.001 })
    v.tone({ wave: 'triangle', from: 1400, to: 1300, duration: 0.35, volume: 0.1, attack: 0.001 })
    v.tone({ from: 140, to: 70, at: 0.03, duration: 0.15, volume: 0.35 })
  },
  'trap-set': (v) => {
    v.tone({
      wave: 'square',
      from: 300,
      to: 200,
      duration: 0.06,
      volume: 0.06,
      filter: { type: 'lowpass', from: 1500 }
    })
    v.tone({
      wave: 'square',
      from: 420,
      to: 260,
      at: 0.09,
      duration: 0.06,
      volume: 0.06,
      filter: { type: 'lowpass', from: 1500 }
    })
  },
  trap: (v) => {
    v.noise({ filter: 'highpass', from: 2000, duration: 0.06, volume: 0.6, attack: 0.001 })
    v.tone({ from: 900, to: 300, duration: 0.18, volume: 0.15, attack: 0.001 })
    v.tone({ from: 120, to: 45, at: 0.05, duration: 0.3, volume: 0.5 })
  },
  move: (v) => {
    v.noise({ filter: 'bandpass', from: 400, to: 1400, q: 1.2, duration: 0.22, volume: 0.22, attack: 0.06 })
  },
  chronos: (v) => {
    v.notes([C6, G6, C7], 0.05, { wave: 'triangle', duration: 0.3, volume: 0.09 })
    v.tone({ from: 1046, to: 2093, duration: 0.35, volume: 0.04, attack: 0.05 })
  },
  draw: (v) => {
    v.noise({ filter: 'bandpass', from: 2400, to: 900, q: 1, duration: 0.12, volume: 0.22, attack: 0.02 })
  },
  burn: (v) => {
    v.noise({ filter: 'lowpass', from: 300, to: 3200, duration: 0.25, volume: 0.4, attack: 0.04 })
    v.noise({ filter: 'lowpass', from: 2600, to: 380, at: 0.2, duration: 0.4, volume: 0.3 })
  },
  fail: (v) => {
    v.tone({ wave: 'triangle', from: 330, to: 220, duration: 0.18, volume: 0.15 })
    v.tone({ wave: 'triangle', from: 262, to: 175, at: 0.15, duration: 0.25, volume: 0.15 })
  },
  phase: (v) => {
    v.tone({ from: 1318, duration: 0.6, volume: 0.07, attack: 0.002 })
    v.tone({ from: 1975, at: 0.18, duration: 0.6, volume: 0.06, attack: 0.002 })
    v.noise({ filter: 'bandpass', from: 200, to: 1500, duration: 0.6, volume: 0.1, attack: 0.3 })
  },
  step: (v) => {
    v.tone({ from: 1500, to: 1400, duration: 0.04, volume: 0.06, attack: 0.001 })
    v.noise({ filter: 'highpass', from: 4000, duration: 0.02, volume: 0.06, attack: 0.001 })
  },

  // End of a match.
  'victory-sting': (v) => {
    v.notes([G4, C5, E5, G5], 0.12, { wave: 'triangle', duration: 0.22, volume: 0.2, attack: 0.01 })
    v.chord([C5, E5, G5, C6], { wave: 'triangle', at: 0.5, duration: 1.3, volume: 0.13, attack: 0.02 })
    v.chord([C4, G4], {
      wave: 'square',
      at: 0.5,
      duration: 1.3,
      volume: 0.05,
      attack: 0.02,
      filter: { type: 'lowpass', from: 1800 }
    })
  },
  'defeat-sting': (v) => {
    v.notes([G4, EB4, C4], 0.35, { wave: 'triangle', duration: 0.6, volume: 0.2, attack: 0.02 })
    v.tone({ from: 130, to: 65, at: 1.05, duration: 1.1, volume: 0.25, attack: 0.05 })
  },

  // Programming the timeline.
  place: (v) => {
    v.noise({ filter: 'lowpass', from: 1800, to: 500, duration: 0.06, volume: 0.3, attack: 0.002 })
    v.tone({ from: 220, to: 140, duration: 0.07, volume: 0.25, attack: 0.002 })
  },
  remove: (v) => {
    v.noise({ filter: 'bandpass', from: 900, to: 2600, q: 1, duration: 0.1, volume: 0.2, attack: 0.02 })
  },
  ready: (v) => {
    v.notes([E6, B6], 0.08, { wave: 'triangle', duration: 0.3, volume: 0.1 })
  },
  tick: (v) => {
    v.tone({
      wave: 'square',
      from: 2000,
      duration: 0.02,
      volume: 0.04,
      attack: 0.001,
      filter: { type: 'lowpass', from: 3000 }
    })
  },

  // Menus, shop and packs.
  button: (v) => {
    v.tone({ from: 1000, to: 700, duration: 0.05, volume: 0.16, attack: 0.002 })
    v.noise({ filter: 'highpass', from: 3000, duration: 0.015, volume: 0.07, attack: 0.001 })
  },
  cursor: (v) => {
    v.tone({ from: 1500, duration: 0.025, volume: 0.06, attack: 0.001 })
  },
  'menu-open': (v) => {
    v.noise({ filter: 'bandpass', from: 400, to: 2400, duration: 0.18, volume: 0.12, attack: 0.04 })
    v.tone({ wave: 'triangle', from: 660, to: 990, duration: 0.13, volume: 0.07 })
  },
  'menu-close': (v) => {
    v.noise({ filter: 'bandpass', from: 2400, to: 500, duration: 0.15, volume: 0.1, attack: 0.02 })
    v.tone({ wave: 'triangle', from: 880, to: 550, duration: 0.1, volume: 0.06 })
  },
  coin: (v) => {
    const filter = { type: 'lowpass' as const, from: 4000 }

    v.tone({ wave: 'square', from: B5, duration: 0.08, volume: 0.07, filter })
    v.tone({ wave: 'square', from: E6, at: 0.07, duration: 0.35, volume: 0.07, filter })
  },
  'pack-open': (v) => {
    v.noise({ filter: 'bandpass', from: 800, to: 5000, q: 0.8, duration: 0.35, volume: 0.35, attack: 0.03 })
    v.noise({ filter: 'highpass', from: 3000, at: 0.3, duration: 0.08, volume: 0.25 })
    v.notes([C6, E6, G6], 0.05, { at: 0.32, duration: 0.3, volume: 0.07 })
  },
  'card-flip': (v) => {
    v.noise({ filter: 'bandpass', from: 1500, to: 3500, q: 1.5, duration: 0.08, volume: 0.3, attack: 0.01 })
  },
  'rare-reveal': (v) => {
    v.tone({ from: C4, to: C6, duration: 0.7, volume: 0.07, attack: 0.1 })
    v.notes([C5, G5, C6, E6, G6], 0.08, { wave: 'triangle', duration: 0.7, volume: 0.13, attack: 0.01 })
    v.chord([C7, E7], { at: 0.4, duration: 0.6, volume: 0.03, attack: 0.05 })
    v.noise({ filter: 'highpass', from: 6000, at: 0.2, duration: 0.7, volume: 0.06, attack: 0.2 })
  }
}
/** Effects that are music (they keep their notes); the rest change their pitch a little each time. */
const TUNED: SfxId[] = [
  'heal',
  'buff',
  'spell',
  'chronos',
  'phase',
  'victory-sting',
  'defeat-sting',
  'ready',
  'coin',
  'pack-open',
  'rare-reveal',
  'summon'
]
/** Evens out the loudness of the effects: the hits around 0.7, the menus softer. */
const LEVELS: Partial<Record<SfxId, number>> = {
  'hero-hit': 0.6,
  armor: 0.6,
  hit: 0.8,
  miss: 2,
  coin: 2,
  'menu-open': 1.6,
  'menu-close': 1.6,
  stun: 1.6,
  shield: 1.5,
  'trap-set': 1.6,
  move: 1.4
}

/**
 * Makes an effect into `output`, starting now. Returns how long it lasts
 * (seconds), so whoever plays it knows when it is over.
 */
export function synthesize(
  id: SfxId,
  context: BaseAudioContext,
  output: AudioNode,
  start = context.currentTime
): number {
  const level = context.createGain()

  level.gain.value = LEVELS[id] ?? 1
  level.connect(output)

  const voice = new Voice(context, level, start, TUNED.includes(id) ? 1 : random(0.93, 1.07))

  RECIPES[id](voice)
  // Lets go of the level once the effect is over.
  setTimeout(() => level.disconnect(), (voice.end - start + 0.2) * 1000)

  return voice.end - start
}
