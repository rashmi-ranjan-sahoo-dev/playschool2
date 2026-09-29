import React, { useState } from 'react';
import { ArrowRight, Sparkles, Clock, Users } from 'lucide-react';
import { programsList } from '../data/schoolData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProgramsSection({
  onOpenInquiryModal,
  activeFilter,
  onFilterChange
}) {
  const [internalFilter, setInternalFilter] = useState('all');
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05, fallbackDelay: 400 });

  const filter = activeFilter !== undefined ? activeFilter : internalFilter;
  const setFilter = onFilterChange || setInternalFilter;

  const filteredPrograms = programsList.filter((prog) => {
    if (filter === 'daycare') return prog.id === 'toddlers' || prog.id === 'after-school';
    if (filter === 'preschool') return prog.id === 'playgroup' || prog.id === 'nursery';
    if (filter === 'kindergarten') return prog.id === 'lkg' || prog.id === 'ukg';
    return true;
  });

  return (
    <section ref={sectionRef} id="programs" className="scroll-mt-20 sm:scroll-mt-24 py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#FFFDF9] via-amber-50/30 to-[#FFFDF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`programs-header text-center max-w-2xl mx-auto mb-5 sm:mb-6 reveal-init ${isVisible ? 'reveal-visible' : ''}`}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2 font-fredoka shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Age-Appropriate Stages</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 font-fredoka tracking-tight">
            Academic Programs & <span className="text-coral-500">Daycare</span>
          </h2>
        </div>

        {/* Filter Navigation */}
        <div className={`programs-header flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-7 reveal-init ${isVisible ? 'reveal-visible' : ''} delay-75`}>
          {[
            { id: 'all', label: 'All Programs' },
            { id: 'preschool', label: 'Playgroup & Nursery' },
            { id: 'kindergarten', label: 'LKG & UKG' },
            { id: 'daycare', label: 'Daycare & Activity Club' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider transition-all duration-200 cursor-pointer ${filter === tab.id
                  ? 'bg-amber-500 text-slate-900 shadow-xs scale-102'
                  : 'bg-white hover:bg-amber-100/70 text-slate-600 border border-slate-200/80 shadow-2xs'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs Grid (Tighter gap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="program-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-200/80 hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image with Tag & Overlay */}
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

                  <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur text-slate-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs font-fredoka">
                    {prog.age}
                  </span>

                  <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white">
                    <div className="text-[10px] font-semibold text-amber-300 font-fredoka">
                      {prog.hindiName}
                    </div>
                    <h3 className="text-lg font-bold font-fredoka leading-snug drop-shadow-xs">
                      {prog.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content (Compact, no excess whitespace) */}
                <div className="p-4 sm:p-4.5 space-y-2.5">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {prog.description}
                  </p>

                  {/* Metadata tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                    <div className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                      <Clock className="w-3 h-3 text-amber-500 shrink-0" />
                      <span>{prog.timings}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                      <Users className="w-3 h-3 text-amber-500 shrink-0" />
                      <span>{prog.batchRatio}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="p-4 sm:p-4.5 pt-0">
                <button
                  onClick={() => onOpenInquiryModal(`Program: ${prog.name}`)}
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-fredoka font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-2xs hover:shadow-xs flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Enroll In {prog.name.split('—')[0].trim()}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

