"use client";

import { useState } from "react";
import { Phone, ShieldCheck } from "lucide-react";

export default function Banner() {
  const [visible] = useState(true);

  if (!visible) return null;

  return (
    <div
      role="banner"
      aria-label="Announcement"
      className="relative z-50 bg-[#0B231E] text-white/90 border-b border-white/10 px-4 sm:px-6 py-2 text-xs"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        {/* Left: Location & Standard */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 text-white font-medium text-[11px]">
            <ShieldCheck className="w-3 h-3 text-[#34D399]" />
            NABH Standard
          </span>
          <span className="hidden sm:inline text-white/70 text-[11px]">
            Hospital-grade home care across Gurugram &amp; Delhi NCR
          </span>
        </div>

        {/* Center: Core Value */}
        <div className="hidden md:flex items-center gap-2 text-[11px] text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>20-Min Emergency Doctor Dispatch • 12h/24h Verified Caretakers</span>
        </div>

        {/* Right: Hotline */}
        <div className="flex items-center gap-2 text-[11px] ml-auto sm:ml-0">
          <span className="text-white/60 hidden sm:inline">24/7 Gurgaon Helpline:</span>
          <a
            href="tel:+919953104104"
            className="font-bold text-[#FB923C] hover:text-white transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-[#FB923C]" />
            <span>+91 99531 04104</span>
          </a>
        </div>
      </div>
    </div>
  );
}
