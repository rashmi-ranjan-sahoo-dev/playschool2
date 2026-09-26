import React, { useState } from 'react';
import { Sparkles, Eye, X } from 'lucide-react';
import { galleryItems } from '../data/schoolData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FestivalsGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05, fallbackDelay: 300 });

  const categories = ['All', 'Festivals', 'Classroom', 'Sensory & Yoga', 'Outdoors'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300', 'delay-375', 'delay-450'];

  return (
    <section ref={sectionRef} id="gallery" className="scroll-mt-20 sm:scroll-mt-24 py-10 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`gallery-header text-center max-w-3xl mx-auto mb-8 reveal-init ${isVisible ? 'reveal-visible' : ''}`}>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-coral-100 text-coral-800 text-xs font-bold uppercase tracking-wider mb-3 font-fredoka">
            <Sparkles className="w-3.5 h-3.5 text-coral-600" />
            <span>Memories & Celebrations</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-fredoka tracking-tight">
            Glimpses of <span className="text-coral-500">School Life</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From colorful Janmashtami dress-ups and Diwali diya craft to joyful mud kitchens and toddler sports day.
          </p>
        </div>

        {/* Categories Bar */}
        <div className={`flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12 reveal-init ${isVisible ? 'reveal-visible' : ''} delay-75`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-amber-100 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className={`gallery-card relative h-72 rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 reveal-scale-init ${
                isVisible ? 'reveal-visible' : ''
              } ${delays[idx % delays.length]}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full font-fredoka shadow">
                {item.category}
              </span>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-bold font-fredoka leading-snug drop-shadow-sm">
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-amber-300 font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to view</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full max-h-[75vh] object-cover"
            />
            <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase font-fredoka">
                  {activeImage.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-fredoka">{activeImage.title}</h3>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="self-start sm:self-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-xl cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
