"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Clock, Award, Star, Stethoscope, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] text-[#132D2E] py-16 sm:py-20 lg:py-24 border-b border-[#0F2F28]/5">
      {/* Subtle organic ambient warmth */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#E7EFEA]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#FB923C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline, Narrative & CTAs (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Top Location / Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#0F2F28]/15 px-3.5 py-1 text-xs font-semibold text-[#0F2F28] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Gurgaon &amp; Delhi NCR • 24/7 Immediate Dispatch Active</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-light leading-[1.12] text-[#0F2F28] tracking-tight">
              Hospital-grade caretaker &amp; emergency medical care at home
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#0F2F28]/80 leading-relaxed font-normal max-w-2xl">
              Certified General Duty Assistants (GDAs), 12h/24h live-in attendants, and qualified physicians dispatched to your doorstep in 20 minutes across Gurugram. Compassionate recovery for seniors, bedridden patients, and post-surgery care.
            </p>

            {/* Action Buttons: Clean & Balanced (Two primary options) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/book-caretaker"
                className="inline-flex items-center justify-center rounded-full bg-[#FB923C] hover:bg-[#EA580C] px-8 py-4 text-sm font-semibold text-white shadow-md transition-all active:scale-95"
              >
                <span>Book Caretaker (12h / 24h)</span>
              </a>

              <a
                href="/book-doctor"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F2F28] hover:bg-[#1A4D43] px-7 py-4 text-sm font-semibold text-white shadow-md transition-all active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Book Doctor in 20 Mins (₹1999)</span>
                <ArrowRight className="w-4 h-4 ml-0.5 text-[#34D399]" />
              </a>
            </div>

            {/* Continuous Clean Trust Strip */}
            <div className="mt-12 pt-8 border-t border-[#0F2F28]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-[#0F2F28]">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00875A]/10 text-[#00875A] flex-shrink-0">
                  <Award className="h-3.5 w-3.5 text-[#00875A]" />
                </span>
                <span>NABH Standard</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00875A]/10 text-[#00875A] flex-shrink-0">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#00875A]" />
                </span>
                <span>100% Police Verified</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FB923C]/10 text-[#FB923C] flex-shrink-0">
                  <Clock className="h-3.5 w-3.5 text-[#FB923C]" />
                </span>
                <span>20-Min Doctor Dispatch</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00875A]/10 text-[#00875A] flex-shrink-0">
                  <Check className="h-3.5 w-3.5 text-[#00875A]" />
                </span>
                <span>Zero Brokerage Fee</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Refined Editorial Doctor Portrait Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Doctor Card Frame */}
              <div className="relative overflow-hidden rounded-[32px] bg-[#E7EFEA] border-4 border-white shadow-[0_20px_50px_rgba(15,47,40,0.1)] aspect-[4/5]">
                <img
                  src="/images/doctor-kyno.jpg"
                  alt="Dr. K. S. Sharma, MD - Medical Director at Kyno Health Gurgaon"
                  className="w-full h-full object-cover object-top"
                />

                {/* Top Badge Inside Card */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-[#0F2F28]/10 text-[11px] font-bold text-[#0F2F28]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span>20-Min Dispatch Active • Sector 46 HQ</span>
                </div>

                {/* Floating Glassmorphic Footer Overlay */}
                <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#0F2F28]/10">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#00875A] mb-0.5">
                        <Stethoscope className="w-3 h-3" />
                        Senior Physician Led
                      </div>
                      <div className="font-serif text-lg font-normal text-[#0F2F28]">
                        Dr. K. S. Sharma, MD, MBBS
                      </div>
                      <div className="text-[11px] text-gray-600 mt-0.5">
                        Medical Director • Ex-AIIMS New Delhi &amp; Medanta
                      </div>
                    </div>

                    <div className="flex flex-col items-end flex-shrink-0">
                      <div className="flex items-center text-amber-500 text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-bold ml-1 text-gray-800">4.9/5</span>
                      </div>
                      <span className="text-[10px] text-gray-500 mt-0.5 font-medium">30k+ Families</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
