import React from 'react';
import { Play, Heart, MessageSquare, Share2, Sparkles, Music2 } from 'lucide-react';

export function ReelsFeed() {
  return (
    <div className="relative bg-surface border border-border rounded-3xl p-3 shadow-2xl max-w-xs w-full mx-auto overflow-hidden">
      {/* Phone screen container */}
      <div className="relative bg-gradient-to-b from-[#1C1C22] via-[#141418] to-[#0A0A0C] rounded-2xl h-[440px] flex flex-col justify-between p-4 overflow-hidden border border-border/40">

        {/* Top status bar mock */}
        <div className="flex items-center justify-between text-[10px] text-text-muted px-1">
          <span>9:41</span>
          <div className="w-16 h-3 bg-surface-2 rounded-full" />
          <span>5G</span>
        </div>

        {/* Center play button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-bone/10 backdrop-blur-md border border-bone/20 flex items-center justify-center text-bone shadow-2xl">
            <Play className="w-6 h-6 fill-bone ms-0.5" />
          </div>
        </div>

        {/* Right / End Action Stack */}
        <div className="absolute end-3 bottom-24 flex flex-col items-center gap-4 z-10">
          <button className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center text-hot-coral group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 fill-hot-coral/20" />
            </div>
            <span className="text-[10px] text-bone font-medium">2.4k</span>
          </button>

          <button className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center text-bone group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-[10px] text-bone font-medium">184</span>
          </button>

          <button className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center text-bone group-hover:scale-110 transition-transform">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] text-bone font-medium">Share</span>
          </button>
        </div>

        {/* Bottom Info overlay */}
        <div className="space-y-3 z-10 pe-12">
          {/* Use this sound pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-signal-lime/20 border border-signal-lime/40 text-signal-lime text-[11px] font-medium backdrop-blur-md">
            <Music2 className="w-3 h-3 animate-pulse" />
            <span>Use this sound · 12 collabs</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-hot-coral/30 border border-hot-coral/50 flex items-center justify-center font-display font-bold text-xs text-bone">
              NS
            </div>
            <div>
              <p className="text-xs font-bold text-bone">Neda Singer</p>
              <p className="text-[10px] text-text-muted">Vocal run over 808 beat — who&apos;s dropping a verse?</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
