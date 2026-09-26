import React from 'react';
import { PhoneCall, Calendar, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AdmissionsCTA({ brand, onOpenInquiryModal }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05, fallbackDelay: 300 });

  return (
    <section ref={sectionRef} className="py-10 sm:py-14 bg-gradient-to-r from-coral-500 via-rose-500 to-amber-500 text-white relative overflow-hidden shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 text-center lg:text-left">
          
          {/* Headline & Info */}
          <div className={`cta-content max-w-2xl reveal-init ${isVisible ? 'reveal-visible' : ''}`}>
            <span className="inline-block bg-white/20 backdrop-blur px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2.5 font-fredoka shadow-2xs">
              {brand.admissions.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-fredoka tracking-tight text-white mb-2.5">
              ADMISSIONS OPEN FOR {brand.admissions.year}
            </h2>
            <p className="text-xs sm:text-base text-white/90 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Give your child the foundation of Sanskar, Safety & Smart Learning. Schedule a private campus tour today to meet our early educators.
            </p>
          </div>

          {/* Action Callout & Hotline (SuperOwly style) */}
          <div className={`cta-buttons flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0 justify-center reveal-scale-init ${
            isVisible ? 'reveal-visible' : ''
          } delay-150`}>
            <button
              onClick={() => onOpenInquiryModal('Bottom Callout')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-slate-900 hover:bg-amber-100 font-fredoka font-bold text-sm sm:text-base shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Calendar className="w-4.5 h-4.5 text-coral-500" />
              <span>Book Campus Visit</span>
              <ArrowRight className="w-4 h-4 text-coral-500 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${brand.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-slate-950/40 hover:bg-slate-950/60 border border-white/30 text-white font-fredoka font-semibold text-xs sm:text-sm backdrop-blur flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-amber-300" />
              <span>{brand.contact.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
