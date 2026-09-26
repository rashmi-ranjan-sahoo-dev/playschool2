import React, { useState } from 'react';
import { X, Calendar, Phone, User, Baby, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InquiryModal({ isOpen, onClose, brand, source = "General Inquiry" }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    childAge: '2.5',
    program: 'Playgroup — Anand Vatika',
    visitDate: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger joyful celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = `Hello ${brand.name}, I would like to book a campus tour.\nParent Name: ${formData.parentName}\nChild Name: ${formData.childName}\nAge: ${formData.childAge}\nProgram: ${formData.program}\nPreferred Visit Date: ${formData.visitDate}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-500 to-coral-500 text-white p-6 sm:p-7 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2 font-fredoka">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>Admissions Open {brand.admissions.year}</span>
          </div>
          <h3 className="text-2xl font-extrabold font-fredoka">
            Book a Campus Tour & Meeting
          </h3>
          <p className="text-xs text-white/90 mt-1">
            Experience our joyful classrooms, meet the Didis & educators.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-fredoka text-slate-800">
                Tour Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong className="text-slate-800">{formData.parentName || 'Parent'}</strong>. Our admissions counselor will call you on <strong className="text-slate-800">{formData.phone}</strong> shortly to confirm your visit slot.
              </p>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${brand.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-fredoka font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Forward Details on WhatsApp</span>
                </a>

                <button
                  onClick={resetAndClose}
                  className="w-full py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-fredoka text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 font-fredoka mb-1">
                  Parent's Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 font-fredoka mb-1">
                  Phone Number (WhatsApp) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 font-fredoka mb-1">
                    Child's Name
                  </label>
                  <div className="relative">
                    <Baby className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Aarav"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 font-fredoka mb-1">
                    Child's Age
                  </label>
                  <select
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm bg-white"
                  >
                    <option value="1.5">1.5 - 2 Years</option>
                    <option value="2.5">2 - 3 Years</option>
                    <option value="3.5">3 - 4 Years</option>
                    <option value="4.5">4 - 5 Years</option>
                    <option value="5.5">5 - 6 Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 font-fredoka mb-1">
                  Program of Interest
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm bg-white"
                >
                  <option value="Toddler Nest (1.5 - 2.5 Yrs)">Toddler Nest (1.5 - 2.5 Yrs)</option>
                  <option value="Playgroup — Anand Vatika (2 - 3 Yrs)">Playgroup — Anand Vatika (2 - 3 Yrs)</option>
                  <option value="Nursery — Bal Vihar (3 - 4 Yrs)">Nursery — Bal Vihar (3 - 4 Yrs)</option>
                  <option value="Junior KG / LKG (4 - 5 Yrs)">Junior KG / LKG (4 - 5 Yrs)</option>
                  <option value="Senior KG / UKG (5 - 6 Yrs)">Senior KG / UKG (5 - 6 Yrs)</option>
                  <option value="Full Day Daycare with Meals">Full Day Daycare with Meals</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 font-fredoka mb-1">
                  Preferred Date for Campus Visit
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-fredoka font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-coral-500/30"
                >
                  Confirm & Schedule Tour
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                🔒 Your contact details are kept strictly private.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
