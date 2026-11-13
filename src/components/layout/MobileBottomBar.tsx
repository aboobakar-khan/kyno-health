"use client";

import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import Link from "next/link";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#0F2F28]/15 px-2.5 py-2 shadow-[0_-8px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1.5">
        {/* Call Helpline Button */}
        <a
          href="tel:+919953104104"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl bg-[#0F2F28] text-white active:scale-95 transition-all text-center"
          aria-label="Call emergency helpline"
        >
          <Phone className="w-3.5 h-3.5 text-[#FB923C] animate-pulse mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">Call 24/7</span>
          <span className="text-[9px] text-white/70 font-mono">Helpline</span>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/919953104104?text=Hi%20Kyno%20Health,%20I%20need%20care%20in%20Gurgaon"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl bg-[#25D366] text-white active:scale-95 transition-all text-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">WhatsApp</span>
          <span className="text-[9px] text-white/90">Instant</span>
        </a>

        {/* Doctor in 20 Mins */}
        <Link
          href="/book-doctor"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl bg-[#00875A] text-white active:scale-95 transition-all text-center shadow-sm"
        >
          <div className="relative mb-0.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping absolute -top-0.5 -right-0.5" />
            <span className="text-xs">🩺</span>
          </div>
          <span className="text-[11px] font-bold leading-tight">Doctor 20m</span>
          <span className="text-[9px] text-white/90">₹1999 Visit</span>
        </Link>

        {/* Book Caretaker Button */}
        <Link
          href="/book-caretaker"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl bg-[#FB923C] hover:bg-[#EA580C] text-white active:scale-95 transition-all text-center shadow-sm"
        >
          <CalendarCheck className="w-3.5 h-3.5 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">Caretaker</span>
          <span className="text-[9px] text-white/90">12h / 24h</span>
        </Link>
      </div>
    </div>
  );
}
