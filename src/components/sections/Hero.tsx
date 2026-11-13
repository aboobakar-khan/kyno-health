"use client";

import { motion } from "framer-motion";
import { Check, PhoneCall, ShieldCheck, Clock, Award, Star, Stethoscope } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E7EFEA] via-[#EDF3EF] to-[#FAF8F5] py-14 sm:py-20 lg:py-24">
      {/* Subtle organic ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#34D399]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FB923C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline, Narrative & CTAs (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Top Location / Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-[#0F2F28]/15 px-3.5 py-1 text-xs font-semibold text-[#0F2F28] mb-6 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Gurgaon &amp; Delhi NCR • 24/7 Immediate Dispatch Active</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-light leading-[1.12] text-[#0F2F28] tracking-tight">
              Hospital-grade caretaker &amp; emergency medical care at home
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#0F2F28]/85 leading-relaxed font-normal max-w-2xl">
              Certified General Duty Assistants (GDAs), 12h/24h live-in attendants, and qualified physicians dispatched to your doorstep in 20 minutes across Gurugram. Compassionate recovery for seniors, bedridden patients, and post-surgery care.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="/book-doctor"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00875A] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#00704A] active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>Book Doctor in 20 Mins (₹1999)</span>
              </a>

              <a
                href="/book-caretaker"
                className="inline-flex items-center justify-center rounded-full bg-[#FB923C] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#EA580C] active:scale-95"
              >
                Book Caretaker (12h / 24h)
              </a>

              <a
                href="tel:+919953104104"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0F2F28] px-5 py-3 text-xs sm:text-sm font-semibold text-[#0F2F28] transition-all hover:bg-[#0F2F28] hover:text-white"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#FB923C]" />
                <span>+91 99531 04104</span>
              </a>
            </div>

            {/* Trust Badges Strip (NABH, Police Verified, 20-min Doctor, Zero Brokerage) */}
            <div className="mt-10 pt-8 border-t border-[#0F2F28]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-[#0F2F28]">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2F28] text-white flex-shrink-0">
                  <Award className="h-3 w-3 text-[#34D399]" />
                </span>
                <span>NABH-Aligned Protocols</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2F28] text-white flex-shrink-0">
                  <ShieldCheck className="h-3 w-3 text-[#34D399]" />
                </span>
                <span>100% Police Verified</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2F28] text-white flex-shrink-0">
                  <Clock className="h-3 w-3 text-[#FB923C]" />
                </span>
                <span>20-Min Doctor On-Call</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2F28] text-white flex-shrink-0">
                  <Check className="h-3 w-3 text-[#34D399]" />
                </span>
                <span>Zero Brokerage Fee</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase Card with Real Clinician Assets (Span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl border-4 border-white aspect-[4/5] relative">
                <img
                  src="/images/doctor-kyno.jpg"
                  alt="Dr. K. S. Sharma, MD - Medical Director at Kyno Health Gurgaon"
                  className="w-full h-full object-cover object-top"
                />

                {/* Subtle Gradient Over Bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F2F28]/90 via-[#0F2F28]/50 to-transparent p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00875A] text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Stethoscope className="w-3 h-3" />
                    Senior Physician Led
                  </div>
                  <div className="font-serif text-xl font-normal">Dr. K. S. Sharma, MD, MBBS</div>
                  <div className="text-xs text-white/80 mt-0.5">Ex-AIIMS New Delhi • Medanta The Medicity</div>
                </div>
              </div>

              {/* Floating Badge 1: 20-Minute Emergency Dispatch */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-lg border border-[#0F2F28]/10 max-w-[210px] animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                  <span className="text-[11px] font-bold text-[#0F2F28] uppercase tracking-wider">
                    20-Min Dispatch
                  </span>
                </div>
                <p className="text-[11px] text-[#0F2F28]/70 mt-1 leading-tight">
                  Doctor on-call with portable ECG &amp; vitals monitor in Sector 46 Hub
                </p>
              </div>

              {/* Floating Badge 2: Google Reviews & Social Proof */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white rounded-2xl p-3.5 shadow-lg border border-[#0F2F28]/10 max-w-[200px]">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-gray-800 ml-1">4.9/5</span>
                </div>
                <div className="text-xs font-bold text-[#0F2F28]">30,000+ Happy Families</div>
                <div className="text-[10px] text-gray-500">Across DLF, Golf Course Rd &amp; Sohna Rd</div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
