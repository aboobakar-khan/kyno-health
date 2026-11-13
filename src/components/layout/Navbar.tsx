"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import navData from "@/data/nav.json";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const cubicEase = [0.22, 1, 0.36, 1] as const;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── TOP NAVBAR ── */}
      <header className="sticky top-0 z-50 w-full bg-[#0F2F28] border-b border-white/10 transition-colors">
        <div className="mx-auto flex h-[72px] sm:h-[78px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Mobile Left: Hamburger + Logo Wordmark */}
          <div className="flex items-center gap-3 lg:gap-0">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center p-2 text-[#FAF8F5] hover:opacity-80 active:scale-95 transition-all"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-6 w-6 stroke-[1.75]" />
            </button>

            <a
              href="/"
              className="flex items-center gap-2.5 text-[#FAF8F5] hover:opacity-95 transition-opacity"
            >
              {/* Kyno Health Emblem: Medical heart + cross */}
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 p-1">
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

              <div className="flex items-baseline tracking-tight">
                <span className="font-sans text-[20px] sm:text-[22px] font-bold tracking-[-0.03em] text-[#FAF8F5]">
                  Kyno
                </span>
                <span className="font-sans text-[20px] sm:text-[22px] font-medium tracking-[-0.03em] text-[#FB923C] ml-1">
                  health
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links with Micro-Interactions & Submenus */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
            {navData.links.map((link) => {
              const hasSubmenu = Boolean(link.submenu && link.submenu.length > 0);
              const isHovered = hoveredMenu === link.label;

              return (
                <div
                  key={link.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => hasSubmenu && setHoveredMenu(link.label)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <a
                    href={link.href}
                    className={`text-[14px] xl:text-[14.5px] font-medium text-[#FAF8F5] transition-colors py-2 relative flex items-center ${
                      isHovered ? "text-white" : "hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Animated green underline */}
                    {isHovered && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#34D399]"
                        transition={{ duration: 0.2, ease: cubicEase }}
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasSubmenu && isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: cubicEase }}
                        className="absolute top-full left-0 z-50 pt-2"
                      >
                        <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-black/5 p-6 sm:p-8">
                          <div className="grid grid-cols-2 gap-x-10 gap-y-3.5 min-w-[460px]">
                            {link.submenu?.map((sub) => (
                              <a
                                key={sub.title}
                                href={sub.href}
                                className="text-[14px] font-medium text-[#132D2E] hover:text-[#00875A] transition-colors py-1 flex items-center justify-between group"
                              >
                                <span>{sub.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#00875A]" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTAs: 24/7 Helpline + [Book Caretaker] button */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            <a
              href="tel:+919953104104"
              className="flex items-center gap-2 text-[13.5px] font-semibold text-[#FB923C] hover:text-white px-3.5 py-1.5 rounded-full bg-white/5 border border-[#FB923C]/30 hover:border-[#FB923C] transition-all whitespace-nowrap"
            >
              <Phone className="h-3.5 w-3.5 animate-pulse text-[#FB923C]" />
              <span>+91 99531 04104</span>
            </a>

            <a
              href={navData.cta.join.href}
              className="rounded-full bg-[#FB923C] text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-[#EA580C] transition-all whitespace-nowrap"
            >
              {navData.cta.join.label}
            </a>
          </div>

          {/* Mobile Right: Direct Phone call & Book Caretaker */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+919953104104"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#FB923C]/20 text-[#FB923C] border border-[#FB923C]/30"
              aria-label="Call emergency helpline"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={navData.cta.join.href}
              className="rounded-full bg-[#FB923C] text-white px-4 py-1.5 text-xs font-semibold hover:bg-[#EA580C] active:scale-95 transition-all"
            >
              Book Care
            </a>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER NAVIGATION MENU ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] lg:hidden flex flex-col bg-[#FAF8F5]"
          >
            {/* Drawer Header with Logo & Close Button */}
            <div className="flex items-center justify-between px-6 h-[72px] bg-[#0F2F28] border-b border-white/10 flex-shrink-0">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-[#FAF8F5]"
              >
                <div className="relative flex items-center justify-center w-7 h-7 rounded-md bg-white/10 p-1">
                  <svg viewBox="0 0 36 36" className="w-5 h-5" fill="none">
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
                  <span className="font-sans text-[20px] font-bold text-[#FAF8F5]">Kyno</span>
                  <span className="font-sans text-[20px] font-medium text-[#FB923C] ml-1">health</span>
                </div>
              </a>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#FAF8F5] hover:bg-white/20 active:scale-95 transition-all"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body: Main Categories Only (Submenus revealed only on click) */}
            <div className="flex-1 overflow-y-auto px-6 py-6 pb-28">
              {/* Quick Call Box in Mobile Drawer */}
              <div className="mb-6 p-4 rounded-xl bg-[#E6F4EA] border border-[#34D399]/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70">
                    24/7 Gurgaon Helpline
                  </div>
                  <div className="text-[17px] font-bold text-[#0F2F28] mt-0.5">
                    +91 99531 04104
                  </div>
                </div>
                <a
                  href="tel:+919953104104"
                  className="px-3.5 py-2 rounded-lg bg-[#0F2F28] text-white text-xs font-semibold flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FB923C]" />
                  <span>Call Now</span>
                </a>
              </div>

              <nav
                className="flex flex-col divide-y divide-[#132D2E]/10"
                aria-label="Mobile navigation"
              >
                {navData.links.map((link) => {
                  const hasSubmenu = Boolean(link.submenu && link.submenu.length > 0);
                  const isExpanded = openAccordion === link.label;

                  if (!hasSubmenu) {
                    return (
                      <div key={link.label} className="py-2">
                        <a
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-3.5 px-2 text-[17px] font-medium text-[#132D2E] hover:text-[#00875A] transition-colors"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-4 h-4 text-[#132D2E]/40" />
                        </a>
                      </div>
                    );
                  }

                  return (
                    <div key={link.label} className="py-2">
                      <button
                        onClick={() =>
                          setOpenAccordion(isExpanded ? null : link.label)
                        }
                        className="flex w-full items-center justify-between py-3.5 px-2 text-left text-[17px] font-medium text-[#132D2E] hover:text-[#00875A] active:text-[#00875A] transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span>{link.label}</span>
                        <span
                          className={`transition-transform duration-300 ${
                            isExpanded
                              ? "rotate-180 text-[#00875A]"
                              : "text-[#132D2E]/40"
                          }`}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </span>
                      </button>

                      {/* Smooth Sub-menu Expand / Collapse */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.28,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="ml-3 pl-5 pb-3 pt-1 border-l-2 border-[#34D399]/35 flex flex-col gap-3">
                              {link.submenu?.map((sub) => (
                                <a
                                  key={sub.title}
                                  href={sub.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-[15px] font-normal text-[#132D2E]/75 hover:text-[#132D2E] active:text-[#00875A] py-1 transition-colors block"
                                >
                                  {sub.title}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              {/* Action Buttons in Drawer */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={navData.cta.join.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center rounded-full bg-[#FB923C] py-4 text-center text-sm font-semibold text-white shadow-md hover:bg-[#EA580C] active:scale-[0.99] transition-all"
                >
                  {navData.cta.join.label}
                </a>

                <a
                  href="tel:+919953104104"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full border border-[#0F2F28]/25 py-3.5 text-center text-sm font-semibold text-[#0F2F28] hover:bg-[#0F2F28]/5 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#FB923C]" />
                  <span>Call 24/7 Helpline (+91 99531 04104)</span>
                </a>

                <div className="mt-4 pt-4 border-t border-[#132D2E]/10 flex items-center justify-center gap-2 text-xs text-[#132D2E]/60">
                  <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                  <span>100% Background &amp; Police Verified Caretakers</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
