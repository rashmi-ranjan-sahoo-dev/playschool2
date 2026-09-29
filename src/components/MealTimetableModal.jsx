import React, { useState, useEffect } from 'react';
import { 
  X, Apple, Sparkles, Clock, CheckCircle2, 
  ChevronRight, Calendar, Leaf 
} from 'lucide-react';
import { weeklySatvikMenu, satvikNutritionPrinciples } from '../data/schoolData';

export default function MealTimetableModal({ 
  isOpen, 
  onClose, 
  onOpenInquiryModal,
  onNavigateRoutine 
}) {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentDay = weeklySatvikMenu[selectedDayIndex] || weeklySatvikMenu[0];

  const handleRoutineClick = () => {
    onClose();
    if (onNavigateRoutine) {
      onNavigateRoutine();
    } else {
      const el = document.getElementById('routine');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquiryClick = () => {
    onClose();
    onOpenInquiryModal?.('Satvik Meal & Nutrition Plan');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fadeIn overflow-y-auto cursor-pointer"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative max-w-3xl w-full bg-white text-slate-800 rounded-3xl shadow-2xl border border-amber-200 overflow-hidden my-6 flex flex-col max-h-[92vh] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Ribbon Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 pr-10">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 border border-white/30 text-white shadow-inner">
              <Apple className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/25 text-white text-[11px] font-bold uppercase tracking-wider font-fredoka mb-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>100% In-House Kitchen</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-fredoka text-white leading-tight">
                Satvik Meal Timetable & Nutrition Plan
              </h2>
              <p className="text-xs text-emerald-100 mt-0.5">
                Freshly cooked daily in pure A2 Gir cow ghee • Planned by pediatric nutritionists
              </p>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Day Selector Pills */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-fredoka flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>Select Day of the Week:</span>
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Weekly Rotating Menu
              </span>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {weeklySatvikMenu.map((item, idx) => {
                const isSelected = selectedDayIndex === idx;
                return (
                  <button
                    key={item.day}
                    onClick={() => setSelectedDayIndex(idx)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold font-fredoka transition-all cursor-pointer text-center border ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-102'
                        : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <span>{item.day}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Day Timetable Card */}
          <div className="bg-gradient-to-br from-amber-50/70 via-emerald-50/30 to-amber-50/50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 shadow-xs">
            <div className="flex items-center justify-between border-b border-amber-200/60 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🥗</span>
                <h3 className="text-lg font-bold font-fredoka text-slate-800">
                  {currentDay.day}'s Healthy Meal Menu
                </h3>
              </div>
              <span className="text-[11px] font-bold font-fredoka px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                {currentDay.tag}
              </span>
            </div>

            {/* 3 Meal Slots */}
            <div className="space-y-3">
              {/* Slot 1: Morning Refreshment */}
              <div className="bg-white p-3.5 rounded-xl border border-amber-100 shadow-2xs flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex items-center gap-2 shrink-0 sm:w-44">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">
                    🍎
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 font-fredoka block">
                      10:30 AM
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Morning Fruit Break
                    </span>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 font-medium sm:pt-0.5 leading-relaxed">
                  {currentDay.morningSnack}
                </div>
              </div>

              {/* Slot 2: Midday Warm Satvik Lunch */}
              <div className="bg-white p-3.5 rounded-xl border border-amber-100 shadow-2xs flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex items-center gap-2 shrink-0 sm:w-44">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">
                    🍲
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 font-fredoka block">
                      1:00 PM
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Warm Satvik Lunch
                    </span>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 font-medium sm:pt-0.5 leading-relaxed">
                  {currentDay.lunch}
                </div>
              </div>

              {/* Slot 3: Evening Snack & Milk */}
              <div className="bg-white p-3.5 rounded-xl border border-amber-100 shadow-2xs flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex items-center gap-2 shrink-0 sm:w-44">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                    🥛
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 font-fredoka block">
                      4:30 PM
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Evening Refreshment
                    </span>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 font-medium sm:pt-0.5 leading-relaxed">
                  {currentDay.eveningSnack}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Satvik Quality Pillars */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-fredoka mb-3 flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>Our Satvik Kitchen Standards & Safety</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {satvikNutritionPrinciples.map((principle) => (
                <div 
                  key={principle.title}
                  className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-start gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800 font-fredoka">
                      {principle.title}
                    </h5>
                    <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Dietary / Allergy Alert Callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 flex items-start gap-3 text-xs text-amber-900">
            <span className="text-base shrink-0">🌾</span>
            <div className="leading-relaxed">
              <strong className="font-bold">Allergy & Dietary Accommodations:</strong> We accommodate children with dairy or gluten intolerances. Custom porridge, almond milk, and fruit alternatives are freshly arranged upon parent request.
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleRoutineClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-fredoka text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-2xs"
          >
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>View Full Daily Routine</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-fredoka text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleInquiryClick}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-fredoka text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
            >
              <span>Ask About Meals</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
