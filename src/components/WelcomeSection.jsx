import React from 'react';
import { ArrowRight, Calendar, Clock, MapPin, Sparkles, ShieldCheck, HeartHandshake, ChevronRight } from 'lucide-react';
import { upcomingIndianEvents } from '../data/schoolData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WelcomeSection({ brand, onOpenInquiryModal }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05, fallbackDelay: 400 });

  // Panchakosha 5 Dimensions (Clean, punchy data)
  const panchakoshaPillars = [
    { emoji: "🍎", sanskrit: "Annamaya", label: "Physical Health", desc: "Satvik Nutrition & Active Play", color: "hover:border-rose-300 hover:bg-rose-50/50" },
    { emoji: "🧘", sanskrit: "Pranamaya", label: "Vital Energy", desc: "Little Yogis & Breathwork", color: "hover:border-amber-300 hover:bg-amber-50/50" },
    { emoji: "🎨", sanskrit: "Manomaya", label: "Emotional Balance", desc: "Indian Sanskars & Moral Tales", color: "hover:border-purple-300 hover:bg-purple-50/50" },
    { emoji: "🔬", sanskrit: "Vijnanamaya", label: "Curious Intellect", desc: "Phonics & STEM Discovery", color: "hover:border-sky-300 hover:bg-sky-50/50" },
    { emoji: "🪷", sanskrit: "Anandamaya", label: "Joyful Spirit", desc: "Festivals & Cultural Arts", color: "hover:border-emerald-300 hover:bg-emerald-50/50" }
  ];

  const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300', 'delay-375'];

  return (
    <section ref={sectionRef} id="why-us" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-[#FFFDF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid: Left Column (8 cols) + Right Column (4 cols) - Layout preserved */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column (8 cols): Why Us, Panchakosha & 2 Highlight Cards */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">

            {/* Header Badge & Title */}
            <div className={`welcome-header reveal-init ${isVisible ? 'reveal-visible' : ''}`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3.5 font-fredoka shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span>Why Parents Choose {brand.shortName}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-800 font-fredoka tracking-tight leading-tight">
                Where Indian Sanskars Meet{' '}
                <span className="text-coral-500 relative inline-block">
                  Modern Early Education
                  <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-amber-300" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q 50 20, 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Crisp, Concise Lead Statement (Reduced Text Clutter) */}
            <p className={`welcome-header text-slate-600 text-base sm:text-lg leading-relaxed font-normal reveal-init ${isVisible ? 'reveal-visible' : ''} delay-75`}>
              Guided by India's timeless <strong className="text-slate-800 font-semibold">Panchakosha philosophy</strong> and the modern <strong className="text-slate-800 font-semibold">NEP 2020 ECCE framework</strong>, we create a loving second home where your child develops confidence, cultural pride, and joyful curiosity.
            </p>

            {/* Panchakosha 5 Dimensions (Clean, Sleek Visual Cards) */}
            <div className={`panchakosha-container bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-amber-50/70 border border-amber-200/70 rounded-3xl p-5 sm:p-6 shadow-sm reveal-init ${isVisible ? 'reveal-visible' : ''} delay-150`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 font-fredoka flex items-center gap-2">
                  <span className="text-base">🪷</span>
                  <span>The Panchakosha 5-Fold Child Growth System</span>
                </h3>
                <span className="text-[11px] font-semibold text-amber-700/80">Holistic Mind, Body & Soul</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
                {panchakoshaPillars.map((p, idx) => (
                  <div
                    key={idx}
                    className={`panchakosha-card bg-white p-3 rounded-2xl border border-amber-100/90 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between group cursor-default ${p.color} ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                      } reveal-scale-init ${isVisible ? 'reveal-visible' : ''} ${delays[idx] || ''}`}
                  >
                    <div>
                      <div className="text-2xl mb-1.5 group-hover:scale-125 transition-transform duration-300 inline-block">
                        {p.emoji}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-coral-600 font-fredoka block">
                        {p.sanskrit}
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 leading-snug mt-0.5">
                        {p.label}
                      </h4>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1.5 pt-1.5 border-t border-slate-100 leading-tight">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 SuperOwly Highlight Cards (Clean, Attractive, Reduced Data) */}
            <div className="welcome-highlight-grid grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-1">

              {/* Card 1: Admissions */}
              <div className={`welcome-highlight-card group bg-white p-6 rounded-3xl border border-coral-100/90 shadow-sm hover:shadow-xl hover:border-coral-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 reveal-init ${isVisible ? 'reveal-visible' : ''} delay-225`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-coral-100 text-coral-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-coral-500 group-hover:text-white transition-all duration-300 shadow-2xs">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-coral-50 text-coral-600 border border-coral-200/60 font-fredoka">
                      Admissions Open
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-fredoka text-slate-800 group-hover:text-coral-600 transition-colors mb-2">
                    Admissions 2027-28
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Enrolling for Playgroup, Nursery, LKG & UKG. Limited to 15 students per batch for dedicated 1:8 mentor attention.
                  </p>
                </div>

                <button
                  onClick={() => onOpenInquiryModal('Vacancies Card')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-600 hover:text-coral-700 uppercase tracking-wider font-fredoka group-hover:translate-x-1 transition-all cursor-pointer pt-2 border-t border-slate-100"
                >
                  <span>Apply for Admission</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Card 2: Campus Safety */}
              <div className={`welcome-highlight-card group bg-white p-6 rounded-3xl border border-emerald-100/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 reveal-init ${isVisible ? 'reveal-visible' : ''} delay-300`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-fredoka">
                      100% Peace of Mind
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-fredoka text-slate-800 group-hover:text-emerald-700 transition-colors mb-2">
                    Safe & Loving Campus
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Live mobile CCTV streaming for parents, loving verified Didis, child-safe rounded furniture, and on-call pediatric care.
                  </p>
                </div>

                <button
                  onClick={() => onOpenInquiryModal('Safety Card')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-wider font-fredoka group-hover:translate-x-1 transition-all cursor-pointer pt-2 border-t border-slate-100"
                >
                  <span>Explore Safety Standards</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Right Column (4 cols): Upcoming Celebrations Widget - Layout Preserved */}
          <div className={`welcome-events-widget lg:col-span-4 bg-white p-6 sm:p-7 rounded-3xl border border-amber-100 shadow-xl lg:sticky lg:top-24 reveal-init ${isVisible ? 'reveal-visible' : ''} delay-150`}>

            <div className="border-b border-slate-100 pb-3.5 mb-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-coral-500 font-fredoka block">
                  Campus Life
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 font-fredoka">
                  Upcoming Events
                </h3>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
            </div>

            {/* Clean Event Cards with Micro-Animations */}
            <div className="space-y-4">
              {upcomingIndianEvents.slice(0, 3).map((event) => (
                <div
                  key={event.id}
                  className="group p-3 rounded-2xl hover:bg-amber-50/70 border border-slate-100 hover:border-amber-200 transition-all duration-300 cursor-pointer"
                  onClick={() => onOpenInquiryModal(`Event: ${event.title}`)}
                >
                  <div className="flex gap-3.5 items-start">

                    {/* Event Date Badge (SuperOwly signature calendar block) */}
                    <div className="w-13 h-13 rounded-2xl bg-amber-400 group-hover:bg-amber-500 text-slate-900 flex flex-col items-center justify-center font-fredoka shrink-0 shadow-2xs transition-colors">
                      <span className="text-[10px] font-bold uppercase leading-none tracking-wide text-slate-800">
                        {event.date.split(' ')[0]}
                      </span>
                      <span className="text-lg font-extrabold leading-none mt-0.5">
                        {event.date.split(' ')[1]}
                      </span>
                    </div>

                    {/* Event Summary */}
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] uppercase font-bold text-coral-600 bg-coral-50 px-2 py-0.5 rounded-full inline-block mb-1">
                        {event.badge}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-coral-600 transition-colors leading-snug truncate">
                        {event.title}
                      </h4>
                      <div className="text-[11px] text-slate-500 mt-1.5 space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-amber-500 shrink-0" />
                          <span className="truncate">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <button
                onClick={() => onOpenInquiryModal('Festivals RSVP')}
                className="w-full py-3 rounded-full bg-slate-900 hover:bg-coral-500 text-white font-fredoka text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Join Our Celebrations</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

