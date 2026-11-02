import React from 'react';
import { Send, CheckCheck } from 'lucide-react';

export function MessageThread() {
  return (
    <div className="bg-surface border border-border rounded-2xl p-5 shadow-2xl max-w-sm w-full mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-ice-mint/20 text-ice-mint font-bold text-xs flex items-center justify-center">
            SZ
          </div>
          <div>
            <h4 className="font-display font-bold text-bone text-xs">Sahar Zand</h4>
            <p className="text-[10px] text-signal-lime">Online now</p>
          </div>
        </div>
        <span className="text-[10px] bg-ice-mint/10 text-ice-mint px-2 py-0.5 rounded">
          Verified Collab
        </span>
      </div>

      {/* Messages */}
      <div className="space-y-3 mb-4">
        {/* Incoming message 1 */}
        <div className="flex items-start gap-2 max-w-[85%]">
          <div className="w-6 h-6 rounded-full bg-ice-mint/20 text-ice-mint text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
            SZ
          </div>
          <div className="bg-surface-2 border border-border rounded-2xl rounded-ss-sm p-3 text-xs text-bone">
            Hey Aryan! Loved your beat on the reels feed. Want to add vocals to a deep house demo?
          </div>
        </div>

        {/* Incoming message 2 */}
        <div className="flex items-start gap-2 max-w-[85%]">
          <div className="w-6 h-6 rounded-full bg-ice-mint/20 text-ice-mint text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
            SZ
          </div>
          <div className="bg-surface-2 border border-border rounded-2xl rounded-ss-sm p-3 text-xs text-bone">
            Here are the stems: tunetactics.ir/demo/sahar-wip
          </div>
        </div>

        {/* Outgoing reply */}
        <div className="flex items-start gap-2 max-w-[85%] ms-auto flex-row-reverse">
          <div className="bg-signal-lime text-background rounded-2xl rounded-ee-sm p-3 text-xs font-medium">
            This is incredible! Downloading stems right now. Let&apos;s build 🚀
          </div>
        </div>
      </div>

      {/* Reply input mock */}
      <div className="flex items-center gap-2 bg-surface-2 border border-border rounded-xl px-3 py-2">
        <input
          type="text"
          readOnly
          value="Dropping vocal take in 10 mins..."
          className="w-full bg-transparent text-xs text-bone/70 focus:outline-none"
        />
        <button className="w-7 h-7 rounded-lg bg-signal-lime text-background flex items-center justify-center shrink-0">
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
