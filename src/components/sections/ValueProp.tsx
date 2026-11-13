"use client";

import { HeartHandshake, Stethoscope, CheckCircle2 } from "lucide-react";

export default function ValueProp() {
  return (
    <div className="bg-[#FAF8F5] text-[#132D2E]">
      {/* Part 1: Trained GDAs vs Unverified Domestic Help */}
      <section className="py-20 lg:py-28 overflow-hidden border-b border-[#132D2E]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#00875A] mb-3">
                <HeartHandshake className="w-4 h-4" />
                <span>Specialized Bedside Assistance</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-light leading-[1.18] text-[#132D2E]">
                Empathetic, structured care — not just domestic help.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#132D2E]/80 leading-relaxed font-normal">
                Our caretakers are certified General Duty Assistants (GDAs) trained in patient ergonomics, bed sore prevention (Q2H turning), personal hygiene, diaper care, and medication schedules. They provide loving companionship while maintaining rigorous patient safety standards.
              </p>

              <div className="mt-6 space-y-3 text-sm text-[#132D2E]/85">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00875A] flex-shrink-0" />
                  <span>100% Police verification &amp; Aadhaar authentication</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00875A] flex-shrink-0" />
                  <span>Daily vitals tracking (BP, pulse, oxygen, glucose)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00875A] flex-shrink-0" />
                  <span>Prompt 4-hour standby replacement if caretaker is on leave</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/book-caretaker"
                  className="inline-flex items-center justify-center rounded-full bg-[#132D2E] px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#1B3340] transition-colors"
                >
                  Schedule a Caretaker Assessment
                </a>
              </div>
            </div>

            {/* Right: Real Healthcare Photo */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl bg-[#EADEC8] shadow-md aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1080&auto=format&fit=crop"
                  alt="Kyno Health Caretaker providing empathetic assistance at home in Gurgaon"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Doctor Backup & Clinical Supervision */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Real Healthcare Photo */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl bg-[#EADEC8] shadow-md aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1080&auto=format&fit=crop"
                  alt="Kyno Health Doctor visiting patient at home in Gurgaon"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FB923C] mb-3">
                <Stethoscope className="w-4 h-4" />
                <span>24/7 Clinical Emergency Support</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-light leading-[1.18] text-[#132D2E]">
                Hospital-grade reassurance with an on-call doctor in 20 minutes.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#132D2E]/80 leading-relaxed font-normal">
                If your family member develops sudden breathing distress, high fever, or blood pressure fluctuation, you won&apos;t have to scramble or panic. Kyno Health connects your caretaker directly to our Medical Command Center.
              </p>
              <p className="mt-4 text-base sm:text-lg text-[#132D2E]/80 leading-relaxed font-normal">
                A certified physician reaches your doorstep anywhere in Gurgaon in 20–30 minutes, equipped with mobile ECG, IV setups, and oxygen saturation monitors.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+919953104104"
                  className="inline-flex items-center justify-center rounded-full bg-[#132D2E] px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#1B3340] transition-colors"
                >
                  Call +91 99531 04104
                </a>
                <a
                  href="/services/doctor-at-home"
                  className="inline-flex items-center justify-center rounded-full border border-[#132D2E]/30 px-6 py-3.5 text-sm font-medium text-[#132D2E] hover:bg-[#132D2E]/5 transition-colors"
                >
                  Learn About Doctor at Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
