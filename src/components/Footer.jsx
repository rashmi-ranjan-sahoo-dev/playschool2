import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Footer({ brand, onOpenInquiryModal }) {
  const [footerRef, isVisible] = useScrollReveal({ threshold: 0.05, fallbackDelay: 250 });
  const whatsappUrl = `https://wa.me/${brand.contact.whatsapp}?text=Hi,%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(brand.name)}`;

  return (
    <footer ref={footerRef} id="contact" className="scroll-mt-20 sm:scroll-mt-24 bg-slate-950 text-slate-300 relative overflow-hidden">
      
      {/* Top curved wave separator */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 text-amber-500 fill-current opacity-20"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Col 1: Location */}
          <div className={`footer-col space-y-4 reveal-init ${isVisible ? 'reveal-visible' : ''}`}>
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold font-fredoka text-white">Campus Location</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {brand.contact.address}
            </p>
            <a
              href={brand.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 font-fredoka"
            >
              <span>View on Google Maps</span>
              <span>→</span>
            </a>
          </div>

          {/* Col 2: Hours */}
          <div className={`footer-col space-y-4 reveal-init ${isVisible ? 'reveal-visible' : ''} delay-75`}>
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold font-fredoka text-white">School Timings</h4>
            <div className="text-xs text-slate-400 space-y-2">
              <div>
                <span className="font-semibold text-white block">Pre-School Hours:</span>
                <span>8:45 AM – 1:00 PM (Mon – Fri)</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Full Daycare Hours:</span>
                <span>8:30 AM – 6:30 PM (Mon – Fri)</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Saturday Office:</span>
                <span>9:00 AM – 1:30 PM</span>
              </div>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div className={`footer-col space-y-4 reveal-init ${isVisible ? 'reveal-visible' : ''} delay-150`}>
            <div className="w-10 h-10 rounded-2xl bg-coral-500/20 text-coral-400 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold font-fredoka text-white">Direct Contact</h4>
            <div className="text-xs text-slate-400 space-y-2">
              <p>
                <span className="text-slate-500 block">Admissions Desk:</span>
                <a href={`tel:${brand.contact.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-white hover:text-amber-400">
                  {brand.contact.phone}
                </a>
              </p>
              <p>
                <span className="text-slate-500 block">Landline:</span>
                <span className="text-slate-300">{brand.contact.alternatePhone}</span>
              </p>
              <p>
                <span className="text-slate-500 block">Email:</span>
                <a href={`mailto:${brand.contact.email}`} className="text-slate-300 hover:text-amber-400">
                  {brand.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Col 4: Quick Action & Trust */}
          <div className={`footer-col space-y-4 reveal-init ${isVisible ? 'reveal-visible' : ''} delay-225`}>
            <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold font-fredoka text-white">Parent Assurance</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              100% CCTV transparency, verified Didis & female staff, doctor on call, and nutritious in-house kitchen.
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold font-fredoka flex items-center justify-center gap-2 transition-all shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => onOpenInquiryModal('Footer Campus Visit')}
                className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl text-xs font-bold font-fredoka transition-all"
              >
                Book Campus Visit
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-5 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} {brand.name}. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>NEP 2020 Aligned</span>
            <span>•</span>
            <span>ECCE Certified</span>
            <span>•</span>
            <span>Child Safety Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
