"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Banner from "@/components/layout/Banner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/interactive/BookingForm";
import { pagesContent, PageData } from "@/data/pagesContent";
import Link from "next/link";
import {
  ShieldCheck,
  Check,
  ArrowRight,
  Phone,
  Sparkles,
  HelpCircle,
} from "lucide-react";

function DynamicPageContent() {
  const pathname = usePathname();
  // Strip leading and trailing slashes
  const cleanPath = pathname ? pathname.replace(/^\/+|\/+$/g, "") : "";

  // Lookup in pagesContent
  const pageData: PageData = pagesContent[cleanPath] || {
    category: "caretaker",
    badge: "KYNO HEALTH • GURGAON",
    title: cleanPath
      ? cleanPath
          .split("/")
          .pop()
          ?.split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ") + " in Gurgaon"
      : "Healthcare at Home in Gurgaon",
    subtitle:
      "Trained General Duty Assistants (GDAs), certified nurses, and emergency doctor visits delivered at your doorstep across Gurugram under strict NABH clinical guidelines.",
    price: "From ₹1,200/day",
    highlights: [
      "100% Police & Identity Verified Caretakers",
      "Assistance with bathing, sponge baths, diaper changing & hygiene",
      "Medication reminders, feeding & fluid logging",
      "Bed sore prevention (Q2H turning and positioning)",
      "Daily vital signs tracking with doctor oversight",
      "Rapid 4-hour replacement guarantee if caretaker is on leave",
    ],
    protocols: [
      {
        title: "Activities of Daily Living (ADLs)",
        desc: "Personal grooming, oral care, sponge baths, and dignified bed or wheelchair transfers.",
      },
      {
        title: "Doctor Emergency Escalation",
        desc: "20-minute emergency doctor on-call across Gurgaon with portable diagnostics and ECG.",
      },
    ],
    faqs: [
      {
        q: "How soon can care begin in Gurgaon?",
        a: "We deploy verified caretakers within 4 to 12 hours. Emergency doctors arrive within 20–30 minutes.",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#132D2E]">
      <Banner />
      <Navbar />

      <main className="flex-grow py-12 lg:py-20">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#0F2F28]/60 font-mono">
            <Link href="/" className="hover:text-[#0F2F28]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#00875A] font-semibold">{cleanPath}</span>
          </nav>

          {/* Hero Section of the Specific Page */}
          <div className="rounded-3xl bg-[#0F2F28] text-white p-8 sm:p-12 lg:p-16 mb-12 shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#34D399]/20 text-[#34D399] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-4 border border-[#34D399]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{pageData.badge}</span>
              </span>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-light leading-[1.15] text-white tracking-tight">
                {pageData.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed font-normal">
                {pageData.subtitle}
              </p>

              {pageData.price && (
                <div className="mt-6 inline-flex items-center gap-3 bg-white/10 border border-white/15 px-4 py-2 rounded-2xl">
                  <span className="text-xs text-white/70">Estimated Pricing:</span>
                  <span className="text-base sm:text-lg font-bold text-[#FB923C]">{pageData.price}</span>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#schedule-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FB923C] hover:bg-[#EA580C] text-white px-8 py-3.5 text-sm font-semibold shadow-md transition-all active:scale-95"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="tel:+919953104104"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 hover:border-white text-white px-7 py-3 text-sm font-semibold transition-all"
                >
                  <Phone className="w-4 h-4 text-[#FB923C]" />
                  <span>Call 24/7: +91 99531 04104</span>
                </a>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#34D399]/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* 2-Column Clinical Details & Interactive Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
            <div className="lg:col-span-7 space-y-10">
              {/* Highlights Checklist */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm border border-[#0F2F28]/10">
                <h3 className="font-serif text-2xl font-light text-[#0F2F28] mb-5">
                  Key Service Standards &amp; Inclusions
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {pageData.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[#0F2F28]/85">
                      <span className="flex h-5 w-5 rounded-full items-center justify-center bg-[#E6F4EA] text-[#00875A] flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Protocols / Workflow */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm border border-[#0F2F28]/10">
                <h3 className="font-serif text-2xl font-light text-[#0F2F28] mb-5">
                  Clinical Care Protocols
                </h3>
                <div className="space-y-4">
                  {pageData.protocols.map((proto, idx) => (
                    <div key={proto.title} className="flex items-start gap-3.5 pb-4 border-b border-[#0F2F28]/10 last:border-0 last:pb-0">
                      <div className="w-7 h-7 rounded-full bg-[#0F2F28] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-[#0F2F28]">{proto.title}</h4>
                        <p className="text-xs sm:text-[13px] text-[#0F2F28]/75 mt-1 leading-relaxed">
                          {proto.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs if present */}
              {pageData.faqs && pageData.faqs.length > 0 && (
                <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm border border-[#0F2F28]/10">
                  <h3 className="font-serif text-2xl font-light text-[#0F2F28] mb-5 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#00875A]" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <div className="space-y-4">
                    {pageData.faqs.map((f) => (
                      <div key={f.q} className="rounded-xl bg-[#FAF8F5] p-4 border border-[#0F2F28]/10">
                        <h4 className="font-semibold text-xs sm:text-sm text-[#0F2F28] mb-1">{f.q}</h4>
                        <p className="text-xs text-[#0F2F28]/75 leading-relaxed">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trust Signals */}
              <div className="rounded-3xl bg-[#E6F4EA] p-6 border border-[#34D399]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-[#00875A] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-[#0F2F28]">Strict 5-Point Verification</h4>
                    <p className="text-xs text-[#0F2F28]/75">Police clearance, Aadhaar check, and medical fitness verification.</p>
                  </div>
                </div>
                <Link
                  href="/verification-process"
                  className="px-4 py-2 rounded-full bg-[#0F2F28] text-white text-xs font-semibold hover:bg-[#1A423A] transition-colors whitespace-nowrap"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Column: Live Interactive Booking Form (Span 5) */}
            <div id="schedule-form" className="lg:col-span-5 sticky top-28">
              <BookingForm initialService={cleanPath.includes("doctor") ? "doctor-visit" : "12h-caretaker"} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function DynamicPageRoute() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center text-sm text-[#0F2F28]">Loading Kyno Health care portal...</div>}>
      <DynamicPageContent />
    </Suspense>
  );
}
