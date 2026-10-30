// Pure Web Audio API ambient automotive soundscape synthesizer
class AudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private gainNode: GainNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private oscLow: OscillatorNode | null = null;
  private oscHarmonic: OscillatorNode | null = null;
  private bufferSource: AudioBufferSourceNode | null = null;

  public init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();
  }

  public toggle(): boolean {
    if (!this.ctx) {
      this.init();
    }
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  private start() {
    if (!this.ctx) return;

    try {
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.06, this.ctx.currentTime + 2.5);

      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(140, this.ctx.currentTime);

      // Low engine hum (45Hz tuned drone)
      this.oscLow = this.ctx.createOscillator();
      this.oscLow.type = 'sine';
      this.oscLow.frequency.setValueAtTime(46, this.ctx.currentTime);

      // Warm harmonic (92Hz octave)
      this.oscHarmonic = this.ctx.createOscillator();
      this.oscHarmonic.type = 'triangle';
      this.oscHarmonic.frequency.setValueAtTime(92.4, this.ctx.currentTime);

      // Subtle aerodynamic wind / road pink noise buffer
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.03;
      }
      this.bufferSource = this.ctx.createBufferSource();
      this.bufferSource.buffer = noiseBuffer;
      this.bufferSource.loop = true;

      // Connect graph
      this.oscLow.connect(this.filterNode);
      this.oscHarmonic.connect(this.filterNode);
      this.bufferSource.connect(this.filterNode);

      this.filterNode.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.oscLow.start();
      this.oscHarmonic.start();
      this.bufferSource.start();

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  private stop() {
    if (!this.ctx || !this.gainNode) return;
    try {
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      setTimeout(() => {
        try {
          this.oscLow?.stop();
          this.oscHarmonic?.stop();
          this.bufferSource?.stop();
          this.oscLow?.disconnect();
          this.oscHarmonic?.disconnect();
          this.bufferSource?.disconnect();
        } catch {
          // ignore
        }
        this.isPlaying = false;
      }, 1250);
    } catch {
      this.isPlaying = false;
    }
  }
}

export const audioEngine = new AudioEngine();
