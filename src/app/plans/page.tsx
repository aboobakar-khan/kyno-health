"use client";

import Navbar from "@/components/layout/Navbar";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import {
  Check,
  ArrowRight,
  Phone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function PlansPage() {
  const plans = [
    {
      title: "12-Hour Caretaker Shift",
      badge: "MOST POPULAR FOR FAMILIES",
      tagline: "Flexible day or night bedside support by certified GDAs.",
      dailyRate: "₹1,200",
      monthlyRate: "₹28,000",
      highlight: false,
      cta: "Book 12-Hour Care",
      href: "/book-caretaker?plan=12h",
      features: [
        "12-Hour dedicated Day (8 AM–8 PM) or Night (8 PM–8 AM)",
        "Assisted bathing, sponge bath & personal grooming",
        "Bed sore prevention (Q2H repositioning & turning)",
        "Diaper change, peri-anal care & linen hygiene",
        "Feeding assistance & hydration tracking",
        "Timely medication administration reminders",
        "Daily vital signs logging (BP, Pulse, SpO2)",
        "4-Hour standby backup replacement guarantee",
      ],
    },
    {
      title: "24-Hour Live-In Caretaker",
      badge: "ROUND-THE-CLOCK RECOVERY",
      tagline: "Resident 24/7 bedside companion with weekly doctor review.",
      dailyRate: "₹1,800",
      monthlyRate: "₹42,000",
      highlight: true,
      cta: "Book 24/7 Live-In Care",
      href: "/book-caretaker?plan=24h",
      features: [
        "Full-time resident GDA staying at patient's bedside",
        "Continuous assistance for bedridden, dementia, or post-op care",
        "Night-time supervision and reassurance for restless patients",
        "Safe wheelchair and bed transfers with fall prevention",
        "Catheter management & fluid balance recording",
        "Weekly supervising doctor review call & vitals audit",
        "20-Minute emergency doctor on-call across Gurgaon",
        "Dedicated Care Coordinator with 4-hr replacement guarantee",
      ],
    },
    {
      title: "Doctor & Clinical Visits",
      badge: "ON-DEMAND CLINICAL VISITS",
      tagline: "Physicians and ICU nurses at your doorstep within 20 mins.",
      dailyRate: "From ₹499",
      monthlyRate: "Doctor: ₹999 / visit",
      highlight: false,
      cta: "Book Doctor / Nurse",
      href: "/book-caretaker?service=doctor-visit",
      features: [
        "Doctor home visit with 20–30 min arrival across Gurgaon",
        "Equipped with portable 12-Lead ECG & emergency vitals kit",
        "Registered GNM/B.Sc Nurse visits from ₹499 (IV / Injections)",
        "Doorstep blood tests, urine analysis & same-day reports",
        "Physiotherapy home sessions from ₹799",
        "Hospital bed, oxygen concentrator & BiPAP rental setup",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#132D2E]">
      <Banner />
      <Navbar />

      <main className="flex-grow py-12 lg:py-20">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00875A]/15 text-[#00875A] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Transparent Rate Card • Zero Agency Fee</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#0F2F28] tracking-tight">
              Kyno Health Care Plans &amp; Pricing
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#0F2F28]/80 leading-relaxed font-normal">
              Unlike unverified domestic maid agencies that charge hefty brokerage commissions, Kyno Health offers transparent daily and monthly packages backed by senior medical doctors.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
            {plans.map((p) => (
              <div
                key={p.title}
                className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all ${
                  p.highlight
                    ? "bg-[#0F2F28] text-white shadow-2xl border-2 border-[#34D399] relative"
                    : "bg-white text-[#0F2F28] shadow-md border border-[#0F2F28]/10"
                }`}
              >
                <div>
                  <span
                    className={`inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
                      p.highlight
                        ? "bg-[#34D399] text-[#0F2F28]"
                        : "bg-[#0F2F28]/10 text-[#0F2F28]"
                    }`}
                  >
                    {p.badge}
                  </span>

                  <h3
                    className={`font-serif text-2xl sm:text-3xl font-normal leading-tight ${
                      p.highlight ? "text-white" : "text-[#0F2F28]"
                    }`}
                  >
                    {p.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                      p.highlight ? "text-white/80" : "text-[#0F2F28]/75"
                    }`}
                  >
                    {p.tagline}
                  </p>

                  {/* Pricing Box */}
                  <div
                    className={`my-6 p-4 rounded-2xl ${
                      p.highlight ? "bg-white/10" : "bg-[#FAF8F5]"
                    }`}
                  >
                    <div className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {p.dailyRate}
                      <span className="text-xs font-normal opacity-70 ml-1">/ day</span>
                    </div>
                    <div className="text-xs font-semibold mt-1 opacity-90">
                      {p.monthlyRate}
                    </div>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-3 text-xs sm:text-[13.5px]">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <span
                          className={`flex h-4 w-4 rounded-full items-center justify-center flex-shrink-0 mt-0.5 ${
                            p.highlight ? "bg-[#34D399] text-[#0F2F28]" : "bg-[#00875A] text-white"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span className={p.highlight ? "text-white/90" : "text-[#0F2F28]/85"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href={p.href}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-6 text-sm font-semibold transition-all shadow-md active:scale-95 ${
                      p.highlight
                        ? "bg-[#FB923C] hover:bg-[#EA580C] text-white"
                        : "bg-[#0F2F28] hover:bg-[#1A423A] text-white"
                    }`}
                  >
                    <span>{p.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Role Clarity Section: What Caretaker does vs Nurse vs Doctor (Core story from Live Site) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-[#0F2F28]/10 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00875A]">
                CLINICAL ROLE CLARITY
              </span>
              <h2 className="font-serif text-3xl font-light text-[#0F2F28] mt-1">
                Difference Between Caretaker, Nurse &amp; Doctor
              </h2>
              <p className="text-sm text-[#0F2F28]/75 mt-2">
                Understanding role boundaries guarantees patient safety and prevents medical complications at home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#0F2F28]/10">
                <div className="text-xs font-bold uppercase tracking-wider text-[#00875A] mb-2">
                  What a Caretaker (GDA) Does
                </div>
                <h4 className="font-serif text-xl font-normal text-[#0F2F28] mb-3">
                  Activities of Daily Living (ADLs)
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#0F2F28]/80">
                  <li>• Sponge bathing and personal grooming</li>
                  <li>• 2-Hourly bed sore turning &amp; repositioning</li>
                  <li>• Diaper changing &amp; peri-anal skin hygiene</li>
                  <li>• Assisted feeding &amp; medication reminders</li>
                  <li>• Wheelchair transfers &amp; fall prevention</li>
                  <li>• Compassionate emotional companionship</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#0F2F28]/10">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FB923C] mb-2">
                  What a Nurse (GNM/B.Sc) Does
                </div>
                <h4 className="font-serif text-xl font-normal text-[#0F2F28] mb-3">
                  Clinical Invasives &amp; Injections
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#0F2F28]/80">
                  <li>• IV fluid administration &amp; IV cannula care</li>
                  <li>• Intramuscular (IM) &amp; IV antibiotic injections</li>
                  <li>• Catheter insertion, wash &amp; bag monitoring</li>
                  <li>• Ryle&apos;s tube insertion &amp; enteral feeding</li>
                  <li>• Surgical sterile wound dressings &amp; suture care</li>
                  <li>• Tracheostomy suctioning &amp; BiPAP monitoring</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#0F2F28]/10">
                <div className="text-xs font-bold uppercase tracking-wider text-[#00875A] mb-2">
                  What a Doctor (MBBS/MD) Does
                </div>
                <h4 className="font-serif text-xl font-normal text-[#0F2F28] mb-3">
                  Diagnosis, Prescription &amp; Oversight
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#0F2F28]/80">
                  <li>• Doorstep physical diagnosis in 20–30 mins</li>
                  <li>• Digital 12-lead ECG reading &amp; report</li>
                  <li>• Clinical prescriptions and dose titration</li>
                  <li>• Formulating the patient&apos;s home care plan</li>
                  <li>• Weekly caretaker vitals review &amp; audit</li>
                  <li>• Emergency escalation &amp; hospital admission</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guarantee Strip */}
          <div className="p-8 rounded-3xl bg-[#0F2F28] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-semibold text-[#FB923C] uppercase tracking-wider">
                OUR PROMISE TO GURGAON FAMILIES
              </span>
              <h3 className="font-serif text-2xl font-light mt-1">
                Zero Brokerage • 4-Hour Standby Replacement
              </h3>
              <p className="text-xs text-white/80 mt-1">
                If your assigned caretaker takes scheduled leave or falls ill, we deploy an authenticated replacement within 4 hours.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/book-caretaker"
                className="inline-flex items-center gap-2 rounded-full bg-[#FB923C] hover:bg-[#EA580C] text-white px-7 py-3.5 text-sm font-semibold transition-colors"
              >
                <span>Book Care Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919953104104"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white hover:border-[#34D399] px-5 py-3 text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FB923C]" />
                <span>+91 99531 04104</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
