"use client";

import { useState, Suspense } from "react";
import Banner from "@/components/layout/Banner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  ShieldCheck,
  Activity,
  HeartHandshake,
  Check,
  Send,
  PhoneCall,
} from "lucide-react";

function PathBadge() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;
  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-[#0F2F28]/5 border border-[#0F2F28]/10 px-3 py-1 text-xs font-mono text-[#0F2F28] mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
      <span>Service Hub: {pathname}</span>
    </div>
  );
}

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const featureCards = [
    {
      icon: ShieldCheck,
      title: "100% Police Verified GDAs",
      desc: "Every caretaker undergoes 5-point verification, police clearance, and intensive hospital training.",
      badge: "Verified Trust",
    },
    {
      icon: Activity,
      title: "20-Min Emergency Doctor",
      desc: "On-call certified physicians dispatched across Gurgaon with portable diagnostics and emergency kits.",
      badge: "Rapid Response",
    },
    {
      icon: HeartHandshake,
      title: "Doctor-Led Daily Oversight",
      desc: "Senior clinicians from AIIMS and Medanta review patient vitals and oversee care coordination.",
      badge: "Clinical Rigor",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#132D2E] selection:bg-[#BEE3D6] selection:text-[#132D2E]">
      <Banner />
      <Navbar />

      <main className="flex-grow">
        {/* ── HERO BANNER SECTION ── */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#132D2E]/10">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#34D399]/20 via-[#FB923C]/10 to-transparent blur-3xl opacity-70" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#0F2F28] text-white px-4 py-1.5 text-xs font-medium tracking-wide shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#34D399] animate-ping" />
              <span>Kyno Health Gurgaon • Booking &amp; Service Portal</span>
            </div>

            {/* Dynamic Path Indicator */}
            <div>
              <Suspense fallback={null}>
                <PathBadge />
              </Suspense>
            </div>

            {/* Display Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-light leading-[1.12] text-[#0F2F28] tracking-tight">
              Hospital-grade healthcare,{" "}
              <span className="italic font-normal">in the comfort of home.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg lg:text-[19px] text-[#0F2F28]/80 max-w-2xl mx-auto leading-relaxed font-normal">
              Our Gurgaon care coordination team is ready 24/7 to assign certified caretakers, schedule doctor home visits, or arrange nursing care for your loved ones.
            </p>

            {/* Email Priority Notification Form */}
            <div className="mt-10 max-w-md mx-auto">
              {submitted ? (
                <div className="inline-flex items-center gap-3 rounded-full bg-[#E6F4EA] border border-[#34D399]/40 px-6 py-3.5 text-sm text-[#0F2F28] font-medium shadow-sm animate-fade-in">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00875A] text-white">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Thank you! Our Gurgaon care coordinator will reach out promptly.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center rounded-full bg-white p-1.5 shadow-md border border-[#0F2F28]/15 focus-within:border-[#0F2F28] transition-all"
                >
                  <input
                    type="tel"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter phone number for instant callback"
                    required
                    className="w-full rounded-l-full bg-transparent px-4 py-2 text-sm text-[#0F2F28] placeholder:text-[#0F2F28]/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#FB923C] hover:bg-[#EA580C] text-white px-5 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                  >
                    <span>Request Call</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-[#0F2F28] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#1A423A] transition-colors shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>

              <a
                href="tel:+919953104104"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#FB923C] bg-white text-[#EA580C] px-6 py-3.5 text-sm font-semibold hover:bg-[#FB923C] hover:text-white transition-all shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Helpline: +91 99531 04104</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── PREVIEW CARDS SECTION ── */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#00875A] mb-2">
                WHAT TO EXPECT
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#0F2F28]">
                The Kyno Health Care Standard
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featureCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-[#0F2F28]/10 bg-[#FAF8F5] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F2F28] text-white">
                          <Icon className="w-6 h-6 text-[#34D399]" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0F2F28]/70 bg-white px-2.5 py-1 rounded-full border border-[#0F2F28]/10">
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-normal text-[#0F2F28] mb-3">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[#0F2F28]/75 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#0F2F28]/10">
                      <span className="text-xs font-semibold text-[#00875A] inline-flex items-center gap-1">
                        <span>NABH-aligned protocol</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
