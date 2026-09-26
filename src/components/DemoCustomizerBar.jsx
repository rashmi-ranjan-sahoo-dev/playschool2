import React, { useState } from 'react';
import { Sliders, Sparkles, ChevronDown, Check, Phone, MapPin } from 'lucide-react';
import { brandPresets } from '../config/brandConfig';

export default function DemoCustomizerBar({ activeBrand, onSelectBrand, onCustomNameChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={`transition-all duration-300 z-50 fixed bottom-4 right-4 ${isMinimized ? 'w-auto' : 'max-w-md w-full'}`}>
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/90 text-white backdrop-blur shadow-2xl rounded-full border border-amber-400/50 hover:bg-slate-800 text-xs font-semibold tracking-wide transition-all hover:scale-105"
        >
          <Sliders className="w-4 h-4 text-amber-400" />
          <span>Demo Switcher ({activeBrand.shortName})</span>
        </button>
      ) : (
        <div className="bg-slate-900/95 text-slate-100 backdrop-blur-md rounded-2xl shadow-2xl border border-amber-400/30 overflow-hidden text-sm p-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-amber-500/20 text-amber-400 rounded-lg">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <h4 className="font-bold text-white text-xs tracking-wider uppercase">Demo Preset Switcher</h4>
                <p className="text-[11px] text-slate-400">Instantly rebrand for client demo</p>
              </div>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              Minimize
            </button>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
              Select School Preset:
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              {Object.values(brandPresets).map((preset) => {
                const isSelected = activeBrand.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => onSelectBrand(preset)}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                      isSelected
                        ? 'bg-amber-500/20 border border-amber-400 text-amber-300 font-medium'
                        : 'bg-slate-800/60 hover:bg-slate-800 border border-transparent text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{preset.logoEmoji}</span>
                      <div>
                        <div className="text-xs font-semibold text-white">{preset.name}</div>
                        <div className="text-[10px] text-slate-400 flex items-center gap-2">
                          <span>{preset.contact.city}</span>
                          <span>•</span>
                          <span>{preset.tagline.substring(0, 30)}...</span>
                        </div>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Logo, Phone, City & Theme update across entire site</span>
          </div>
        </div>
      )}
    </div>
  );
}
