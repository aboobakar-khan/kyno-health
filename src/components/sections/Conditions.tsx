"use client";

import { useRef } from "react";
import conditionsData from "@/data/conditions.json";
import { ArrowLeft, ArrowRight, Stethoscope } from "lucide-react";

export default function Conditions() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#FAF8F5] py-20 lg:py-28 text-[#132D2E] overflow-hidden border-t border-[#132D2E]/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading, Primary CTA & Slider Controls */}
          <div className="lg:col-span-4 flex flex-col items-start pr-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#00875A] mb-3">
              <Stethoscope className="w-4 h-4" />
              <span>Clinical departments</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light leading-[1.18] text-[#132D2E] max-w-[360px]">
              Specialized clinical care brought right to your bedside
            </h2>

            <p className="mt-4 text-sm text-[#132D2E]/75 leading-relaxed">
              From continuous geriatric and bedridden assistance to ICU nursing and 20-minute doctor emergency visits across Gurgaon.
            </p>

            <div className="mt-8">
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#0F2F28] px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1A423A] transition-colors"
              >
                <span>View all departments</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="mt-10 flex items-center gap-3" aria-label="Departments carousel controls">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous department"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0F2F28]/25 text-[#0F2F28] hover:border-[#0F2F28] hover:bg-[#0F2F28]/5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next department"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0F2F28]/25 text-[#0F2F28] hover:border-[#0F2F28] hover:bg-[#0F2F28]/5 transition-colors cursor-pointer"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Horizontal Scrollable Cards */}
          <div className="lg:col-span-8 overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {conditionsData.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-[280px] sm:w-[320px] rounded-2xl border border-[#0F2F28]/15 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all snap-start"
                >
                  <div>
                    {/* Circular Photo */}
                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden bg-[#FAF8F5] mb-5 border border-black/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-[17px] font-semibold text-[#132D2E] tracking-tight">
                      {item.title}
                    </h3>

                    {/* Medical details */}
                    <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#132D2E]/70 font-normal">
                      {item.detail}
                    </p>
                  </div>

                  {/* Bottom Text Link with Arrow */}
                  <div className="mt-6 pt-2 border-t border-[#132D2E]/10">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00875A] hover:text-[#0F2F28] transition-colors"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
