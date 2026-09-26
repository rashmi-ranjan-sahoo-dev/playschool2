import React from 'react';
import { Phone, Mail, MapPin, Video, MessageCircle, Clock } from 'lucide-react';

export default function TopBar({ brand, onOpenCctvModal }) {
  const whatsappUrl = `https://wa.me/${brand.contact.whatsapp}?text=Hello%20${encodeURIComponent(brand.name)},%20I%20would%20like%20to%20inquire%20about%20admissions.`;

  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
        {/* Contact info */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href={`tel:${brand.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white">{brand.contact.phone}</span>
          </a>

          <a
            href={`mailto:${brand.contact.email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{brand.contact.email}</span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="truncate max-w-xs">{brand.contact.address}</span>
          </div>
        </div>

        {/* Action items & CCTV link */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all hover:scale-105"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={onOpenCctvModal}
            className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors border-l border-slate-700 pl-3"
          >
            <Video className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            <span className="hidden sm:inline">Parent CCTV Portal</span>
            <span className="sm:hidden">CCTV</span>
          </button>

          <span className="text-[11px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-medium hidden sm:inline-block">
            {brand.admissions.status}
          </span>
        </div>
      </div>
    </div>
  );
}
