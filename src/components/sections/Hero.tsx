"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Clock, Award, Star, Stethoscope, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#FAF8F5] text-[#132D2E] py-16 sm:py-20 lg:py-24 border-b border-[#0F2F28]/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline, Narrative & CTAs (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Top Location / Status Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#0F2F28]/10 px-3 py-1 text-xs font-medium text-[#0F2F28] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Gurugram &amp; Delhi NCR • 24/7 Immediate dispatch</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-light leading-[1.12] text-[#0F2F28] tracking-tight">
              Hospital-grade caretaker &amp; emergency medical care at home
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#0F2F28]/80 leading-relaxed font-normal max-w-2xl">
              Certified General Duty Assistants (GDAs), 12h/24h live-in attendants, and qualified physicians dispatched to your doorstep in 20 minutes across Gurugram. Compassionate recovery for seniors, bedridden patients, and post-surgery care.
            </p>

            {/* Action Buttons: Clean & Balanced */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="/book-caretaker"
                className="inline-flex items-center justify-center rounded-full bg-[#FB923C] hover:bg-[#EA580C] px-7 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors active:scale-95"
              >
                <span>Book caretaker (12h / 24h)</span>
              </a>

              <a
                href="/book-doctor"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F2F28] hover:bg-[#1A4D43] px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors active:scale-95"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Book doctor in 20 mins (₹1999)</span>
                <ArrowRight className="w-4 h-4 ml-0.5 text-[#34D399]" />
              </a>
            </div>

            {/* Quiet, Aligned Trust Row */}
            <div className="mt-12 pt-8 border-t border-[#0F2F28]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-normal text-[#0F2F28]/80">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#0F2F28]/60 flex-shrink-0" />
                <span>NABH protocol aligned</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#0F2F28]/60 flex-shrink-0" />
                <span>100% Police verified</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#0F2F28]/60 flex-shrink-0" />
                <span>20-Min doctor arrival</span>
              </div>

              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#0F2F28]/60 flex-shrink-0" />
                <span>Direct clinical pricing</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Refined Editorial Doctor Portrait Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Doctor Card Frame */}
              <div className="relative overflow-hidden rounded-[28px] bg-[#E7EFEA] border border-[#0F2F28]/10 shadow-sm aspect-[4/5]">
                <img
                  src="/images/doctor-kyno.jpg"
                  alt="Dr. K. S. Sharma, MD - Medical Director at Kyno Health Gurgaon"
                  className="w-full h-full object-cover object-top"
                />

                {/* Top Badge Inside Card */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#0F2F28]/10 text-xs font-medium text-[#0F2F28]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>20-Min dispatch • Sector 46 Hub</span>
                </div>

                {/* Floating Glassmorphic Footer Overlay */}
                <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-[#0F2F28]/10">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-1 text-[11px] font-medium text-[#00875A] mb-0.5">
                        <Stethoscope className="w-3.5 h-3.5" />
                        <span>Physician led</span>
                      </div>
                      <div className="font-serif text-lg font-normal text-[#0F2F28]">
                        Dr. K. S. Sharma, MD, MBBS
                      </div>
                      <div className="text-xs text-[#0F2F28]/70 mt-0.5">
                        Medical Director • Ex-AIIMS New Delhi &amp; Medanta
                      </div>
                    </div>

                    <div className="flex flex-col items-end flex-shrink-0 pt-0.5">
                      <div className="flex items-center text-amber-500 text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-semibold ml-1 text-gray-800">4.9/5</span>
                      </div>
                      <span className="text-[11px] text-gray-500 mt-0.5">30k+ families</span>
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
