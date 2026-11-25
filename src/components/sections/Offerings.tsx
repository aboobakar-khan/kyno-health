"use client";

import { useState } from "react";
import { Phone, ShieldCheck } from "lucide-react";

export default function Offerings() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const roadmapItems12h = [
    "Certified General Duty Assistant (GDA)",
    "Personal hygiene, sponge bath & diaper care",
    "Bed sore prevention (Q2H repositioning)",
    "Medication reminders & feeding assistance",
    "Daily vitals logging (BP, Pulse, SpO2)",
    "4-Hour standby replacement guarantee",
  ];

  const roadmapItems24h = [
    "Full-time resident GDA at patient bedside",
    "Post-surgical, stroke & bedridden recovery",
    "Wheelchair transfers & fall prevention",
    "Night-time monitoring & comfort support",
    "Weekly supervising doctor review call",
    "20-Min emergency doctor on-call across Gurgaon",
  ];

  return (
    <section className="bg-[#0F2F28] py-16 md:py-20 lg:py-28 text-[#132D2E] overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-xs font-medium text-[#34D399]">
            Transparent care packages
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-light leading-tight text-[#FAF8F5]">
            Flexible care plans designed around your family&apos;s needs
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-[#FAF8F5]/80">
            No broker commissions, no locked long-term contracts. Transparent daily and monthly rates with certified clinical oversight.
          </p>
        </div>

        {/* Desktop Interactive Expanding Accordion Cards (xl:flex) */}
        <div
          role="radiogroup"
          aria-label="Choose your Kyno Health care plan"
          className="hidden xl:flex w-full gap-4 items-stretch min-h-[604px]"
        >
          {/* ── CARD 0: 12-Hour Caretaker Shift ── */}
          <div
            role="radio"
            aria-checked={activeCard === 0}
            tabIndex={activeCard === 0 ? 0 : -1}
            onMouseEnter={() => setActiveCard(0)}
            onClick={() => setActiveCard(0)}
            style={{
              transition: "flex 550ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className={`min-h-[604px] min-w-0 bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-shadow duration-300 ${
              activeCard === 0 ? "flex-[7_1_0%]" : "flex-[3_1_0%] cursor-pointer hover:shadow-2xl"
            }`}
          >
            {/* Top Area */}
            <div>
              <p className="text-xs font-medium text-[#00875A] mb-3">
                Day and night bedside assistance
              </p>
              <h3
                className={`font-serif font-light leading-tight text-[#132D2E] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 0
                    ? "text-3xl sm:text-4xl lg:text-[38px]"
                    : "text-2xl sm:text-[28px] leading-[1.15]"
                }`}
              >
                12-Hour Caretaker Shift
              </h3>

              {/* Description when Collapsed */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 0
                    ? "max-h-0 opacity-0 mt-0 pointer-events-none"
                    : "max-h-[160px] opacity-100 mt-4"
                }`}
              >
                <p className="font-sans text-sm text-[#132D2E]/80 leading-relaxed font-normal">
                  Dedicated 12-hour day (8 AM–8 PM) or night (8 PM–8 AM) assistance by background-verified GDAs. Ideal for semi-dependent seniors and post-op care.
                </p>
              </div>

              {/* Horizontal Timeline Roadmap when Expanded */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 0
                    ? "max-h-[220px] opacity-100 mt-10 mb-8"
                    : "max-h-0 opacity-0 mt-0 mb-0 pointer-events-none"
                }`}
              >
                <ol className="relative grid grid-cols-6 gap-x-3" aria-label="What is included in this plan">
                  {/* Connecting Line */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[5.5px] right-[5.5px] top-[5px] h-px bg-[#00875A]/25"
                  />
                  {roadmapItems12h.map((item, idx) => (
                    <li key={idx} className="relative flex flex-col items-start gap-3 pr-2">
                      <span
                        aria-hidden="true"
                        className="relative z-10 block h-[11px] w-[11px] rounded-full bg-[#00875A] ring-2 ring-[#FAF8F5]"
                      />
                      <span className="font-sans text-[12px] leading-[1.4] text-[#132D2E] font-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Bottom Area: Pricing & CTA */}
            <div className="mt-auto pt-6">
              <span
                aria-hidden="true"
                className={`block h-px w-full bg-[#132D2E]/15 transition-opacity duration-500 mb-6 ${
                  activeCard === 0 ? "hidden" : "block"
                }`}
              />

              <div
                className={`grid grid-cols-1 gap-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 0 ? "lg:grid-cols-12 lg:items-end" : "flex flex-col"
                }`}
              >
                <div
                  className={`flex flex-col items-start text-left ${
                    activeCard === 0 ? "lg:col-span-7" : "w-full"
                  }`}
                >
                  <p className="font-sans text-base sm:text-[18px] text-[#132D2E] leading-snug">
                    <span className="font-bold text-xl sm:text-2xl text-[#0F2F28]">₹1,200/day</span>
                    <span className="text-sm text-[#132D2E]/70 font-normal"> or ₹28,000/month</span>
                  </p>
                  <p className="mt-1 font-sans text-xs sm:text-sm font-semibold text-[#00875A]">
                    Zero agency commission • Police-verified GDA
                  </p>
                  {activeCard === 0 && (
                    <p className="mt-1 font-sans text-xs text-[#132D2E]/60">
                      Flexible 7-day trial or monthly packages available across Gurgaon
                    </p>
                  )}
                  <a
                    href="/book-caretaker?plan=12h"
                    onClick={(e) => activeCard !== 0 && e.stopPropagation()}
                    className={`mt-5 inline-flex items-center justify-center rounded-full bg-[#FB923C] py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#EA580C] transition-all ${
                      activeCard === 0 ? "px-10" : "w-full px-6"
                    }`}
                  >
                    Book 12-Hour Care
                  </a>
                </div>

                {/* Description when Expanded */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeCard === 0
                      ? "lg:col-span-5 max-h-[160px] opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#132D2E]/80 font-normal">
                    Includes dedicated personal hygiene assistance, mobility support, medication management, and daily supervisor check-ins.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 1: 24-Hour Live-In Caretaker ── */}
          <div
            role="radio"
            aria-checked={activeCard === 1}
            tabIndex={activeCard === 1 ? 0 : -1}
            onMouseEnter={() => setActiveCard(1)}
            onClick={() => setActiveCard(1)}
            style={{
              transition: "flex 550ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className={`min-h-[604px] min-w-0 bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-shadow duration-300 ${
              activeCard === 1 ? "flex-[7_1_0%]" : "flex-[3_1_0%] cursor-pointer hover:shadow-2xl"
            }`}
          >
            {/* Top Area */}
            <div>
              <p className="text-xs font-medium text-[#00875A] mb-3">
                Round-the-clock bedside assistance
              </p>
              <h3
                className={`font-serif font-light leading-tight text-[#132D2E] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 1
                    ? "text-3xl sm:text-4xl lg:text-[38px]"
                    : "text-2xl sm:text-[28px] leading-[1.15]"
                }`}
              >
                24-Hour Live-In Caretaker
              </h3>

              {/* Description when Collapsed */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 1
                    ? "max-h-0 opacity-0 mt-0 pointer-events-none"
                    : "max-h-[180px] opacity-100 mt-4"
                }`}
              >
                <p className="font-sans text-sm text-[#132D2E]/80 leading-relaxed font-normal">
                  Resident 24/7 bedside companion for bedridden, dementia, or severe post-operative patients with weekly doctor oversight.
                </p>
              </div>

              {/* Horizontal Timeline Roadmap when Expanded */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 1
                    ? "max-h-[220px] opacity-100 mt-10 mb-8"
                    : "max-h-0 opacity-0 mt-0 mb-0 pointer-events-none"
                }`}
              >
                <ol className="relative grid grid-cols-6 gap-x-3" aria-label="What is included in this plan">
                  {/* Connecting Line */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[5.5px] right-[5.5px] top-[5px] h-px bg-[#00875A]/25"
                  />
                  {roadmapItems24h.map((item, idx) => (
                    <li key={idx} className="relative flex flex-col items-start gap-3 pr-2">
                      <span
                        aria-hidden="true"
                        className="relative z-10 block h-[11px] w-[11px] rounded-full bg-[#00875A] ring-2 ring-[#FAF8F5]"
                      />
                      <span className="font-sans text-[12px] leading-[1.4] text-[#132D2E] font-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Bottom Area: Pricing & CTA */}
            <div className="mt-auto pt-6">
              <span
                aria-hidden="true"
                className={`block h-px w-full bg-[#132D2E]/15 transition-opacity duration-500 mb-6 ${
                  activeCard === 1 ? "hidden" : "block"
                }`}
              />

              <div
                className={`grid grid-cols-1 gap-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 1 ? "lg:grid-cols-12 lg:items-end" : "flex flex-col"
                }`}
              >
                <div
                  className={`flex flex-col items-start text-left ${
                    activeCard === 1 ? "lg:col-span-7" : "w-full"
                  }`}
                >
                  <p className="font-sans text-base sm:text-[18px] text-[#132D2E] leading-snug">
                    <span className="font-bold text-xl sm:text-2xl text-[#0F2F28]">₹1,800/day</span>
                    <span className="text-sm text-[#132D2E]/70 font-normal"> or ₹42,000/month</span>
                  </p>
                  <p className="mt-1 font-sans text-xs sm:text-sm font-semibold text-[#00875A]">
                    Includes weekly supervising doctor audit
                  </p>
                  <p className="mt-1 font-sans text-xs text-[#132D2E]/60 leading-relaxed">
                    24/7 dedicated support with 4-hour standby replacement on leaves
                  </p>
                  <a
                    href="/book-caretaker?plan=24h"
                    onClick={(e) => activeCard !== 1 && e.stopPropagation()}
                    className={`mt-5 inline-flex items-center justify-center rounded-full bg-[#0F2F28] py-3.5 text-sm font-semibold text-white hover:bg-[#1A423A] transition-all ${
                      activeCard === 1 ? "px-10" : "w-full px-6"
                    }`}
                  >
                    Book 24/7 Live-In Care
                  </a>
                </div>

                {/* Description when Expanded */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeCard === 1
                      ? "lg:col-span-5 max-h-[180px] opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#132D2E]/80 font-normal">
                    Complete reassurance for families caring for loved ones with advanced dementia, stroke paralysis, or extensive post-op rehabilitation needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile & Tablet View (xl:hidden) ── */}
        <div className="flex xl:hidden flex-col gap-6 w-full max-w-[640px] mx-auto">
          {/* Mobile Card 1: 12-Hour Caretaker Shift */}
          <div className="flex flex-col gap-7 sm:gap-8 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 shadow-md">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium text-[#00875A]">
                Day or night care
              </p>
              <h3 className="font-serif font-light text-[#132D2E] text-[28px] sm:text-[32px] leading-[1.15]">
                12-Hour Caretaker Shift
              </h3>
            </div>

            <div className="font-sans text-[14px] leading-relaxed text-[#132D2E]/85">
              <p>
                Dedicated 12-hour support for seniors and post-op patients. Includes personal hygiene, feeding, medication scheduling, and vitals tracking.
              </p>
            </div>

            <ol className="relative flex flex-col gap-3.5 sm:gap-4" aria-label="What is included">
              <span
                aria-hidden="true"
                className="absolute left-[5px] top-[6px] bottom-[6px] w-px bg-[#00875A]/30"
              />
              {roadmapItems12h.map((item, idx) => (
                <li key={idx} className="relative flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="relative z-10 mt-[5px] block h-[10px] w-[10px] flex-none rounded-full bg-[#00875A] ring-2 ring-[#FAF8F5]"
                  />
                  <span className="font-sans text-[13px] leading-snug text-[#132D2E]">
                    {item}
                  </span>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-5 pt-4 border-t border-[#132D2E]/15">
              <div>
                <p className="font-sans text-[20px] font-bold text-[#0F2F28]">
                  ₹1,200/day <span className="text-sm font-normal text-[#132D2E]/70">or ₹28,000/month</span>
                </p>
                <p className="mt-1 text-xs text-[#00875A] font-semibold">
                  Zero agency brokerage fee • 4-hr backup replacement
                </p>
              </div>

              <a
                href="/book-caretaker?plan=12h"
                className="inline-flex items-center justify-center rounded-full bg-[#FB923C] text-white py-3.5 px-8 text-sm font-semibold hover:bg-[#EA580C] transition-all shadow-sm"
              >
                Book 12-Hour Care
              </a>
            </div>
          </div>

          {/* Mobile Card 2: 24-Hour Live-In Caretaker */}
          <div className="flex flex-col gap-7 sm:gap-8 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 shadow-md">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium text-[#00875A]">
                24/7 Bedside recovery
              </p>
              <h3 className="font-serif font-light text-[#132D2E] text-[28px] sm:text-[32px] leading-[1.15]">
                24-Hour Live-In Caretaker
              </h3>
            </div>

            <div className="font-sans text-[14px] leading-relaxed text-[#132D2E]/85">
              <p>
                Resident 24/7 caretaker staying with the patient. Ideal for bedridden, dementia, or severe post-surgical rehabilitation.
              </p>
            </div>

            <ol className="relative flex flex-col gap-3.5 sm:gap-4" aria-label="What is included">
              <span
                aria-hidden="true"
                className="absolute left-[5px] top-[6px] bottom-[6px] w-px bg-[#00875A]/30"
              />
              {roadmapItems24h.map((item, idx) => (
                <li key={idx} className="relative flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="relative z-10 mt-[5px] block h-[10px] w-[10px] flex-none rounded-full bg-[#00875A] ring-2 ring-[#FAF8F5]"
                  />
                  <span className="font-sans text-[13px] leading-snug text-[#132D2E]">
                    {item}
                  </span>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-5 pt-4 border-t border-[#132D2E]/15">
              <div>
                <p className="font-sans text-[20px] font-bold text-[#0F2F28]">
                  ₹1,800/day <span className="text-sm font-normal text-[#132D2E]/70">or ₹42,000/month</span>
                </p>
                <p className="mt-1 text-xs text-[#00875A] font-semibold">
                  Includes supervising doctor review &amp; emergency backup
                </p>
              </div>

              <a
                href="/book-caretaker?plan=24h"
                className="inline-flex items-center justify-center rounded-full bg-[#0F2F28] text-white py-3.5 px-8 text-sm font-semibold hover:bg-[#1A423A] transition-all shadow-sm"
              >
                Book 24/7 Live-In Care
              </a>
            </div>
          </div>
        </div>

        {/* Rapid Doctor Consultation Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FB923C] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Immediate doctor evaluation</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-light">
              Doctor home visit in Gurgaon within 20–30 minutes
            </h4>
            <p className="text-xs sm:text-sm text-white/80 mt-1">
              Experienced physicians arrive with portable diagnostics, ECG, and emergency kits for ₹999 / visit.
            </p>
          </div>

          <a
            href="tel:+919953104104"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-[#FB923C] hover:bg-[#EA580C] text-white px-7 py-3 text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 99531 04104</span>
          </a>
        </div>
      </div>
    </section>
  );
}
