import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Menu, X, ArrowRight, Sparkles 
} from 'lucide-react';

export default function Header({ brand, onOpenInquiryModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Clean direct navigation links without sublinks
  const navMenuItems = [
    { name: "Home", href: "#home", active: true },
    { name: "Programs", href: "#programs" },
    { name: "Why Us", href: "#why-us" },
    { name: "Daily Routine", href: "#routine" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white transition-all shadow-sm">
      
      {/* 1. Multi-Colored Geometric Candy Top Ribbon (SuperOwly signature) */}
      <div className="w-full h-1.5 sm:h-2 overflow-hidden flex">
        {[
          '#E53935', '#FB8C00', '#FDD835', '#43A047', '#00ACC1', '#1E88E5', '#8E24AA', '#D81B60',
          '#E53935', '#FB8C00', '#FDD835', '#43A047', '#00ACC1', '#1E88E5', '#8E24AA', '#D81B60',
          '#E53935', '#FB8C00', '#FDD835', '#43A047', '#00ACC1', '#1E88E5', '#8E24AA', '#D81B60',
          '#E53935', '#FB8C00', '#FDD835', '#43A047', '#00ACC1', '#1E88E5', '#8E24AA', '#D81B60',
        ].map((color, idx) => (
          <div
            key={idx}
            className="flex-1 h-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* 2. Main Header Bar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pt-2 pb-1.5 sm:pt-2.5 sm:pb-2">
          
          {/* Left: Original Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-sunshine-500 via-amber-400 to-coral-500 flex items-center justify-center text-xl sm:text-2xl shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              {brand.logoEmoji || '🦚'}
            </div>
            <div>
              <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-800 tracking-tight font-fredoka leading-none group-hover:text-coral-600 transition-colors">
                <span className="hidden sm:inline">{brand.name}</span>
                <span className="sm:hidden">{brand.shortName}</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-body mt-0.5">
                {brand.logoSubtitle || brand.tagline}
              </p>
            </div>
          </a>

          {/* Right: Desktop 2-Tier Stack (Clean contact row + Direct Navigation & Inquire button) */}
          <div className="hidden lg:flex flex-col items-end gap-1.5">
            
            {/* Tier 1 (Upper Row): Clean Contact Info only */}
            <div className="flex items-center gap-4 xl:gap-6 text-[11.5px] xl:text-[12px] text-[#7d8285]">
              {/* Phone */}
              <a 
                href={`tel:${brand.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-1.5 hover:text-coral-500 transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-slate-700">{brand.contact.phone}</span>
              </a>

              {/* Email (hidden on smaller laptop screens to avoid wrap) */}
              <a 
                href={`mailto:${brand.contact.email}`}
                className="hidden xl:flex items-center gap-1.5 hover:text-coral-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>{brand.contact.email}</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span className="max-w-[200px] xl:max-w-[260px] truncate">{brand.contact.address}</span>
              </div>

              {/* Admissions status badge */}
              <div className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200/80 text-amber-800 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>{brand.admissions.status} {brand.admissions.year}</span>
              </div>
            </div>

            {/* Tier 2 (Lower Row): Direct Navigation Links & Green "Inquire" Pill Button */}
            <div className="flex items-center gap-5 xl:gap-8 pt-0.5">
              
              {/* Clean Direct Menu Links (No submenus or down arrows) */}
              <nav className="flex items-center space-x-4 xl:space-x-6 text-[14px] xl:text-[15px] font-semibold">
                {navMenuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`transition-colors py-1 hover:text-[#f05a21] ${
                      item.active 
                        ? 'text-[#f05a21] font-bold' 
                        : 'text-[#666666]'
                    }`}
                  >
                    <span>{item.name}</span>
                  </a>
                ))}
              </nav>

              {/* SuperOwly Signature Olive-Green "Inquire" Pill Button */}
              <button
                onClick={() => onOpenInquiryModal('Header Inquire Button')}
                className="px-6 py-2 rounded-full bg-[#a6c437] hover:bg-[#96b32b] text-white font-fredoka font-bold text-[14px] tracking-wide shadow-md shadow-[#a6c437]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <span>Inquire</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

          {/* Mobile Right Controls: Inquire Pill + Smooth Animated Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenInquiryModal('Mobile Header Inquire')}
              className="px-3.5 py-1.5 rounded-full bg-[#a6c437] text-white font-fredoka font-bold text-xs shadow-sm hover:scale-105 transition-all"
            >
              Inquire
            </button>

            {/* Smooth Rotating Hamburger/Close Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-50 transition-all duration-300 relative overflow-hidden"
              aria-label="Toggle navigation"
            >
              <div className={`transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-coral-500" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile Drawer with Smooth Slow Expand & Collapse Animations */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen 
            ? 'max-h-[500px] opacity-100 border-t border-slate-100 shadow-xl' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`bg-white px-5 pt-3 pb-5 space-y-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          {/* Mobile Nav Links with Staggered Slide In (Direct scroll, no submenus) */}
          <div className="space-y-1">
            {navMenuItems.map((item, idx) => (
              <div 
                key={item.name} 
                className="border-b border-slate-50 pb-1.5 transition-all duration-500 ease-out"
                style={{
                  transitionDelay: mobileMenuOpen ? `${idx * 40}ms` : '0ms',
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
                  opacity: mobileMenuOpen ? 1 : 0
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1 text-sm font-bold transition-colors ${
                    item.active ? 'text-[#f05a21]' : 'text-slate-700 hover:text-coral-500'
                  }`}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Contact Quick Actions with Staggered Transition */}
          <div 
            className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600 transition-all duration-500 ease-out"
            style={{
              transitionDelay: mobileMenuOpen ? '240ms' : '0ms',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(6px)'
            }}
          >
            <a 
              href={`tel:${brand.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 py-1 font-semibold text-slate-800 hover:text-coral-500 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-coral-500" />
              <span>{brand.contact.phone}</span>
            </a>
            <a 
              href={`mailto:${brand.contact.email}`}
              className="flex items-center gap-2 py-1 hover:text-coral-500 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-coral-500" />
              <span>{brand.contact.email}</span>
            </a>
            <div className="flex items-center gap-2 py-1 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-coral-500 shrink-0" />
              <span className="truncate">{brand.contact.address}</span>
            </div>
          </div>

          {/* Mobile Inquire CTA Button with Smooth Entry */}
          <div
            className="transition-all duration-500 ease-out"
            style={{
              transitionDelay: mobileMenuOpen ? '280ms' : '0ms',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(8px)'
            }}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiryModal('Mobile Drawer Inquire');
              }}
              className="w-full py-2.5 rounded-full bg-[#a6c437] hover:bg-[#96b32b] text-white font-fredoka font-bold text-xs tracking-wide shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <span>Book Campus Tour / Inquire</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. SuperOwly Signature Curved Bottom Wave Separator */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-1">
        <svg
          viewBox="0 0 1440 18"
          preserveAspectRatio="none"
          className="w-full h-3 sm:h-3.5 text-white fill-current block"
        >
          <path d="M0,0 L1440,0 L1440,4 Q720,18 0,4 Z" />
        </svg>
      </div>

    </header>
  );
}
