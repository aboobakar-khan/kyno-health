"use client";

import Navbar from "@/components/layout/Navbar";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import BookingForm from "@/components/interactive/BookingForm";
import { ShieldCheck, Award, Clock, HeartHandshake, Phone } from "lucide-react";

export default function BookCaretakerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#132D2E]">
      <Banner />
      <Navbar />

      <main className="flex-grow py-12 lg:py-20">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2F28]/10 text-[#0F2F28] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>Direct Scheduling • No Broker Commission</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#0F2F28] tracking-tight">
              Book a Caretaker or Doctor at Home
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#0F2F28]/80 leading-relaxed font-normal">
              Schedule certified General Duty Assistants (GDAs), 12h/24h live-in attendants, or on-demand doctor emergency visits across Gurgaon in minutes.
            </p>
          </div>

          {/* Trust Value Badges Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 text-center">
            <div className="p-4 rounded-2xl bg-white border border-[#0F2F28]/10 shadow-sm flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-[#00875A] mb-2" />
              <span className="text-xs font-bold text-[#0F2F28]">100% Police Verified</span>
              <span className="text-[11px] text-[#0F2F28]/70 mt-0.5">Aadhaar &amp; address checked</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#0F2F28]/10 shadow-sm flex flex-col items-center">
              <Clock className="w-6 h-6 text-[#FB923C] mb-2" />
              <span className="text-xs font-bold text-[#0F2F28]">20-Min Emergency Doctor</span>
              <span className="text-[11px] text-[#0F2F28]/70 mt-0.5">On-call across Gurgaon</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#0F2F28]/10 shadow-sm flex flex-col items-center">
              <HeartHandshake className="w-6 h-6 text-[#00875A] mb-2" />
              <span className="text-xs font-bold text-[#0F2F28]">4-Hr Standby Replacement</span>
              <span className="text-[11px] text-[#0F2F28]/70 mt-0.5">If attendant is unwell</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#0F2F28]/10 shadow-sm flex flex-col items-center">
              <Award className="w-6 h-6 text-[#FB923C] mb-2" />
              <span className="text-xs font-bold text-[#0F2F28]">NABH Protocol Aligned</span>
              <span className="text-[11px] text-[#0F2F28]/70 mt-0.5">Supervised by MD doctors</span>
            </div>
          </div>

          {/* Interactive Booking Form Component */}
          <BookingForm />

          {/* Urgent Phone Banner */}
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-[#0F2F28]/75">
              Facing an acute medical emergency? Do not wait for online booking.
            </p>
            <a
              href="tel:+919953104104"
              className="mt-2 inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#EA580C] hover:underline"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              <span>Call Emergency Dispatch Helpline: +91 99531 04104</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
