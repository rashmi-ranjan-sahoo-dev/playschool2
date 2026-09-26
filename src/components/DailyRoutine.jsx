import React, { useState } from 'react';
import { Clock, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function DailyRoutine() {
  const [selectedPhase, setSelectedPhase] = useState('all');
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05, fallbackDelay: 400 });

  // Day Phase Categories
  const phases = [
    { id: 'all', label: 'Full Day Journey', icon: '☀️' },
    { id: 'morning', label: 'Morning Spark', icon: '🌅' },
    { id: 'midday', label: 'Midday Discovery', icon: '🎨' },
    { id: 'afternoon', label: 'Daycare & Rest', icon: '🧸' },
  ];

  // Clean, concise daily schedule data (reduced extra text)
  const scheduleData = [
    {
      time: '8:30 – 9:00 AM',
      phase: 'morning',
      title: 'Joyful Welcome',
      desc: 'Warm hugs by Didis, health screening & cheerful morning circle.',
      emoji: '👋',
      color: 'bg-amber-100/80 text-amber-700'
    },
    {
      time: '9:00 – 9:30 AM',
      phase: 'morning',
      title: 'Little Yogis & Shlokas',
      desc: 'Gayatri mantra chanting, animal yoga stretches & mindful breathing.',
      emoji: '🧘',
      color: 'bg-emerald-100/80 text-emerald-700'
    },
    {
      time: '9:30 – 10:30 AM',
      phase: 'morning',
      title: 'Montessori & Phonics',
      desc: 'Sensorial learning apparatus, Jolly Phonics sounds & bead counters.',
      emoji: '🧩',
      color: 'bg-sky-100/80 text-sky-700'
    },
    {
      time: '10:30 – 11:00 AM',
      phase: 'midday',
      title: 'Satvik Refreshment',
      desc: 'Fresh seasonal fruits, warm milk, steamed snacks & table manners.',
      emoji: '🍎',
      color: 'bg-rose-100/80 text-rose-700'
    },
    {
      time: '11:00 – 11:45 AM',
      phase: 'midday',
      title: 'Outdoor Splash & Play',
      desc: 'Sandcastle play, splash water fun, slides & balance beam games.',
      emoji: '🛝',
      color: 'bg-teal-100/80 text-teal-700'
    },
    {
      time: '11:45 – 12:30 PM',
      phase: 'midday',
      title: 'Story & Folk Art',
      desc: 'Panchatantra puppet theatre, Warli patterns & clay pottery.',
      emoji: '📖',
      color: 'bg-purple-100/80 text-purple-700'
    },
    {
      time: '12:30 – 1:00 PM',
      phase: 'midday',
      title: 'Wind Down & Dispersal',
      desc: 'Daily reflection song & verified OTP/RFID parent hand-off.',
      emoji: '🎒',
      color: 'bg-orange-100/80 text-orange-700'
    },
    {
      time: '1:00 – 6:30 PM',
      phase: 'afternoon',
      title: 'Daycare & Hobbies',
      desc: 'Warm satvik lunch, cozy AC nap with Didis & evening music/arts.',
      emoji: '🧸',
      color: 'bg-indigo-100/80 text-indigo-700'
    },
  ];

  const filteredSlots = selectedPhase === 'all'
    ? scheduleData
    : scheduleData.filter((item) => item.phase === selectedPhase);

  return (
    <section ref={sectionRef} id="routine" className="scroll-mt-20 sm:scroll-mt-24 py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#FFFDF9] via-amber-50/20 to-white border-y border-amber-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`routine-header text-center max-w-2xl mx-auto mb-6 sm:mb-8 reveal-init ${isVisible ? 'reveal-visible' : ''}`}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-bold uppercase tracking-wider mb-2 font-fredoka shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Structured & Joyful Rhythm</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 font-fredoka tracking-tight">
            A Day in the Life of Our <span className="text-amber-500">Little Stars</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Balanced daily flow of morning shlokas, hands-on learning, healthy meals, and joyful play.
          </p>
        </div>

        {/* Phase Filter Tabs */}
        <div className={`routine-header flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8 reveal-init ${isVisible ? 'reveal-visible' : ''} delay-75`}>
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedPhase === phase.id
                  ? 'bg-amber-500 text-slate-900 shadow-xs scale-102'
                  : 'bg-white hover:bg-amber-100/70 text-slate-600 border border-slate-200/80 shadow-2xs'
              }`}
            >
              <span className="text-sm">{phase.icon}</span>
              <span>{phase.label}</span>
            </button>
          ))}
        </div>

        {/* Horizontal Visual Stepper Line (Desktop) */}
        <div className="hidden lg:block mb-8 relative">
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-amber-200/70 -translate-y-1/2 z-0 rounded-full" />
          <div className="flex items-center justify-between relative z-10 max-w-4xl mx-auto px-2">
            {scheduleData.map((item, idx) => {
              const isSelected = activeSlotIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveSlotIndex(idx)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-2xs border transition-all duration-200 ${
                      isSelected
                        ? 'bg-amber-500 border-amber-400 text-white shadow-sm scale-110'
                        : 'bg-white border-amber-200 text-slate-700 hover:border-amber-400 hover:scale-105'
                    }`}
                  >
                    {item.emoji}
                  </div>
                  <span className={`text-[10px] font-bold font-fredoka mt-1.5 transition-colors ${
                    isSelected ? 'text-amber-600 font-extrabold' : 'text-slate-500'
                  }`}>
                    {item.time.split('–')[0].trim()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Milestone Cards Grid (Reduced Extra Data) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {filteredSlots.map((slot) => {
            const slotIndex = scheduleData.findIndex((s) => s.title === slot.title);
            const isHighlighted = activeSlotIndex === slotIndex;
            return (
              <div
                key={slot.title}
                onClick={() => setActiveSlotIndex(slotIndex)}
                className={`routine-card bg-white rounded-2xl p-4 border transition-all duration-200 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 will-change-transform ${
                  isHighlighted
                    ? 'border-amber-400 shadow-md ring-2 ring-amber-300/40'
                    : 'border-slate-200/80 hover:border-amber-300 shadow-2xs hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Top: Time Pill + Round Emoji Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-700 border border-slate-200/80 text-[11px] font-bold font-fredoka">
                      <Clock className="w-3 h-3 text-amber-500 shrink-0" />
                      <span>{slot.time}</span>
                    </span>
                    
                    <div className={`w-8 h-8 rounded-xl ${slot.color} flex items-center justify-center text-base group-hover:scale-110 transition-transform`}>
                      {slot.emoji}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold font-fredoka text-slate-800 group-hover:text-amber-600 transition-colors leading-snug mb-1.5">
                    {slot.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {slot.desc}
                  </p>
                </div>
              </div>
            );
          })}
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


