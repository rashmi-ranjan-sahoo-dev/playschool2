import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { testimonialsList } from '../data/schoolData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05, fallbackDelay: 300 });
  const [quoteAnim, setQuoteAnim] = useState(true);

  // Auto-scroll every 4.5 seconds (pauses on user hover or touch)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Smooth quote change animation
  useEffect(() => {
    setQuoteAnim(false);
    const timer = setTimeout(() => setQuoteAnim(true), 40);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const current = testimonialsList[currentIndex];

  return (
    <section ref={sectionRef} id="testimonials" className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-12 lg:py-16 bg-[#FFFDF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Container (SuperOwly style, optimized for mobile) */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className={`testimonial-card-container grid grid-cols-1 lg:grid-cols-12 items-center bg-white rounded-2xl sm:rounded-4xl shadow-lg border border-amber-100 overflow-hidden reveal-scale-init ${
            isVisible ? 'reveal-visible' : ''
          }`}
        >
          
          {/* Left Column: Campus Life Image (Reduced size on mobile) */}
          <div className="lg:col-span-5 h-44 sm:h-60 lg:h-full relative overflow-hidden min-h-[160px] sm:min-h-[220px] lg:min-h-[380px]">
            <img
              src="/images/parent_testimonial.jpg"
              alt="Happy Indian parents and child in playschool garden"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-3.5 sm:p-5">
              <div className="text-white">
                <div className="flex items-center gap-1.5 text-amber-300 text-[10px] sm:text-xs font-bold font-fredoka uppercase tracking-wider mb-0.5">
                  <Heart className="w-3 h-3 fill-current" />
                  <span>Loved by 2,800+ Families</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold font-fredoka drop-shadow-xs">
                  Safe, Loving & Culturally Rooted
                </h4>
              </div>
            </div>
          </div>

          {/* Right Column: Testimonial Carousel (Compact on phone screen) */}
          <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-coral-500 font-fredoka block">
                    Parent Voices
                  </span>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-800 font-fredoka">
                    What Indian Parents Say
                  </h2>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-2.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 ml-1.5">
                  5.0 Rating • Verified Parent
                </span>
              </div>

              {/* Quote text and author info with smooth transition */}
              <div className={`transition-opacity duration-300 ${quoteAnim ? 'opacity-100' : 'opacity-0'}`}>
                <blockquote className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed italic mb-4 sm:mb-5 min-h-[56px] sm:min-h-[64px]">
                  "{current.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 border-t border-slate-100 pt-3 sm:pt-4">
                  <img
                    src={current.avatar}
                    alt={current.parentName}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-amber-400 shadow-2xs shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 font-fredoka truncate">
                      {current.parentName}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">
                      {current.relation} • <span className="text-coral-500 font-semibold">{current.city}</span>
                    </p>
                  </div>
                  <span className="shrink-0 text-[9px] sm:text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 font-fredoka">
                    {current.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Carousel navigation & indicator dots */}
            <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-50">
              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5">
                {testimonialsList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'w-6 bg-amber-500' : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prev}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 hover:border-amber-400 hover:bg-amber-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 hover:border-amber-400 hover:bg-amber-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
