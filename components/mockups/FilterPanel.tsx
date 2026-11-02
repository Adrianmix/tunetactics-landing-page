import React from 'react';
import { Search, SlidersHorizontal, MapPin, Music, Check } from 'lucide-react';

export function FilterPanel() {
  return (
    <div className="bg-surface border border-border rounded-2xl p-5 shadow-2xl max-w-sm w-full mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-display font-bold text-bone text-sm">Discover Collaborators</h4>
        <div className="text-xs text-signal-lime flex items-center gap-1 bg-signal-lime/10 px-2 py-1 rounded-lg">
          <SlidersHorizontal className="w-3 h-3" />
          <span>Filters active</span>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="w-4 h-4 text-text-muted absolute start-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          readOnly
          value="Producer · Tehran · Melodic Techno"
          className="w-full bg-surface-2 border border-border rounded-xl ps-9 pe-3 py-2 text-xs text-bone focus:outline-none"
        />
      </div>

      {/* Role filter chips */}
      <div className="mb-4">
        <p className="text-[11px] text-text-muted mb-2 font-medium">Role</p>
        <div className="flex flex-wrap gap-1.5">
          <span className="text-xs px-2.5 py-1 rounded-lg bg-signal-lime text-background font-semibold flex items-center gap-1">
            <Check className="w-3 h-3" /> Producer
          </span>
          <span className="text-xs px-2.5 py-1 rounded-lg bg-hot-coral/20 text-hot-coral border border-hot-coral/30 flex items-center gap-1">
            <Check className="w-3 h-3" /> Singer
          </span>
          <span className="text-xs px-2.5 py-1 rounded-lg bg-surface-2 text-text-muted border border-border">
            Songwriter
          </span>
        </div>
      </div>

      {/* Intent filter */}
      <div className="mb-4">
        <p className="text-[11px] text-text-muted mb-2 font-medium">Collab Intent</p>
        <div className="flex flex-wrap gap-1.5">
          <span className="text-xs px-2.5 py-1 rounded-lg bg-electric-violet/20 text-electric-violet border border-electric-violet/30">
            Remote Collabs
          </span>
          <span className="text-xs px-2.5 py-1 rounded-lg bg-surface-2 text-text-muted border border-border">
            Paid Work
          </span>
        </div>
      </div>

      {/* Mini results preview */}
      <div className="space-y-2 pt-2 border-t border-border">
        <div className="bg-surface-2/60 rounded-xl p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-signal-lime/20 text-signal-lime font-bold text-xs flex items-center justify-center">
              KM
            </div>
            <div>
              <p className="text-xs font-bold text-bone">Kian Music</p>
              <p className="text-[10px] text-text-muted">Producer · Lo-Fi & Ambient</p>
            </div>
          </div>
          <span className="text-[10px] bg-signal-lime/10 text-signal-lime px-2 py-0.5 rounded-full font-medium">
            Match 98%
          </span>
        </div>
      </div>
    </div>
  );
}
