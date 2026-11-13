"use client";

import { useState } from "react";
import navData from "@/data/nav.json";
import { X, PhoneCall, ShieldCheck } from "lucide-react";

export default function Banner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      role="banner"
      aria-label="Announcement"
      className="relative z-50 flex min-h-[44px] items-center justify-center bg-[#E6F4EA] px-4 sm:px-6 py-2 text-center text-xs sm:text-sm text-[#132D2E] border-b border-[#132D2E]/10"
    >
      <div className="flex flex-wrap items-center justify-center gap-2 pr-6 font-normal">
        <span className="inline-flex items-center gap-1 font-semibold bg-[#132D2E]/10 text-[#132D2E] px-2 py-0.5 rounded-full text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
          NABH Standard
        </span>
        <span className="text-[#132D2E]/90">{navData.announcement.text}</span>
        <a
          href={navData.announcement.cta.href}
          className="font-semibold inline-flex items-center gap-1 text-[#132D2E] underline decoration-[#132D2E]/40 underline-offset-4 hover:decoration-[#132D2E]"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#E65100]" />
          {navData.announcement.cta.label}
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Close banner"
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#132D2E]/70 hover:bg-black/5 hover:text-[#132D2E] transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
