"use client";

import { ArrowRight, Play } from "lucide-react";

export default function Outcomes() {
  const memberStories = [
    {
      id: "rajiv",
      name: "Rajiv Malhotra",
      location: "DLF Phase 5, Gurgaon",
      quote: "Finding a certified GDA caretaker for my 82-year-old father gave our family tremendous peace of mind.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=640&quality=75&auto=format&fit=crop",
      alt: "Kyno Health Patient Family Rajiv Malhotra in Gurgaon",
      showCta: true,
    },
    {
      id: "meenakshi",
      name: "Meenakshi K.",
      location: "Golf Course Road, Gurgaon",
      quote: "Post-knee surgery recovery at home was smooth, hygienic, and completely complication-free.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=640&quality=75&auto=format&fit=crop",
      alt: "Kyno Health Patient Meenakshi K.",
      showCta: false,
    },
    {
      id: "amitava",
      name: "Amitava Sengupta",
      location: "Sushant Lok 1, Gurgaon",
      quote: "Strict Q2H repositioning protocols saved my bedridden father from painful bed sores.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=640&quality=75&auto=format&fit=crop",
      alt: "Kyno Health Patient Amitava Sengupta",
      showCta: false,
    },
    {
      id: "sunita",
      name: "Sunita Deshmukh",
      location: "Sector 46, Gurugram",
      quote: "Kyno Health's doctor arrived at our doorstep in 22 minutes at 11 PM with a portable ECG machine.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=640&quality=75&auto=format&fit=crop",
      alt: "Kyno Health Emergency Home Care in Gurgaon",
      showCta: false,
    },
  ];

  const comparisonRows = [
    {
      feature: "100% Police & Identity Verified",
      maid: "x",
      hospital: "check",
      agency: "Varies",
      kyno: "check",
    },
    {
      feature: "Trained GDA Bedside Care & Hygiene",
      maid: "x",
      hospital: "check",
      agency: "x",
      kyno: "check",
    },
    {
      feature: "20-Min Emergency Doctor At Doorstep",
      maid: "x",
      hospital: "In-facility only",
      agency: "x",
      kyno: "check",
    },
    {
      feature: "Daily Clinical Vitals Monitoring",
      maid: "x",
      hospital: "check",
      agency: "x",
      kyno: "check",
    },
    {
      feature: "Standby 4-Hour Replacement Guarantee",
      maid: "x",
      hospital: "N/A",
      agency: "3-7 Days",
      kyno: "check",
    },
    {
      feature: "Cost & Transparency",
      maid: "₹",
      hospital: "₹₹₹₹₹",
      agency: "₹₹₹",
      kyno: "₹₹ (Direct)",
    },
    {
      feature: "Dignified Recovery at Home",
      maid: "check",
      hospital: "x",
      agency: "check",
      kyno: "check",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#132D2E]">
      {/* ── PART 1: 96% REAL RESULTS WITH VIDEO STORY CARDS ───────────── */}
      <section className="py-20 lg:py-28 overflow-hidden border-b border-[#132D2E]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-14">
            {/* Left Column: Stat Headline */}
            <div className="lg:w-[320px] lg:flex-shrink-0 mb-10 lg:mb-0">
              <p className="text-xs font-medium text-[#00875A] mb-3">
                Proven clinical outcomes
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-light leading-[1.18] text-[#132D2E]">
                96% of families report faster recovery and dignified comfort at home
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-[#132D2E]/75 leading-relaxed">
                Over 50,000+ bedside hours delivered with NABH-aligned patient safety protocols across Gurgaon and Delhi NCR.
              </p>
            </div>

            {/* Right Column: Member Stories Carousel */}
            <div className="flex-1 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory flex gap-4 sm:gap-6">
              {memberStories.map((story) => (
                <div
                  key={story.id}
                  className="flex-none w-[260px] sm:w-[280px] snap-start group relative rounded-2xl overflow-hidden shadow-md bg-white border border-[#132D2E]/10"
                >
                  <div className="relative aspect-[9/14] w-full overflow-hidden bg-neutral-900">
                    <img
                      src={story.image}
                      alt={story.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                    {/* Floating Video Play Badge Button */}
                    <button
                      className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/25 backdrop-blur-md text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00875A] cursor-pointer"
                      aria-label={`Play ${story.name}'s story`}
                    >
                      <Play className="h-4 w-4 fill-white translate-x-0.5" />
                    </button>

                    {/* Content Layer at bottom */}
                    <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10 flex flex-col justify-end">
                      <p className="font-sans text-xs text-[#34D399] font-medium mb-0.5">
                        {story.location}
                      </p>
                      <p className="font-sans text-xs font-semibold text-white/90 mb-1">
                        {story.name}
                      </p>
                      <p className="font-serif text-base sm:text-[17px] font-light leading-snug text-white">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </div>

                    {story.showCta && (
                      <div className="mt-4">
                        <a
                          href="/reviews"
                          className="inline-block rounded-full bg-[#FB923C] text-white px-5 py-2 text-xs font-medium hover:bg-[#EA580C] transition-colors"
                        >
                          See all Gurgaon reviews
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 2: HOW KYNO HEALTH COMPARES ── */}
      <section className="py-16 md:py-24 lg:py-36 overflow-visible relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs font-medium text-[#00875A] mb-3">
              Why families choose Kyno Health
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-light leading-[1.15] text-[#132D2E] tracking-tight">
              Hospital-grade clinical standards vs traditional home care
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#132D2E]/75">
              Compare why families in Gurgaon choose Kyno Health over unverified domestic maid agencies and prolonged hospital inpatient stays.
            </p>
          </div>

          {/* ── MOBILE 3-COLUMN TABLE ── */}
          <div className="block md:hidden border-t border-[#132D2E]/20 relative pb-12">
            {/* Table Header: 3 Columns */}
            <div className="grid grid-cols-3 items-stretch text-[#132D2E]">
              <div className="p-3 text-center leading-snug flex items-center justify-center text-[13px] font-normal border-b border-[#132D2E]/20">
                Unverified<br />Maid Agency
              </div>
              <div className="p-3 text-center leading-snug flex items-center justify-center text-[13px] font-normal border-b border-[#132D2E]/20">
                Hospital Ward<br />/ Inpatient
              </div>
              <div className="p-3 text-center text-[#132D2E] text-[14px] font-semibold leading-snug flex items-center justify-center bg-[#E7EFEA] border-b border-[#132D2E]/20">
                Kyno Health
              </div>
            </div>

            {/* Table Rows: 3 Columns */}
            <div>
              {comparisonRows.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3 items-stretch text-[#132D2E]"
                >
                  {/* Column 1: Maid */}
                  <div className="p-3 flex items-center justify-center text-center border-b border-[#132D2E]/20">
                    {row.maid === "check" ? (
                      <svg className="w-5 h-5 text-[#00875A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : row.maid === "x" ? (
                      <svg className="w-5 h-5 text-[#132D2E]/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    ) : (
                      <span className="text-xs font-medium text-[#132D2E]">{row.maid}</span>
                    )}
                  </div>

                  {/* Column 2: Hospital */}
                  <div className="p-3 flex items-center justify-center text-center border-b border-[#132D2E]/20">
                    {row.hospital === "check" ? (
                      <svg className="w-5 h-5 text-[#00875A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : row.hospital === "x" ? (
                      <svg className="w-5 h-5 text-[#132D2E]/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    ) : (
                      <span className="text-xs font-medium text-[#132D2E]">{row.hospital}</span>
                    )}
                  </div>

                  {/* Column 3: Kyno Health (Mint Column with stacked feature label) */}
                  <div className="p-3 flex flex-col items-center justify-center text-center bg-[#E7EFEA] border-b border-[#132D2E]/20">
                    <span className="text-[11px] text-[#132D2E]/80 leading-tight mb-1.5 font-normal">
                      {row.feature}
                    </span>
                    {row.kyno === "check" ? (
                      <svg className="w-6 h-6 text-[#00875A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : (
                      <span className="text-xs font-bold text-[#00875A]">{row.kyno}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── DESKTOP 5-COLUMN TABLE ── */}
          <div className="hidden md:block relative pb-10">
            <div className="overflow-x-auto pb-4 scrollbar-none">
              <div className="min-w-[850px] border-t border-[#132D2E]/20 relative">
                {/* Continuous Solid Mint Column for Kyno Health */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-[calc(100%*2/12)] bg-[#E7EFEA] pointer-events-none z-0"
                  aria-hidden="true"
                />

                {/* Table Header */}
                <div className="grid grid-cols-12 items-stretch text-sm font-medium text-[#132D2E] relative z-10">
                  <div className="col-span-4 p-6 md:p-8 border-b border-[#132D2E]/20" />
                  <div className="col-span-2 p-6 md:p-8 text-center leading-snug flex flex-col justify-end text-[16px] font-normal border-b border-[#132D2E]/20">
                    Domestic Maid<br />/ Help
                  </div>
                  <div className="col-span-2 p-6 md:p-8 text-center leading-snug flex flex-col justify-end text-[16px] font-normal border-b border-[#132D2E]/20">
                    Hospital Inpatient<br />/ ER Stay
                  </div>
                  <div className="col-span-2 p-6 md:p-8 text-center leading-snug flex flex-col justify-end text-[16px] font-normal border-b border-[#132D2E]/20">
                    Traditional<br />Agency
                  </div>
                  <div className="col-span-2 p-6 md:p-8 text-center text-[#132D2E] text-[18px] sm:text-[20px] font-bold leading-snug flex items-center justify-center">
                    Kyno Health
                  </div>
                </div>

                {/* Table Rows */}
                <div>
                  {comparisonRows.map((row) => (
                    <div
                      key={row.feature}
                      className="grid grid-cols-12 items-stretch text-[#132D2E] relative z-10"
                    >
                      {/* Feature Label */}
                      <div className="col-span-4 p-5 md:p-6 font-light text-base sm:text-[18px] text-[#132D2E] leading-normal flex items-center border-b border-[#132D2E]/20">
                        {row.feature}
                      </div>

                      {/* Domestic Maid */}
                      <div className="col-span-2 p-5 md:p-6 flex items-center justify-center text-center border-b border-[#132D2E]/20">
                        {row.maid === "check" ? (
                          <svg className="w-6 h-6 text-[#00875A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        ) : row.maid === "x" ? (
                          <svg className="w-6 h-6 text-[#132D2E]/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        ) : (
                          <span className="text-base font-medium text-[#132D2E]">{row.maid}</span>
                        )}
                      </div>

                      {/* Hospital Inpatient */}
                      <div className="col-span-2 p-5 md:p-6 flex items-center justify-center text-center border-b border-[#132D2E]/20">
                        {row.hospital === "check" ? (
                          <svg className="w-6 h-6 text-[#00875A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        ) : row.hospital === "x" ? (
                          <svg className="w-6 h-6 text-[#132D2E]/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        ) : (
                          <span className="text-xs sm:text-sm font-medium text-[#132D2E]">{row.hospital}</span>
                        )}
                      </div>

                      {/* Traditional Agency */}
                      <div className="col-span-2 p-5 md:p-6 flex items-center justify-center text-center border-b border-[#132D2E]/20">
                        {row.agency === "check" ? (
                          <svg className="w-6 h-6 text-[#00875A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        ) : row.agency === "x" ? (
                          <svg className="w-6 h-6 text-[#132D2E]/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        ) : (
                          <span className="text-xs sm:text-sm font-medium text-[#132D2E]">{row.agency}</span>
                        )}
                      </div>

                      {/* Kyno Health Column */}
                      <div className="col-span-2 p-5 md:p-6 flex items-center justify-center text-center">
                        {row.kyno === "check" ? (
                          <svg className="w-7 h-7 text-[#00875A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        ) : (
                          <span className="text-base sm:text-lg font-bold text-[#00875A]">{row.kyno}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Sticky Floating Button */}
            <div className="sticky bottom-8 z-30 flex justify-center pointer-events-none mt-6">
              <a
                href="/book-caretaker"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-[#FB923C] hover:bg-[#EA580C] px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all"
              >
                <span>Book Caretaker in Gurgaon</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
