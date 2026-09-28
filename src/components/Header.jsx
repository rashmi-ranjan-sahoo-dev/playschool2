import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, Sparkles, Home, BookOpen, 
  Heart, Clock, MessageSquare, Camera, MapPin
} from 'lucide-react';

export default function Header({ brand, onOpenInquiryModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const lastScrollY = useRef(0);
  const heroThreshold = useRef(380);

  // Structured navigation links without clutter (Contacts handled via dedicated Contact link to footer)
  const navMenuItems = [
    { name: "Home", href: "#home", id: "home", icon: Home },
    { name: "Programs", href: "#programs", id: "programs", icon: BookOpen },
    { name: "Why Us", href: "#why-us", id: "why-us", icon: Heart },
    { name: "Routine", href: "#routine", id: "routine", icon: Clock },
    { name: "Testimonials", href: "#testimonials", id: "testimonials", icon: MessageSquare },
    { name: "Gallery", href: "#gallery", id: "gallery", icon: Camera },
    { name: "Contact", href: "#contact", id: "contact", icon: MapPin },
  ];

  // Dynamically calculate the Hero section height so header stays fixed inside Hero
  useEffect(() => {
    const calculateHeroHeight = () => {
      const heroEl = document.getElementById('home');
      if (heroEl) {
        heroThreshold.current = Math.max(heroEl.offsetHeight - 90, 260);
      } else {
        heroThreshold.current = 360;
      }
    };

    calculateHeroHeight();
    window.addEventListener('resize', calculateHeroHeight);
    return () => window.removeEventListener('resize', calculateHeroHeight);
  }, []);

  // Scroll direction detection:
  // - Fixed & visible in hero section
  // - Past hero: hides on scroll down, shows on scroll up
  // - Never hides if mobile drawer is open
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track whether page is scrolled past top (for glassmorphism & shadow)
      setIsScrolled(currentScrollY > 15);

      // In Hero Section: ALWAYS fixed and visible
      if (currentScrollY <= heroThreshold.current) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // If mobile navigation drawer is currently open, keep header visible
      if (mobileMenuOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const scrollDelta = currentScrollY - lastScrollY.current;

      // Threshold of 6px to ignore micro-jitters
      if (Math.abs(scrollDelta) > 6) {
        if (scrollDelta > 0) {
          // Scrolling down past hero -> Hide header
          setIsVisible(false);
        } else {
          // Scrolling up past hero -> Show header
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Active section tracker for high visual clarity
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    });

    navMenuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile drawer automatically when window expands to laptop/desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Handle smooth navigation click
  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Spacer to preserve layout flow and prevent layout shift when header is fixed */}
      <div className="h-14 sm:h-16 w-full" aria-hidden="true" />

      {/* Main Header Container with Auto-Hide / Reveal on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100' 
            : 'bg-white shadow-xs border-b border-slate-100/70'
        }`}
      >
        {/* 1. Cheerful Rainbow Candy Top Stripe (Signature Brand Aesthetic) */}
        <div className="w-full h-1.5 overflow-hidden flex select-none" aria-hidden="true">
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

        {/* 2. Structured Navigation Bar (Responsive for Phones, Tablets, Laptops & PCs) */}
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between h-[52px] sm:h-[58px]">
            
            {/* Left: Brand Identity & Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group shrink-0 focus:outline-none min-w-0"
              aria-label={`${brand.name} Home`}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-amber-400 via-coral-400 to-rose-400 flex items-center justify-center text-base sm:text-lg shadow-xs group-hover:scale-105 transition-transform duration-300 select-none shrink-0">
                {brand.logoEmoji || '🦚'}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-base lg:text-[17px] font-extrabold text-slate-800 tracking-tight font-fredoka leading-tight group-hover:text-coral-600 transition-colors whitespace-nowrap truncate max-w-[135px] sm:max-w-[220px] lg:max-w-none">
                  {/* Clean responsive naming */}
                  <span className="hidden xl:inline">{brand.name}</span>
                  <span className="hidden sm:inline xl:hidden">{brand.shortName} Preschool</span>
                  <span className="sm:hidden">{brand.shortName}</span>
                </span>
                <span className="hidden sm:inline text-[9px] xl:text-[10px] font-semibold text-slate-400 uppercase tracking-wider font-body whitespace-nowrap">
                  {brand.logoSubtitle || brand.tagline}
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation Links (Active on Laptops & PCs: >= 1024px) */}
            <nav 
              className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 shrink-0"
              aria-label="Main Navigation"
            >
              {navMenuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-2.5 py-1 rounded-full text-[13.5px] xl:text-[14px] font-semibold transition-all duration-200 whitespace-nowrap select-none ${
                      isActive
                        ? 'text-coral-600 bg-coral-50/90 font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Right: Actions & Phone/Tablet Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              
              {/* Primary Call-to-Action Pill Button */}
              <button
                onClick={() => onOpenInquiryModal('Header Inquire Button')}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#a6c437] hover:bg-[#95b22b] text-white font-fredoka font-bold text-xs sm:text-[13px] tracking-wide shadow-xs hover:shadow-md shadow-[#a6c437]/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>

              {/* Tablet & Phone Hamburger Toggle Button (Active below lg: 1024px) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-50 active:bg-slate-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 shrink-0 cursor-pointer"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                <div className={`transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {mobileMenuOpen ? (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-coral-500" />
                  ) : (
                    <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                  )}
                </div>
              </button>

            </div>

          </div>
        </div>

        {/* 3. Tablet & Phone Navigation Drawer (For all screens < 1024px) */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-100 bg-white ${
            mobileMenuOpen 
              ? 'max-h-[500px] opacity-100 shadow-2xl' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 py-3 sm:py-4 space-y-1.5 max-w-md sm:max-w-lg mx-auto overflow-y-auto max-h-[75vh]">
            
            {/* Quick Navigation label with admissions badge */}
            <div className="flex items-center justify-between pb-1.5 mb-1 border-b border-slate-100">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Menu
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/80">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>{brand.admissions.status}</span>
              </span>
            </div>

            {/* Nav Links with Icons (Formatted for tablet & phone touch) */}
            <div className="grid grid-cols-1 gap-1">
              {navMenuItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-coral-50 text-coral-600 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-coral-500'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-coral-100 text-coral-600' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="whitespace-nowrap">{item.name}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40 shrink-0" />
                  </a>
                );
              })}
            </div>

            {/* Direct Inquiry CTA button */}
            <div className="pt-2 border-t border-slate-100 pb-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiryModal('Mobile Drawer Inquire');
                }}
                className="w-full py-2.5 sm:py-3 rounded-xl bg-[#a6c437] hover:bg-[#95b22b] text-white font-fredoka font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Book Campus Tour / Inquire</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Backdrop overlay for phone & tablet menu */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
    </>
  );
}
