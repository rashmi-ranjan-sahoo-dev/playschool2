import React, { useState, useRef, useEffect } from 'react';
import { Clock, Heart, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function DailyRoutine() {
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);
  const [selectedPhase, setSelectedPhase] = useState('all');
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05, fallbackDelay: 400 });

  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const isProgrammaticScroll = useRef(false);

  // Day Phase Categories for quick jumps
  const phases = [
    { id: 'all', label: 'Full Day Journey', icon: '☀️', startIdx: 0 },
    { id: 'morning', label: 'Morning Spark', icon: '🌅', startIdx: 0 },
    { id: 'midday', label: 'Midday Discovery', icon: '🎨', startIdx: 3 },
    { id: 'afternoon', label: 'Daycare & Rest', icon: '🧸', startIdx: 7 },
  ];

  // Daily Schedule items in chronological sequence
  const scheduleData = [
    {
      time: '8:30 – 9:00 AM',
      shortTime: '8:30 AM',
      phase: 'morning',
      phaseLabel: 'Morning Spark',
      title: 'Joyful Welcome',
      desc: 'Warm hugs by Didis, gentle health screening & cheerful morning circle song.',
      emoji: '👋',
      color: 'bg-amber-100/90 text-amber-700 border-amber-200'
    },
    {
      time: '9:00 – 9:30 AM',
      shortTime: '9:00 AM',
      phase: 'morning',
      phaseLabel: 'Morning Spark',
      title: 'Little Yogis & Shlokas',
      desc: 'Gayatri mantra chanting, playful animal yoga stretches & mindful breathing exercises.',
      emoji: '🧘',
      color: 'bg-emerald-100/90 text-emerald-700 border-emerald-200'
    },
    {
      time: '9:30 – 10:30 AM',
      shortTime: '9:30 AM',
      phase: 'morning',
      phaseLabel: 'Morning Spark',
      title: 'Montessori & Phonics',
      desc: 'Sensorial learning apparatus, Jolly Phonics sounds & tactile wooden bead counters.',
      emoji: '🧩',
      color: 'bg-sky-100/90 text-sky-700 border-sky-200'
    },
    {
      time: '10:30 – 11:00 AM',
      shortTime: '10:30 AM',
      phase: 'midday',
      phaseLabel: 'Midday Discovery',
      title: 'Satvik Refreshment',
      desc: 'Fresh seasonal fruits, warm milk, steamed snacks & positive table dining manners.',
      emoji: '🍎',
      color: 'bg-rose-100/90 text-rose-700 border-rose-200'
    },
    {
      time: '11:00 – 11:45 AM',
      shortTime: '11:00 AM',
      phase: 'midday',
      phaseLabel: 'Midday Discovery',
      title: 'Outdoor Splash & Play',
      desc: 'Sandcastle play, splash water fountain fun, slides & child-safe balance beam games.',
      emoji: '🛝',
      color: 'bg-teal-100/90 text-teal-700 border-teal-200'
    },
    {
      time: '11:45 – 12:30 PM',
      shortTime: '11:45 AM',
      phase: 'midday',
      phaseLabel: 'Midday Discovery',
      title: 'Story & Folk Art',
      desc: 'Panchatantra puppet theatre, Warli patterns, nursery rhymes & clay pottery modeling.',
      emoji: '📖',
      color: 'bg-purple-100/90 text-purple-700 border-purple-200'
    },
    {
      time: '12:30 – 1:00 PM',
      shortTime: '12:30 PM',
      phase: 'midday',
      phaseLabel: 'Midday Discovery',
      title: 'Wind Down & Dispersal',
      desc: 'Daily gratitude reflection song & verified OTP / RFID parent hand-off protocol.',
      emoji: '🎒',
      color: 'bg-orange-100/90 text-orange-700 border-orange-200'
    },
    {
      time: '1:00 – 6:30 PM',
      shortTime: '1:00 PM',
      phase: 'afternoon',
      phaseLabel: 'Daycare & Rest',
      title: 'Daycare & Hobbies',
      desc: 'Warm satvik lunch, cozy AC nap with Didis, evening storytelling, crafts & puzzle play.',
      emoji: '🧸',
      color: 'bg-indigo-100/90 text-indigo-700 border-indigo-200'
    },
  ];

  // Smoothly scroll the container to center a specific activity card
  const scrollToSlot = (index) => {
    setActiveSlotIndex(index);
    isProgrammaticScroll.current = true;

    const container = scrollContainerRef.current;
    const card = cardRefs.current[index];

    if (container && card) {
      const containerWidth = container.offsetWidth;
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const targetScroll = cardLeft - (containerWidth / 2) + (cardWidth / 2);

      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth'
      });

      // Clear programmatic flag after scroll completes
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 550);
    }
  };

  // Synchronize active slot when user manually scrolls / swipes
  const handleScroll = () => {
    if (isProgrammaticScroll.current || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeSlotIndex) {
      setActiveSlotIndex(closestIndex);
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeSlotIndex - 1);
    scrollToSlot(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(scheduleData.length - 1, activeSlotIndex + 1);
    scrollToSlot(nextIdx);
  };

  const handlePhaseClick = (phase) => {
    setSelectedPhase(phase.id);
    scrollToSlot(phase.startIdx);
  };

  // Calculate timeline progress percentage
  const progressPercent = (activeSlotIndex / (scheduleData.length - 1)) * 100;

  return (
    <section 
      ref={sectionRef} 
      id="routine" 
      className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FFFDF9] via-amber-50/20 to-white border-y border-amber-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-6 sm:mb-8 reveal-init ${isVisible ? 'reveal-visible' : ''}`}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-bold uppercase tracking-wider mb-2.5 font-fredoka shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Interactive Daily Rhythm</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 font-fredoka tracking-tight">
            A Day in the Life of Our <span className="text-amber-500">Little Stars</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Click any time point or arrow to explore each hour from morning prayer to evening daycare pickup.
          </p>
        </div>

        {/* Phase Filter Quick-Jump Pills */}
        <div className={`flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8 reveal-init ${isVisible ? 'reveal-visible' : ''} delay-75`}>
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => handlePhaseClick(phase)}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedPhase === phase.id
                  ? 'bg-amber-500 text-slate-900 shadow-sm scale-105'
                  : 'bg-white hover:bg-amber-100/70 text-slate-600 border border-slate-200/80 shadow-2xs'
              }`}
            >
              <span className="text-sm">{phase.icon}</span>
              <span>{phase.label}</span>
            </button>
          ))}
        </div>

        {/* Interactive Connecting Time Stepper (Click any time to scroll left/right) */}
        <div className={`mb-6 sm:mb-8 reveal-init ${isVisible ? 'reveal-visible' : ''} delay-150`}>
          
          {/* Desktop/Tablet Continuous Timeline with Progress Bar */}
          <div className="relative max-w-5xl mx-auto px-4 hidden sm:block">
            {/* Background connecting bar */}
            <div className="absolute top-5 left-10 right-10 h-1.5 bg-amber-100 rounded-full z-0" />
            
            {/* Active animated progress bar */}
            <div 
              className="absolute top-5 left-10 h-1.5 bg-gradient-to-r from-amber-400 via-coral-400 to-amber-500 rounded-full z-0 transition-all duration-500 ease-out"
              style={{ width: `calc((100% - 80px) * ${progressPercent / 100})` }}
            />

            {/* Interactive Time Nodes */}
            <div className="flex items-center justify-between relative z-10">
              {scheduleData.map((item, idx) => {
                const isActive = activeSlotIndex === idx;
                const isPast = idx < activeSlotIndex;

                return (
                  <button
                    key={idx}
                    onClick={() => scrollToSlot(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                    aria-label={`Scroll to ${item.title} at ${item.shortTime}`}
                  >
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center text-base sm:text-lg transition-all duration-300 select-none ${
                        isActive
                          ? 'bg-amber-500 text-white shadow-lg ring-4 ring-amber-300/50 scale-125 -translate-y-1'
                          : isPast
                          ? 'bg-amber-100 text-amber-800 border-2 border-amber-300 hover:scale-110'
                          : 'bg-white border-2 border-slate-200 text-slate-600 hover:border-amber-400 hover:scale-110'
                      }`}
                    >
                      <span className={isActive ? 'animate-bounce-subtle' : ''}>{item.emoji}</span>
                    </div>

                    <span className={`text-[10px] sm:text-[11px] font-bold font-fredoka mt-2 transition-all whitespace-nowrap ${
                      isActive 
                        ? 'text-coral-600 scale-110 font-extrabold' 
                        : 'text-slate-500 group-hover:text-amber-600'
                    }`}>
                      {item.shortTime}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Horizontal Scrollable Time Chips (< sm screens) */}
          <div className="sm:hidden overflow-x-auto no-scrollbar py-2 px-1 flex gap-2">
            {scheduleData.map((item, idx) => {
              const isActive = activeSlotIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => scrollToSlot(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-fredoka whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-900 shadow-sm scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 shadow-2xs'
                  }`}
                >
                  <span>{item.emoji}</span>
                  <span>{item.shortTime}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Top Controls Bar: Active Indicator + Navigation Arrows */}
        <div className="flex items-center justify-between mb-3 px-1 sm:px-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
            <span className="text-xs sm:text-sm font-bold font-fredoka text-slate-700">
              Activity {activeSlotIndex + 1} of {scheduleData.length}:{' '}
              <span className="text-coral-600 font-extrabold">
                {scheduleData[activeSlotIndex].title}
              </span>
            </span>
          </div>

          {/* Left & Right Smooth Scroll Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              disabled={activeSlotIndex === 0}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-amber-50 hover:border-amber-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 shadow-2xs cursor-pointer"
              aria-label="Scroll left to previous time"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeSlotIndex === scheduleData.length - 1}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-amber-50 hover:border-amber-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 shadow-2xs cursor-pointer"
              aria-label="Scroll right to next time"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* ONE SINGLE ROW CAROUSEL TRACK (Responsive for PC, Tablet & Mobile) */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex flex-nowrap gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1 no-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {scheduleData.map((slot, idx) => {
              const isHighlighted = activeSlotIndex === idx;

              return (
                <div
                  key={slot.title}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  onClick={() => scrollToSlot(idx)}
                  className={`flex-none w-[270px] sm:w-[310px] lg:w-[330px] snap-center rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                    isHighlighted
                      ? 'border-amber-400 bg-gradient-to-b from-amber-50/80 via-white to-white shadow-xl ring-2 ring-amber-400/60 scale-[1.02] -translate-y-1'
                      : 'border-slate-200/90 bg-white hover:border-amber-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5 opacity-90 hover:opacity-100'
                  }`}
                >
                  <div>
                    {/* Top Row: Time Pill + Category Emoji Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-fredoka transition-colors ${
                        isHighlighted 
                          ? 'bg-amber-500 text-white shadow-xs' 
                          : 'bg-slate-100 text-slate-700 border border-slate-200/80'
                      }`}>
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{slot.time}</span>
                      </span>

                      <div className={`w-9 h-9 rounded-xl ${slot.color} border flex items-center justify-center text-lg group-hover:scale-110 transition-transform shadow-2xs`}>
                        {slot.emoji}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold font-fredoka text-slate-800 group-hover:text-coral-600 transition-colors leading-snug mb-1.5">
                      {slot.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {slot.desc}
                    </p>
                  </div>

                  {/* Bottom: Phase Label & Active Status indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-fredoka">
                    <span className="text-slate-400 uppercase tracking-wider font-semibold">
                      {slot.phaseLabel}
                    </span>
                    {isHighlighted ? (
                      <span className="inline-flex items-center gap-1 text-coral-600 font-bold">
                        <Sparkles className="w-3 h-3 text-coral-500" />
                        <span>Active View</span>
                      </span>
                    ) : (
                      <span className="text-slate-400 group-hover:text-amber-600 transition-colors">
                        Click to view →
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="routine-banner mt-8 bg-gradient-to-r from-amber-500 to-coral-500 text-white rounded-2xl p-3.5 sm:p-4.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
              <Heart className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold font-fredoka">
                Flexible Half-Day (12:30 PM) & Full-Day Daycare (6:30 PM) Available
              </h4>
              <p className="text-[11px] text-white/90">
                Live mobile CCTV access & daily digital WhatsApp logs shared with parents.
              </p>
            </div>
          </div>
          <a
            href="#programs"
            className="px-4 py-1.5 rounded-xl bg-white hover:bg-slate-900 text-slate-900 hover:text-white font-fredoka text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-2xs cursor-pointer"
          >
            Explore Programs
          </a>
        </div>

      </div>
    </section>
  );
}
