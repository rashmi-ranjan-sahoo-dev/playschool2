import React, { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function PageLoader({ brand, onComplete }) {
  const [progress, setProgress] = useState(0);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const loadingPhrases = [
    "Preparing joyful classrooms...",
    "Rolling out toddler yoga mats...",
    "Preparing fresh Satvik snacks...",
    "Lighting up little smiles...",
    "Welcome to Bal Sanskar!"
  ];

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cycle phrases based on progress
    if (progress < 25) setLoadingTextIndex(0);
    else if (progress < 50) setLoadingTextIndex(1);
    else if (progress < 75) setLoadingTextIndex(2);
    else if (progress < 95) setLoadingTextIndex(3);
    else setLoadingTextIndex(4);

    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsRemoved(true);
          onComplete?.();
        }, 650); // Match exit transition
      }, 350);

      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#FFFDF9] via-amber-50 to-orange-50 transition-all duration-700 ease-in-out select-none ${
        isExiting
          ? 'opacity-0 -translate-y-6 pointer-events-none scale-102'
          : 'opacity-100 translate-y-0'
      }`}
    >
      {/* Decorative Floating Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-amber-200/40 blur-2xl animate-pulse" />
      <div className="absolute bottom-12 right-12 w-48 h-48 rounded-full bg-coral-200/40 blur-3xl animate-pulse delay-500" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-emerald-200/40 blur-xl animate-pulse delay-300" />

      {/* Main Loader Content Box */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        
        {/* Animated Mascot / Badge Container */}
        <div className="relative mb-6">
          {/* Pulsing glow ring */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-amber-400 via-coral-400 to-rose-400 opacity-60 blur-md animate-spin-slow" />
          
          {/* Mascot Circle */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-2xl border-4 border-amber-300 flex items-center justify-center transform transition-transform hover:scale-105">
            <span className="text-4xl sm:text-5xl animate-bounce-subtle select-none">
              🦚
            </span>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md border-2 border-white">
              <Sparkles className="w-4 h-4 animate-spin" />
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-2xl sm:text-3xl font-extrabold font-fredoka text-slate-900 tracking-tight mb-1">
          {brand?.name || 'Bal Sanskar Play School'}
        </h1>
        <p className="text-xs sm:text-sm font-fredoka font-semibold text-coral-600 uppercase tracking-widest mb-6 flex items-center gap-1.5">
          <span>Sanskars</span>
          <span>•</span>
          <span>Safety</span>
          <span>•</span>
          <span>Smart Play</span>
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 sm:w-72 bg-amber-200/60 rounded-full h-3.5 p-0.5 shadow-inner mb-3 overflow-hidden border border-amber-300/80">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 via-coral-500 to-rose-500 transition-all duration-200 ease-out shadow-sm relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer light streak */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_1.2s_infinite]" />
          </div>
        </div>

        {/* Percentage and playful rotating status text */}
        <div className="flex items-center justify-between w-64 sm:w-72 text-xs font-fredoka mb-2 text-slate-600">
          <span className="font-semibold truncate max-w-[200px]">
            {loadingPhrases[loadingTextIndex]}
          </span>
          <span className="font-bold text-slate-800 tabular-nums">
            {progress}%
          </span>
        </div>

        {/* Bottom micro assurance */}
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium mt-3 bg-white/70 px-3 py-1 rounded-full border border-amber-200/60 backdrop-blur-xs">
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          <span>NEP 2020 ECCE & Satvik Nutrition</span>
        </div>

      </div>
    </div>
  );
}
