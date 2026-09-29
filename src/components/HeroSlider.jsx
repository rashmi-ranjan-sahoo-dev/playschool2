import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function HeroSlider({ brand, onOpenInquiryModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Authentic Indian Preschool Photography (Clean images matching reference screenshot)
  const slides = [
    {
      id: 1,
      image: "/images/hero_slide1.jpg",
      alt: "Indian preschool children giving thumbs up in cheerful classroom",
    },
    {
      id: 2,
      image: "/images/hero_slide2.jpg",
      alt: "Indian kindergarten kids playing with wooden blocks and teacher",
    },
    {
      id: 3,
      image: "/images/hero_slide3.jpg",
      alt: "Indian play school children with colorful painted hands",
    }
  ];

  // Smooth automatic slide progression
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section ref={sliderRef} id="home" className="relative w-full h-[360px] sm:h-[460px] md:h-[540px] lg:h-[600px] bg-slate-900 overflow-hidden select-none">

      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out ${index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
          />
          {/* Subtle soft gradient overlay only at the top/bottom for card overlap legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />
        </div>
      ))}

      {/* Floating Catalogs / Badges with GSAP Entrance */}
      {/* Mobile-visible subtle top center badge */}
      <div className="hero-floating-badge absolute top-3 sm:top-5 left-1/2 -translate-x-1/2 z-20 md:hidden flex items-center gap-1.5 bg-white/95 text-slate-800 backdrop-blur-md px-3.5 py-1 rounded-full shadow-md text-[11px] font-bold font-fredoka border border-amber-200">
        <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
        <span>Admissions Open {brand.admissions.year}</span>
      </div>

      <div className="hero-floating-badge absolute top-6 left-6 z-20 hidden md:flex items-center gap-2 bg-white/90 hover:bg-white text-slate-800 backdrop-blur-md border border-white/60 px-4 py-2 rounded-full shadow-lg text-xs font-bold font-fredoka animate-float cursor-default transition-transform">
        <span className="text-lg">🪅</span>
        <span>Festive Indian Celebrations</span>
      </div>

      <div className="hero-floating-badge absolute top-8 right-8 z-20 hidden md:flex items-center gap-2 bg-amber-500/90 hover:bg-amber-500 text-white backdrop-blur-md border border-amber-300/60 px-4 py-2 rounded-full shadow-lg text-xs font-bold font-fredoka animate-float-slow cursor-default transition-transform">
        <span className="text-lg">🧘</span>
        <span>Daily Little Yogis & Shlokas</span>
      </div>

      <div className="hero-floating-badge absolute bottom-28 left-8 z-20 hidden lg:flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-600 text-white backdrop-blur-md border border-emerald-400/60 px-4 py-2 rounded-full shadow-lg text-xs font-bold font-fredoka animate-float cursor-default transition-transform">
        <span className="text-lg">📹</span>
        <span>Live CCTV Parent Access</span>
      </div>

      <div className="hero-floating-badge absolute bottom-28 right-8 z-20 hidden lg:flex items-center gap-2 bg-coral-500/90 hover:bg-coral-500 text-white backdrop-blur-md border border-coral-300/60 px-4 py-2 rounded-full shadow-lg text-xs font-bold font-fredoka animate-float-slow cursor-default transition-transform">
        <span className="text-lg">🍎</span>
        <span>Nutritious Satvik Meals</span>
      </div>

      {/* Exact SuperOwly Slider Navigation Arrows (Square dark semi-transparent buttons) */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 bg-black/50 hover:bg-black/80 text-white flex items-center justify-center rounded-r-md backdrop-blur-xs transition-all cursor-pointer shadow-md group"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 bg-black/50 hover:bg-black/80 text-white flex items-center justify-center rounded-l-md backdrop-blur-xs transition-all cursor-pointer shadow-md group"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Slide Indicators Dots */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? 'w-8 bg-amber-400 shadow-md' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
