import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, Calendar, MapPin, Send, ShieldCheck, Car } from 'lucide-react';
import { VEHICLES } from '../../data/vehicles';

export const ExperienceSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vehicleInterest: 'AUREON GT-X',
    experienceType: 'Private Atelier Consultation',
    salonLocation: 'Zurich Atelier — Bahnhofstrasse',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<{
    referenceId: string;
    submittedAt: string;
  } | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please provide your full legal name.';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Please provide a contact telephone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmation({
        referenceId: `AUR-${Math.floor(100000 + Math.random() * 900000)}`,
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })
      });
    }, 600);
  };

  const handleReset = () => {
    setBookingConfirmation(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      vehicleInterest: 'AUREON GT-X',
      experienceType: 'Private Atelier Consultation',
      salonLocation: 'Zurich Atelier — Bahnhofstrasse',
      notes: ''
    });
  };

  return (
    <section id="inquiry" className="relative w-full py-28 md:py-36 bg-[#111317] text-[#F5F5F2] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Intro & Concierge Information */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#C8A96B] mb-3">
              <span>PRIVATE SALON</span>
              <span className="text-white/20">·</span>
              <span>CLIENT COMMISSIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-display tracking-tight text-[#F5F5F2] leading-tight mb-6">
              RESERVE YOUR <br />
              <span className="text-[#C8A96B]">PRIVATE VIEWING.</span>
            </h2>
            <p className="text-base text-[#A1A5AE] font-light leading-relaxed mb-8">
              Aureon vehicles are produced in strictly numbered allocations. Schedule a confidential private consultation at one of our global flagship salons or arrange a private track evaluation.
            </p>

            <div className="space-y-6 pt-6 border-t border-white/10 text-xs font-mono-tech text-[#A1A5AE]">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F5F5F2] uppercase tracking-wider mb-1">
                    Flagship Salons
                  </strong>
                  <span>Zurich · London Mayfair · Tokyo Ginza · Los Angeles Beverly Hills · Dubai DIFC</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ShieldCheck className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F5F5F2] uppercase tracking-wider mb-1">
                    Confidential Allocation Guarantee
                  </strong>
                  <span>Every inquiry is handled under strict client discretion with a dedicated concierge advisor.</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Car className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F5F5F2] uppercase tracking-wider mb-1">
                    Bespoke Atelier Commissioning
                  </strong>
                  <span>Tailor carbon layups, aniline leathers, anodized switchgear, and acoustic calibrations.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form or Receipt */}
          <div className="lg:col-span-7 bg-[#17191E] border border-white/10 rounded-sm p-8 sm:p-10 relative">
            {bookingConfirmation ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 text-center space-y-6"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#C8A96B]/10 border border-[#C8A96B] flex items-center justify-center text-[#C8A96B]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#C8A96B]">
                    VIP Allocation Dossier Created
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-display text-[#F5F5F2] mt-2">
                    Inquiry Confirmed
                  </h3>
                  <p className="text-sm text-[#A1A5AE] max-w-md mx-auto mt-2 font-light">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your private salon consultation request has been logged in our secure client database.
                  </p>
                </div>

                <div className="bg-[#111317] border border-white/10 p-6 rounded-sm max-w-md mx-auto text-left space-y-3 font-mono-tech text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A1A5AE]">Reference Number:</span>
                    <span className="text-[#C8A96B] font-bold">{bookingConfirmation.referenceId}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A1A5AE]">Selected Model:</span>
                    <span className="text-[#F5F5F2]">{formData.vehicleInterest}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A1A5AE]">Consultation Format:</span>
                    <span className="text-[#F5F5F2]">{formData.experienceType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A1A5AE]">Atelier Location:</span>
                    <span className="text-[#F5F5F2]">{formData.salonLocation}</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#A1A5AE]/70 font-mono-tech">
                  * Demo reservation simulation. Your dedicated Aureon concierge liaison will contact you within 24 business hours.
                </p>

                <button
                  onClick={handleReset}
                  type="button"
                  className="px-6 py-2.5 bg-transparent border border-white/20 hover:border-white/50 text-[#F5F5F2] text-xs uppercase tracking-[0.16em] rounded-sm transition-colors"
                >
                  Submit Another Commission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-lg font-bold font-display uppercase tracking-tight text-[#F5F5F2]">
                    Concierge Reservation Dossier
                  </h3>
                  <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#C8A96B]">
                    SECURE INQUIRY
                  </span>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#A1A5AE] mb-2">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Lord Julian Vance"
                      className={`w-full px-4 py-3 bg-[#111317] border text-sm text-[#F5F5F2] placeholder-[#A1A5AE]/40 rounded-sm focus:outline-none focus:ring-1 transition-colors ${
                        errors.fullName ? 'border-red-500/80 focus:ring-red-500' : 'border-white/15 focus:border-[#C8A96B] focus:ring-[#C8A96B]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs font-mono-tech mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#A1A5AE] mb-2">
                      Private Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@sanctuary.com"
                      className={`w-full px-4 py-3 bg-[#111317] border text-sm text-[#F5F5F2] placeholder-[#A1A5AE]/40 rounded-sm focus:outline-none focus:ring-1 transition-colors ${
                        errors.email ? 'border-red-500/80 focus:ring-red-500' : 'border-white/15 focus:border-[#C8A96B] focus:ring-[#C8A96B]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs font-mono-tech mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Telephone & Vehicle Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#A1A5AE] mb-2">
                      Direct Telephone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+41 44 215 0000"
                      className={`w-full px-4 py-3 bg-[#111317] border text-sm text-[#F5F5F2] placeholder-[#A1A5AE]/40 rounded-sm focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone ? 'border-red-500/80 focus:ring-red-500' : 'border-white/15 focus:border-[#C8A96B] focus:ring-[#C8A96B]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs font-mono-tech mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#A1A5AE] mb-2">
                      Chassis of Interest
                    </label>
                    <select
                      value={formData.vehicleInterest}
                      onChange={(e) => setFormData({ ...formData, vehicleInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111317] border border-white/15 text-sm text-[#F5F5F2] rounded-sm focus:outline-none focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] transition-colors"
                    >
                      {VEHICLES.map((v) => (
                        <option key={v.id} value={v.name} className="bg-[#111317] text-white">
                          {v.name} ({v.categoryLabel})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Format & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#A1A5AE] mb-2">
                      Experience Format
                    </label>
                    <select
                      value={formData.experienceType}
                      onChange={(e) => setFormData({ ...formData, experienceType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111317] border border-white/15 text-sm text-[#F5F5F2] rounded-sm focus:outline-none focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] transition-colors"
                    >
                      <option value="Private Atelier Consultation">Private Atelier Consultation</option>
                      <option value="Proving Grounds Dynamic Drive">Proving Grounds Dynamic Drive</option>
                      <option value="Virtual Bespoke Configurator">Virtual Bespoke Configurator Session</option>
                      <option value="Executive Fleet Allocation">Executive Fleet Allocation Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#A1A5AE] mb-2">
                      Preferred Flagship Salon
                    </label>
                    <select
                      value={formData.salonLocation}
                      onChange={(e) => setFormData({ ...formData, salonLocation: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111317] border border-white/15 text-sm text-[#F5F5F2] rounded-sm focus:outline-none focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] transition-colors"
                    >
                      <option value="Zurich Atelier — Bahnhofstrasse">Zurich Atelier — Bahnhofstrasse</option>
                      <option value="London Atelier — Mayfair">London Atelier — Mayfair</option>
                      <option value="Tokyo Atelier — Ginza">Tokyo Atelier — Ginza</option>
                      <option value="Los Angeles Atelier — Beverly Hills">Los Angeles Atelier — Beverly Hills</option>
                      <option value="Dubai Atelier — DIFC Gate Avenue">Dubai Atelier — DIFC Gate Avenue</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#A1A5AE] mb-2">
                    Bespoke Requirements / Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Specific colorway interests, delivery timeframe, or customized interior appointment requests..."
                    className="w-full px-4 py-3 bg-[#111317] border border-white/15 text-sm text-[#F5F5F2] placeholder-[#A1A5AE]/40 rounded-sm focus:outline-none focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B] transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C8A96B] hover:bg-[#d8bd82] active:bg-[#b89753] disabled:opacity-60 text-[#08090B] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#C8A96B]/20"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Encrypting & Transmitting Dossier...</span>
                  ) : (
                    <>
                      <span>Transmit Private Salon Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
