"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import navData from "@/data/nav.json";
import CitySelectorModal, { CITIES_DATA, CityInfo } from "@/components/layout/CitySelectorModal";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Phone,
  ShieldCheck,
  MapPin,
  CalendarCheck,
  Stethoscope,
} from "lucide-react";

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // City Selector State
  const [cityModalOpen, setCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<CityInfo>(CITIES_DATA[0]);

  // Load saved city or detect automatically
  useEffect(() => {
    const saved = localStorage.getItem("kyno_selected_city");
    if (!saved && typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          if (latitude >= 28.0 && latitude <= 28.9 && longitude >= 76.8 && longitude <= 77.5) {
            if (latitude >= 28.52 || longitude >= 77.15) {
              const southDelhi = CITIES_DATA.find((c) => c.id === "south-delhi");
              if (southDelhi) {
                setSelectedCity(southDelhi);
                localStorage.setItem("kyno_selected_city", southDelhi.id);
              }
            }
          }
        },
        () => {},
        { timeout: 4000 }
      );
    }
  }, []);

  const handleCitySelect = (city: CityInfo) => {
    setSelectedCity(city);
    localStorage.setItem("kyno_selected_city", city.id);
  };

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

  // Curated primary links for clean desktop navigation
  const primaryLinks = [
    {
      label: "Caretaker at Home",
      href: "/caretaker-at-home",
      submenu: [
        { title: "Elderly Care at Home", href: "/caretaker-at-home/elderly-care" },
        { title: "24/7 Live-In Caretaker", href: "/caretaker-at-home/24-hour-live-in" },
        { title: "12-Hour Day / Night Shift", href: "/caretaker-at-home/12-hour-shift" },
        { title: "Post-Surgical Care", href: "/caretaker-at-home/post-surgery" },
        { title: "Bedridden Patient Care", href: "/caretaker-at-home/bedridden-care" },
        { title: "Paralysis & Stroke Support", href: "/caretaker-at-home/stroke-paralysis" }
      ]
    },
    {
      label: "Clinical Services",
      href: "/services",
      submenu: [
        { title: "Doctor Visit in 20 Mins (₹1999)", href: "/book-doctor" },
        { title: "Critical Care Nursing", href: "/services/nurse-at-home" },
        { title: "Physiotherapy at Home", href: "/services/physiotherapy" },
        { title: "ICU Setup & Oxygen at Home", href: "/services/icu-setup" },
        { title: "Diagnostic Blood Tests & ECG", href: "/services/lab-tests-at-home" },
        { title: "Geriatric & Dementia Care", href: "/conditions/geriatric-care" }
      ]
    },
    {
      label: "Plans & Pricing",
      href: "/plans"
    }
  ];

  return (
    <>
      {/* ── MAIN LUXURY NAVBAR ── */}
      <header className="sticky top-0 z-50 w-full bg-[#0F2F28] border-b border-white/10 shadow-sm transition-colors">
        <div className="mx-auto flex h-[66px] sm:h-[74px] max-w-[1440px] items-center justify-between px-3 sm:px-6 lg:px-10">
          
          {/* Left: Logo & City Selector */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="/"
              className="flex items-center gap-2 sm:gap-2.5 text-[#FAF8F5] hover:opacity-95 transition-opacity"
            >
              {/* Kyno Health Emblem */}
              <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 p-1">
                <svg viewBox="0 0 36 36" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
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
                <span className="font-sans text-[18px] sm:text-[22px] font-bold tracking-[-0.03em] text-[#FAF8F5]">
                  Kyno
                </span>
                <span className="font-sans text-[18px] sm:text-[22px] font-medium tracking-[-0.03em] text-[#FB923C] ml-0.5 sm:ml-1">
                  health
                </span>
              </div>
            </a>

            {/* Subtle Divider */}
            <div className="hidden sm:block h-5 w-[1px] bg-white/20" />

            {/* City Selector Pill Button (Clean Luxury Pill) */}
            <button
              type="button"
              onClick={() => setCityModalOpen(true)}
              className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-[#FAF8F5] text-[11px] sm:text-xs font-medium transition-all cursor-pointer active:scale-95"
              aria-label="Select city for healthcare services"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#34D399]" />
              <span className="font-semibold tracking-wide">{selectedCity.name.split(" ")[0]}</span>
              <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/60" />
            </button>
          </div>

          {/* Desktop Nav Links (Clean, Spacious, Centered) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 h-full">
            {primaryLinks.map((link) => {
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
                    className={`text-[14px] xl:text-[14.5px] font-medium text-[#FAF8F5] transition-colors py-2 relative flex items-center gap-1 ${
                      isHovered ? "text-white" : "hover:text-[#34D399]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {hasSubmenu && <ChevronDown className="w-3 h-3 text-white/60" />}
                    
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
                        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-black/5 p-6 sm:p-7 min-w-[380px]">
                          <div className="space-y-2">
                            {link.submenu?.map((sub) => (
                              <a
                                key={sub.title}
                                href={sub.href}
                                className="text-[14px] font-medium text-[#132D2E] hover:text-[#00875A] hover:bg-[#F4F8F6] px-3 py-2 rounded-xl transition-all flex items-center justify-between group"
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

          {/* Desktop Right CTAs: Clean, Calm Hierarchy */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <a
              href="/contact"
              className="text-[13.5px] font-medium text-[#FAF8F5]/80 hover:text-white transition-colors whitespace-nowrap"
            >
              Contact
            </a>

            <a
              href="tel:+919953104104"
              className="flex items-center gap-2 text-[13px] font-medium text-[#FAF8F5]/90 hover:text-white transition-all whitespace-nowrap"
            >
              <Phone className="h-3.5 w-3.5 text-[#FB923C]" />
              <span className="font-mono text-xs">+91 99531 04104</span>
            </a>

            {/* Single Primary Luxury Button */}
            <a
              href="/book-caretaker"
              className="rounded-full bg-[#FB923C] hover:bg-[#EA580C] text-white px-6 py-2.5 text-xs xl:text-sm font-semibold shadow-sm transition-all whitespace-nowrap active:scale-95"
            >
              Book Care
            </a>
          </div>

          {/* Mobile Right: Hamburger Only (Zero Mess) */}
          <div className="lg:hidden flex items-center gap-2.5">
            <a
              href="tel:+919953104104"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white"
              aria-label="Call emergency helpline"
            >
              <Phone className="w-3.5 h-3.5 text-[#FB923C]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center justify-center p-1.5 text-[#FAF8F5] hover:opacity-80 active:scale-95 transition-all"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-6 w-6 stroke-[1.75]" />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE FULL-SCREEN NAVIGATION DRAWER ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: cubicEase }}
            className="fixed inset-0 z-50 flex flex-col bg-[#FAF8F5] lg:hidden"
          >
            {/* Drawer Header */}
            <div className="flex h-[72px] items-center justify-between px-6 border-b border-[#0F2F28]/10 bg-[#0F2F28] text-white">
              <div className="flex items-center gap-2">
                <span className="font-sans text-[20px] font-bold text-[#FAF8F5]">Kyno</span>
                <span className="font-sans text-[20px] font-medium text-[#FB923C]">health</span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:opacity-75 transition-opacity"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6 stroke-[1.75]" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
              <div className="space-y-6">
                {/* City Picker Card */}
                <div
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCityModalOpen(true);
                  }}
                  className="p-4 rounded-2xl bg-white border border-[#0F2F28]/10 shadow-sm flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#00875A]" />
                    <div>
                      <div className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
                        Service Location
                      </div>
                      <div className="text-sm font-bold text-[#0F2F28]">
                        {selectedCity.name}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#00875A] underline">Change</span>
                </div>

                {/* Primary Action Booking Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="/book-doctor"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-4 rounded-2xl bg-[#00875A] text-white flex flex-col justify-between shadow-sm"
                  >
                    <Stethoscope className="w-5 h-5 mb-2" />
                    <div>
                      <div className="text-xs font-bold leading-tight">Doctor at Home</div>
                      <div className="text-[10px] text-white/80 mt-0.5">20-Min Arrival • ₹1999</div>
                    </div>
                  </a>

                  <a
                    href="/book-caretaker"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-4 rounded-2xl bg-[#FB923C] text-white flex flex-col justify-between shadow-sm"
                  >
                    <CalendarCheck className="w-5 h-5 mb-2" />
                    <div>
                      <div className="text-xs font-bold leading-tight">Book Caretaker</div>
                      <div className="text-[10px] text-white/80 mt-0.5">12h / 24h Verified GDA</div>
                    </div>
                  </a>
                </div>

                {/* Nav Links Accordion */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Clinical Services &amp; Plans
                  </div>

                  {navData.links.map((link) => {
                    const hasSubmenu = Boolean(link.submenu && link.submenu.length > 0);
                    const isOpen = openAccordion === link.label;

                    return (
                      <div key={link.label} className="border-b border-[#0F2F28]/10 pb-3">
                        {hasSubmenu ? (
                          <>
                            <button
                              onClick={() => setOpenAccordion(isOpen ? null : link.label)}
                              className="flex w-full items-center justify-between py-1 text-left text-base font-semibold text-[#132D2E]"
                            >
                              <span>{link.label}</span>
                              <ChevronDown
                                className={`h-4 w-4 text-gray-500 transition-transform ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <div className="mt-2 space-y-2 pl-3 pt-1">
                                {link.submenu?.map((sub) => (
                                  <a
                                    key={sub.title}
                                    href={sub.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-1 text-sm text-[#132D2E]/80 hover:text-[#00875A]"
                                  >
                                    {sub.title}
                                  </a>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <a
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-base font-semibold text-[#132D2E]"
                          >
                            {link.label}
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Support */}
              <div className="pt-6 border-t border-[#0F2F28]/10 space-y-3">
                <a
                  href="tel:+919953104104"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#0F2F28] py-3 text-white text-xs font-bold shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#FB923C]" />
                  <span>Call 24/7 Helpline: +91 99531 04104</span>
                </a>

                <div className="text-center text-[11px] text-gray-500 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00875A]" />
                  <span>NABH Aligned • 100% Police &amp; Aadhaar Verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global City Selector Modal */}
      <CitySelectorModal
        isOpen={cityModalOpen}
        onClose={() => setCityModalOpen(false)}
        selectedCityId={selectedCity.id}
        onSelectCity={handleCitySelect}
      />
    </>
  );
}
