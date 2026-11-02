import React from 'react';
import { Play, CheckCircle2, Music, Sparkles } from 'lucide-react';

export function ProfileCard() {
  return (
    <div className="bg-surface border border-border rounded-2xl p-6 shadow-2xl max-w-sm w-full mx-auto relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute -top-24 -end-24 w-48 h-48 bg-signal-lime/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header / Avatar */}
      <div className="flex items-start gap-4 mb-5">
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-signal-lime/20 via-electric-violet/20 to-hot-coral/20 border border-border flex items-center justify-center font-display font-bold text-lg text-bone">
            AR
          </div>
          <div className="absolute bottom-0 end-0 w-3.5 h-3.5 bg-signal-lime rounded-full border-2 border-surface" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="font-display font-bold text-bone">Aryan Roudi</h4>
            <CheckCircle2 className="w-4 h-4 text-signal-lime" />
          </div>
          <p className="text-xs text-text-muted">@aryanbeats · Active 2m ago</p>
        </div>
      </div>

      {/* Role chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-signal-lime/10 text-signal-lime border border-signal-lime/20">
          Producer
        </span>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-hot-coral/10 text-hot-coral border border-hot-coral/20">
          Singer
        </span>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-surface-2 text-text-muted border border-border">
          Hip-Hop / R&B
        </span>
      </div>

      {/* Embedded track / Waveform player */}
      <div className="bg-surface-2/70 border border-border rounded-xl p-3.5 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-signal-lime text-background flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Play className="w-3.5 h-3.5 fill-background ms-0.5" />
            </button>
            <div>
              <p className="text-xs font-medium text-bone">Midnight Tehran (WIP)</p>
              <p className="text-[10px] text-text-muted">140 BPM · F# min</p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-signal-lime bg-signal-lime/10 px-2 py-0.5 rounded">
            0:34 / 2:15
          </span>
        </div>
        {/* Waveform visual bars */}
        <div className="flex items-center gap-0.5 h-6 px-1">
          {[40, 65, 30, 85, 90, 45, 60, 100, 75, 50, 40, 80, 95, 60, 30, 70, 85, 50, 40, 60, 90, 70, 40, 30, 50, 75, 90, 60, 40, 30].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-full transition-all ${i < 14 ? 'bg-signal-lime' : 'bg-border'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Looking for */}
      <div className="bg-surface-2/40 border border-border/60 rounded-xl p-3 mb-4">
        <div className="flex items-center gap-1.5 text-xs text-electric-violet mb-1 font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Looking for collaboration</span>
        </div>
        <p className="text-xs text-bone/90">
          Vocalist for a melodic trap EP. Needs Persian/English bilingual delivery.
        </p>
      </div>

      {/* Connect button */}
      <button className="w-full py-2.5 rounded-xl bg-signal-lime text-background font-display font-bold text-xs hover:opacity-95 transition-opacity shadow-lg">
        Connect & Collab
      </button>
    </div>
  );
}
