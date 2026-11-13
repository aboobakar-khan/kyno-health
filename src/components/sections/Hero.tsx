"use client";

import { motion } from "framer-motion";
import { Check, PhoneCall, ShieldCheck, Clock, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#D8E6DF] min-h-[620px] lg:min-h-[700px] flex items-center">
      {/* Right Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-right"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        {/* Soft edge blend overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(216, 230, 223, 1) 0%, rgba(216, 230, 223, 0.96) 48%, rgba(216, 230, 223, 0.4) 75%, transparent 100%)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl lg:max-w-2xl"
        >
          {/* Top Location / Status Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2F28]/10 border border-[#0F2F28]/15 px-3.5 py-1 text-xs font-semibold text-[#0F2F28] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>Gurgaon &amp; Delhi NCR • 24/7 Immediate Dispatch</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-light leading-[1.14] text-[#0F2F28] tracking-tight">
            Hospital-grade caretaker &amp; medical care at home in Gurgaon
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#0F2F28]/85 leading-relaxed font-normal">
            Certified General Duty Assistants (GDAs), 12h/24h live-in caretakers, and emergency doctors dispatched to your doorstep in 20–30 minutes across Gurugram. Compassionate recovery for seniors, bedridden patients, and post-surgery care.
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
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0F2F28] px-6 py-3 text-xs sm:text-sm font-semibold text-[#0F2F28] transition-all hover:bg-[#0F2F28] hover:text-white"
            >
              <PhoneCall className="w-4 h-4 text-[#FB923C]" />
              <span>+91 99531 04104</span>
            </a>
          </div>

          {/* Trust Badges Strip (NABH, Police Verified, 20-min Doctor, 24/7 replacement) */}
          <div className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#0F2F28] font-medium">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2F28] text-white">
                <Award className="h-3 w-3 text-[#34D399]" />
              </span>
              <span>NABH-Aligned Protocols</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2F28] text-white">
                <ShieldCheck className="h-3 w-3 text-[#34D399]" />
              </span>
              <span>100% Police Verified</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2F28] text-white">
                <Clock className="h-3 w-3 text-[#FB923C]" />
              </span>
              <span>20-Min Doctor On-Call</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2F28] text-white">
                <Check className="h-3 w-3 text-[#34D399]" />
              </span>
              <span>Zero Brokerage Fee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
