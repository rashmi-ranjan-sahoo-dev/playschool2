import React from 'react';
import { BookOpen, HeartHandshake, Activity, Sparkles, Palette, Music } from 'lucide-react';
import { curriculumPillars } from '../data/schoolData';

const iconMap = {
  BookOpen: BookOpen,
  HeartHandshake: HeartHandshake,
  Activity: Activity,
  Sparkles: Sparkles,
  Palette: Palette,
  Music: Music,
};

export default function CurriculumPillars() {
  return (
    <section className="py-10 lg:py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading (SuperOwly style centered title & subtitle) */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 font-fredoka">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NEP 2020 Aligned ECCE Pillars</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-fredoka tracking-tight">
            Our 6 Core Curriculum Pillars
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A harmonious integration of international early childhood best practices with deep Indian cultural traditions.
          </p>
        </div>

        {/* 6 Icons Grid (SuperOwly 2x3 or 3x2 grid with white icon boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumPillars.map((pillar) => {
            const Icon = iconMap[pillar.iconName] || BookOpen;
            return (
              <div
                key={pillar.id}
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 group shadow-xl"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${pillar.color}25` }}
                >
                  <Icon className="w-7 h-7" style={{ color: pillar.color }} />
                </div>

                <h3 className="text-xl font-bold font-fredoka text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
