import React from 'react';
import { ArrowRight, GraduationCap, Apple, ShieldCheck } from 'lucide-react';
import { schoolPillars } from '../data/schoolData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = {
  GraduationCap: GraduationCap,
  Apple: Apple,
  ShieldCheck: ShieldCheck
};

export default function ThreePillars({ 
  onExploreClasses,
  onOpenMealModal,
  onExploreDaycare,
  onOpenInquiryModal 
}) {
  const [containerRef, isVisible] = useScrollReveal({ threshold: 0.05, fallbackDelay: 300 });

  const handlePillarClick = (pillar) => {
    if (pillar.id === 'early-years') {
      if (onExploreClasses) {
        onExploreClasses();
      } else {
        const el = document.getElementById('programs');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (pillar.id === 'satvik-meals') {
      if (onOpenMealModal) {
        onOpenMealModal();
      } else {
        const el = document.getElementById('routine');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (pillar.id === 'safe-daycare') {
      if (onExploreDaycare) {
        onExploreDaycare();
      } else {
        const el = document.getElementById('programs');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onOpenInquiryModal?.(pillar.title);
    }
  };

  const delayClasses = ['delay-75', 'delay-150', 'delay-225'];

  return (
    <section ref={containerRef} className="relative z-30 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
        {schoolPillars.map((pillar, idx) => {
          const Icon = iconMap[pillar.iconName] || GraduationCap;
          return (
            <div
              key={pillar.id}
              onClick={() => handlePillarClick(pillar)}
              className={`pillar-card bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col group border border-amber-100/80 cursor-pointer reveal-scale-init ${
                isVisible ? 'reveal-visible' : ''
              } ${delayClasses[idx] || ''}`}
            >
              {/* Card Top Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-xs font-fredoka">
                  {pillar.badge}
                </span>
              </div>

              {/* Curved Cutout / Wave Divider with Card Color (SuperOwly signature) */}
              <div className="relative" style={{ backgroundColor: pillar.color }}>
                <svg
                  className="w-full h-8 -mt-8"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 100 C40 0 60 0 100 100 Z"
                    style={{ fill: pillar.color, stroke: pillar.color }}
                  />
                </svg>

                {/* Floating Round Icon Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-white">
                  <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                </div>

                {/* Card Content in vibrant colored box */}
                <div className="pt-6 pb-6 px-6 text-center text-white flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-fredoka tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-normal text-white/90 leading-relaxed mb-5">
                      {pillar.description}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePillarClick(pillar);
                      }}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 border border-white/40 font-fredoka text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
                    >
                      <span>{pillar.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
