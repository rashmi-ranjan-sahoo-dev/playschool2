import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { faqsList } from '../data/schoolData';

export default function FaqSection({ brand, onOpenInquiryModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-10 lg:py-16 bg-[#FFFDF9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 font-fredoka">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-fredoka tracking-tight">
            Frequently Asked <span className="text-coral-500">Questions</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Everything you need to know about admissions, daily care, and security at {brand.shortName}.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqsList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-amber-100/90 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-amber-50/40 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-slate-800 font-fredoka">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-amber-500 text-white' : 'text-slate-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 bg-amber-50 border border-amber-200/80 rounded-3xl p-6 text-center">
          <h4 className="font-bold text-slate-800 font-fredoka text-base mb-1">
            Have a specific question about your child's batch?
          </h4>
          <p className="text-xs text-slate-600 mb-4">
            Our admissions counselor is here to help walk you through every query.
          </p>
          <button
            onClick={() => onOpenInquiryModal('FAQ Assistance')}
            className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-fredoka uppercase tracking-wider shadow"
          >
            Speak to Admissions Team
          </button>
        </div>

      </div>
    </section>
  );
}
