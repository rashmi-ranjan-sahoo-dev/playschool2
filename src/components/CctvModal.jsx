import React from 'react';
import { X, Video, Lock } from 'lucide-react';

export default function CctvModal({ isOpen, onClose, brand }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative max-w-lg w-full bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-slate-950 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Video className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-fredoka text-white">
                Parent Live CCTV Portal
              </h3>
              <p className="text-xs text-slate-400">
                Secure 256-Bit Encrypted HD Streaming
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Simulated Camera Feed */}
        <div className="p-6 space-y-5">
          <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950">
            <img
              src="/images/hero_slide2.jpg"
              alt="Live Indian classroom view"
              className="w-full h-full object-cover filter brightness-90"
            />
            {/* Live Rec Indicator */}
            <div className="absolute top-3 left-3 bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>LIVE • CAM 02 (ANAND VATIKA)</span>
            </div>

            <div className="absolute bottom-2 right-3 text-[10px] font-mono text-white/80 bg-black/60 px-2 py-0.5 rounded">
              {brand.shortName} SECURE STREAM • 1080p
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <div className="text-slate-400 text-[10px] uppercase font-bold">Classroom Cam</div>
              <div className="text-emerald-400 font-semibold mt-0.5">Online & Active</div>
            </div>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <div className="text-slate-400 text-[10px] uppercase font-bold">Play Arena Cam</div>
              <div className="text-emerald-400 font-semibold mt-0.5">Online & Active</div>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-xs text-amber-200 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-amber-300">
              <Lock className="w-3.5 h-3.5" />
              <span>Registered Parents Login</span>
            </div>
            <p className="text-[11px] text-amber-200/80 leading-relaxed">
              Upon confirmed admission, parents are issued personal 2-Factor credentials to view live feeds on iOS & Android smartphones during class hours.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-fredoka text-xs uppercase tracking-wider transition-colors shadow"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
