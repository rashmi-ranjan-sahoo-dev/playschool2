import React, { useState, useEffect } from 'react';
import { statisticsList } from '../data/schoolData';
import { useScrollReveal } from '../hooks/useScrollReveal';

function AnimatedStatCard({ stat, isVisible, delayClass }) {
  const [displayValue, setDisplayValue] = useState(stat.value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;
    setHasAnimated(true);

    const target = stat.value;
    const duration = 1400; // 1.4s
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(target);
      }
    };

    // Small delay to match reveal
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 150);

    return () => clearTimeout(timer);
  }, [isVisible, hasAnimated, stat.value]);

  return (
    <div
      className={`stat-card bg-white/60 hover:bg-white/80 backdrop-blur-xs p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-white/70 transition-all duration-300 hover:scale-105 shadow-sm reveal-scale-init ${
        isVisible ? 'reveal-visible' : ''
      } ${delayClass}`}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-fredoka text-slate-950 tracking-tight mb-1 tabular-nums">
        {displayValue.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-xs sm:text-sm font-bold text-slate-900 font-fredoka leading-snug">
        {stat.label}
      </div>
      <div className="text-[10px] sm:text-[11px] text-slate-800/80 font-medium mt-1">
        {stat.sublabel}
      </div>
    </div>
  );
}

export default function StatsCounter({ brand }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05, fallbackDelay: 300 });

  const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300'];

  return (
    <section ref={sectionRef} className="bg-festive-grid text-slate-900 py-10 sm:py-14 relative overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Title Block (4 cols) */}
          <div className={`stats-title-block lg:col-span-4 text-center lg:text-left reveal-init ${isVisible ? 'reveal-visible' : ''}`}>
            <h6 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-900/80 font-fredoka mb-1">
              PARENTS CHOOSE US
            </h6>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-fredoka tracking-tight text-slate-950">
              Why {brand.shortName}?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-900/85 font-medium max-w-sm mx-auto lg:mx-0">
              Trusted by generations of Indian parents for uncompromising safety and joyful early foundations.
            </p>
          </div>

          {/* Right Counters Block (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 text-center">
            {statisticsList.map((stat, idx) => (
              <AnimatedStatCard
                key={stat.id}
                stat={stat}
                isVisible={isVisible}
                delayClass={delays[idx % delays.length]}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
