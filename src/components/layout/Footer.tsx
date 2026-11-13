"use client";

import { useState } from "react";
import footerData from "@/data/footer.json";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Send,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (callbackPhone.trim().length >= 10) {
      setCallbackSubmitted(true);
    }
  };

  return (
    <footer className="relative bg-[#071F1A] text-white pt-16 pb-24 lg:pb-16 w-full border-t border-[#34D399]/20">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* ── TOP ACTION & EMERGENCY BANNER ── */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-[#0F3830] via-[#12453B] to-[#0F3830] border border-[#34D399]/25 p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#34D399]/15 px-3 py-1 text-xs font-semibold text-[#34D399] mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>24/7 Emergency &amp; Caretaker Dispatch Hub</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
              Need a verified caretaker or doctor at home in Gurgaon?
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#D1E8DF] max-w-xl">
              Our clinical care coordinator is on duty right now. Immediate caretaker matching and 20-minute doctor emergency dispatch across Gurugram.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto flex-shrink-0">
            <a
              href="tel:+919953104104"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FB923C] hover:bg-[#EA580C] text-white px-6 py-3.5 text-sm font-semibold shadow-md active:scale-95 transition-all w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: +91 99531 04104</span>
            </a>

            <a
              href="https://wa.me/919953104104?text=Hi%20Kyno%20Health,%20I%20need%20a%20caretaker%20in%20Gurgaon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3.5 text-sm font-semibold shadow-md active:scale-95 transition-all w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Coordinator</span>
            </a>
          </div>
        </div>

        {/* ── MAIN 4-COLUMN FOOTER NAVIGATION ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* COLUMN 1: Company Profile, Address & Fast Callback Form (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Official Brand Logo */}
              <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 p-1 group-hover:bg-white/20 transition-colors">
                  <svg viewBox="0 0 36 36" className="w-6 h-6" fill="none">
                    <path
                      d="M18 30.5s-10-6.2-13.5-13.2a7.5 7.5 0 0 1 12.5-4.5l1 1.2 1-1.2a7.5 7.5 0 0 1 12.5 4.5c-3.5 7-13.5 13.2-13.5 13.2z"
                      stroke="#34D399"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 18h5.5m-2.75-2.75v5.5"
                      stroke="#FB923C"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex items-baseline">
                  <span className="font-sans text-[24px] font-bold text-white tracking-tight">Kyno</span>
                  <span className="font-sans text-[24px] font-medium text-[#FB923C] ml-1 tracking-tight">health</span>
                </div>
              </Link>

              <p className="text-xs sm:text-[13px] text-white/75 leading-relaxed max-w-sm mb-6">
                Gurugram&apos;s trusted physician-led home healthcare service. Providing background-verified GDAs, 12h/24h live-in attendants, and 20-minute doctor visits under strict NABH clinical guidelines.
              </p>

              {/* Physical Office Card */}
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-2.5 text-xs text-white/85">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FB923C] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    {footerData.address}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#34D399] flex-shrink-0" />
                  <a href="tel:+919953104104" className="font-semibold text-white hover:text-[#34D399] transition-colors">
                    {footerData.phone} (24/7 Helpline)
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#34D399] flex-shrink-0" />
                  <a href={`mailto:${footerData.email}`} className="hover:text-[#34D399] transition-colors">
                    {footerData.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#FB923C] flex-shrink-0" />
                  <span>Open 24 Hours / 7 Days a Week / 365 Days</span>
                </div>
              </div>
            </div>

            {/* Quick 10-Minute Callback Request Form */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#34D399] mb-2">
                Request a Callback in 10 Minutes
              </h4>
              {callbackSubmitted ? (
                <div className="p-3 rounded-lg bg-[#34D399]/20 border border-[#34D399]/40 text-xs text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399] flex-shrink-0" />
                  <span>Callback requested! Our Gurgaon coordinator will ring you shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="flex gap-2">
                  <input
                    type="tel"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    required
                    className="flex-1 px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-xs focus:outline-none focus:border-[#34D399]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-lg bg-[#FB923C] hover:bg-[#EA580C] text-white text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-sm"
                  >
                    <span>Get Call</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* COLUMN 2: Caretaker Services (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-[14.5px] font-semibold text-[#34D399] mb-4 tracking-wide uppercase text-xs">
              Caretaker at Home
            </h4>
            <ul className="space-y-2.5">
              {footerData.completeCare.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13.5px] text-white/80 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all leading-normal"
                  >
                    <ArrowRight className="w-3 h-3 text-[#34D399]/60" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-[14.5px] font-semibold text-[#34D399] mb-3 tracking-wide uppercase text-xs">
                Quality Certifications
              </h4>
              <div className="space-y-2 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                  <span>100% Police Verified Attendants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#FB923C]" />
                  <span>NABH Guideline Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                  <span>Zero Agency Brokerage Fee</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Clinical Services & Doctors (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-[14.5px] font-semibold text-[#34D399] mb-4 tracking-wide uppercase text-xs">
              Clinical &amp; Medical Services
            </h4>
            <ul className="space-y-2.5">
              {footerData.clinicalLabReview.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13.5px] text-white/80 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all leading-normal"
                  >
                    <ArrowRight className="w-3 h-3 text-[#34D399]/60" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-[14.5px] font-semibold text-[#34D399] mb-3 tracking-wide uppercase text-xs">
                About Kyno Health
              </h4>
              <ul className="space-y-2">
                {footerData.aboutUs.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-white/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMN 4: Gurgaon Hubs & Quick Actions (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[14.5px] font-semibold text-[#34D399] mb-4 tracking-wide uppercase text-xs">
              Gurgaon Hubs
            </h4>
            <ul className="space-y-2.5 mb-8">
              {footerData.centers.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/80 hover:text-white transition-colors leading-snug block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-2.5">
              <Link
                href="/book-caretaker"
                className="inline-flex items-center justify-center rounded-full bg-[#FB923C] hover:bg-[#EA580C] text-white py-2.5 px-4 text-xs font-semibold w-full text-center shadow-md transition-all"
              >
                Book Caretaker
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 hover:border-white text-white py-2 px-4 text-xs font-medium w-full text-center transition-all"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* ── BOTTOM LEGAL & COPYRIGHT STRIP ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="text-center sm:text-left">
            {footerData.copyright}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {footerData.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
