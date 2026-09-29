import React, { useState, useEffect } from 'react';
import { defaultBrand } from './config/brandConfig';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ThreePillars from './components/ThreePillars';
import WelcomeSection from './components/WelcomeSection';
import ProgramsSection from './components/ProgramsSection';
import DailyRoutine from './components/DailyRoutine';
import TestimonialsSection from './components/TestimonialsSection';
import StatsCounter from './components/StatsCounter';
import FestivalsGallery from './components/FestivalsGallery';
import AdmissionsCTA from './components/AdmissionsCTA';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import CctvModal from './components/CctvModal';
import MealTimetableModal from './components/MealTimetableModal';
import PageLoader from './components/PageLoader';

export default function App() {
  const [activeBrand] = useState(defaultBrand);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySource, setInquirySource] = useState('General');
  const [cctvModalOpen, setCctvModalOpen] = useState(false);
  const [mealModalOpen, setMealModalOpen] = useState(false);
  const [programFilter, setProgramFilter] = useState('all');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Set page document title to brand name
  useEffect(() => {
    if (activeBrand?.name) {
      document.title = activeBrand.name;
    }
  }, [activeBrand]);

  // Dynamic window scroll percentage tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInquiry = (source = 'General') => {
    setInquirySource(source);
    setInquiryModalOpen(true);
  };

  const handleExploreClasses = () => {
    setProgramFilter('all');
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreDaycare = () => {
    setProgramFilter('daycare');
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateRoutine = () => {
    const el = document.getElementById('routine');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-800 flex flex-col font-body selection:bg-amber-400 selection:text-slate-900 relative">
      
      {/* Cool Animated Page Preloader */}
      <PageLoader brand={activeBrand} />

      {/* Top Reading Scroll Progress Indicator */}
      <div 
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* SuperOwly Authentic Header (Integrated Contact Info + Main Nav + Actions) */}
      <Header
        brand={activeBrand}
        onOpenInquiryModal={handleOpenInquiry}
        onOpenCctvModal={() => setCctvModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Slider (GSAP Animated) */}
        <HeroSlider
          brand={activeBrand}
          onOpenInquiryModal={handleOpenInquiry}
        />

        {/* Three Overlapping Signature Pillars (SuperOwly style) */}
        <ThreePillars
          onExploreClasses={handleExploreClasses}
          onOpenMealModal={() => setMealModalOpen(true)}
          onExploreDaycare={handleExploreDaycare}
          onOpenInquiryModal={handleOpenInquiry}
        />

        {/* Welcome & NEP 2020 Panchakosha + Upcoming Events Widget */}
        <WelcomeSection
          brand={activeBrand}
          onOpenInquiryModal={handleOpenInquiry}
        />

        {/* Programs & Classes with Age Calculator */}
        <ProgramsSection
          onOpenInquiryModal={handleOpenInquiry}
          activeFilter={programFilter}
          onFilterChange={setProgramFilter}
        />

        {/* Interactive Daily Routine Timetable */}
        <DailyRoutine />

        {/* Parent Testimonials (Split Layout) */}
        <TestimonialsSection />

        {/* Milestone Stats Counter Strip */}
        <StatsCounter
          brand={activeBrand}
        />

        {/* Celebrations & Gallery */}
        <FestivalsGallery />

        {/* Admissions CTA Banner */}
        <AdmissionsCTA
          brand={activeBrand}
          onOpenInquiryModal={handleOpenInquiry}
        />
      </main>

      {/* Comprehensive 4-Column Footer */}
      <Footer
        brand={activeBrand}
        onOpenInquiryModal={handleOpenInquiry}
      />

      {/* Pop-up Modals */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        brand={activeBrand}
        source={inquirySource}
      />

      <CctvModal
        isOpen={cctvModalOpen}
        onClose={() => setCctvModalOpen(false)}
        brand={activeBrand}
      />

      <MealTimetableModal
        isOpen={mealModalOpen}
        onClose={() => setMealModalOpen(false)}
        onOpenInquiryModal={handleOpenInquiry}
        onNavigateRoutine={handleNavigateRoutine}
      />

    </div>
  );
}
