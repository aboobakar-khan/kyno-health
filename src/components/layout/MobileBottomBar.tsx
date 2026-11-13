"use client";

import { Phone, MessageCircle, CalendarCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#0F2F28]/15 px-3 py-2.5 shadow-[0_-8px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {/* Call Helpline Button */}
        <a
          href="tel:+919953104104"
          className="flex-1 flex flex-col items-center justify-center py-1 px-2 rounded-xl bg-[#0F2F28] text-white active:scale-95 transition-all text-center"
          aria-label="Call emergency helpline"
        >
          <div className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-[#FB923C] animate-pulse" />
            <span className="text-[12px] font-bold leading-tight">Call 24/7</span>
          </div>
          <span className="text-[10px] text-white/80 font-mono mt-0.5">9953104104</span>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/919953104104?text=Hi%20Kyno%20Health,%20I%20need%20a%20caretaker%20in%20Gurgaon"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1 px-2 rounded-xl bg-[#25D366] text-white active:scale-95 transition-all text-center"
          aria-label="Chat on WhatsApp"
        >
          <div className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span className="text-[12px] font-bold leading-tight">WhatsApp</span>
          </div>
          <span className="text-[10px] text-white/90 mt-0.5">Quick Reply</span>
        </a>

        {/* Book Caretaker Button */}
        <Link
          href="/book-caretaker"
          className="flex-[1.2] flex flex-col items-center justify-center py-1.5 px-3 rounded-xl bg-[#FB923C] hover:bg-[#EA580C] text-white active:scale-95 transition-all text-center shadow-sm"
        >
          <div className="flex items-center gap-1">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span className="text-[12.5px] font-bold leading-tight">Book Care</span>
          </div>
          <span className="text-[10px] text-white/90 mt-0.5 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-white" /> Verified GDA
          </span>
        </Link>
      </div>
    </div>
  );
}
