"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Check,
  Navigation,
  X,
  Clock,
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from "lucide-react";

export interface CityInfo {
  id: string;
  name: string;
  state: string;
  status: "live" | "expanding" | "waitlist";
  eta: string;
  services: string[];
  hubs: string;
  isPopular?: boolean;
}

export const CITIES_DATA: CityInfo[] = [
  {
    id: "gurgaon",
    name: "Gurugram (Gurgaon)",
    state: "Haryana",
    status: "live",
    eta: "20-Min Emergency Dispatch",
    services: ["12h/24h GDAs", "20-Min Doctors", "Critical Nursing", "Physiotherapy"],
    hubs: "Sector 46 HQ, DLF Phase 1-5, Golf Course Rd, Sohna Rd, New Gurgaon",
    isPopular: true,
  },
  {
    id: "south-delhi",
    name: "South Delhi",
    state: "Delhi NCR",
    status: "live",
    eta: "Same-Day Dispatch",
    services: ["12h/24h GDAs", "Home Nursing", "Geriatric Care", "Bedside Vitals"],
    hubs: "GK 1 & 2, Vasant Kunj, Saket, Hauz Khas, Defense Colony",
    isPopular: true,
  },
  {
    id: "west-delhi",
    name: "Central & West Delhi",
    state: "Delhi NCR",
    status: "live",
    eta: "Same-Day Dispatch",
    services: ["12h/24h GDAs", "Post-Op Care", "Bedridden Attendants"],
    hubs: "Punjabi Bagh, Rajouri Garden, Patel Nagar, Rohini",
  },
  {
    id: "noida",
    name: "Noida & Greater Noida",
    state: "Uttar Pradesh",
    status: "expanding",
    eta: "24-48 Hr Advance Booking",
    services: ["12h/24h Live-in Attendants", "Home ICU Setup"],
    hubs: "Sector 50, 62, 137, Expressway Societies",
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    status: "waitlist",
    eta: "Launching Q2 2026",
    services: ["Early Access Registry Open"],
    hubs: "Indiranagar, Koramangala, Whitefield, HSR Layout",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    status: "waitlist",
    eta: "Launching Q2 2026",
    services: ["Early Access Registry Open"],
    hubs: "Bandra, Powai, South Mumbai, Andheri West",
  },
];

interface CitySelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCityId: string;
  onSelectCity: (city: CityInfo) => void;
}

export default function CitySelectorModal({
  isOpen,
  onClose,
  selectedCityId,
  onSelectCity,
}: CitySelectorModalProps) {
  const [detecting, setDetecting] = useState(false);
  const [detectionMsg, setDetectionMsg] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleAutoDetect = () => {
    if (!navigator.geolocation) {
      setDetectionMsg("Geolocation not supported by browser. Showing Gurugram (Primary Hub).");
      return;
    }

    setDetecting(true);
    setDetectionMsg(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setDetecting(false);

        // Approximate Delhi NCR bounding box: Lat 28.0 - 28.9, Long 76.8 - 77.5
        if (latitude >= 28.0 && latitude <= 28.9 && longitude >= 76.8 && longitude <= 77.5) {
          // If in south/west or near Gurgaon (lat ~ 28.45, lon ~ 77.02)
          if (latitude < 28.52 && longitude < 77.15) {
            const city = CITIES_DATA.find((c) => c.id === "gurgaon")!;
            onSelectCity(city);
            setDetectionMsg("Location detected: Gurugram, Haryana. Active hub selected!");
          } else {
            const city = CITIES_DATA.find((c) => c.id === "south-delhi")!;
            onSelectCity(city);
            setDetectionMsg("Location detected: Delhi NCR. South Delhi hub selected!");
          }
        } else {
          // Outside NCR, default to Gurugram with notice
          const city = CITIES_DATA.find((c) => c.id === "gurgaon")!;
          onSelectCity(city);
          setDetectionMsg("Location detected outside NCR. Defaulting to Gurugram flagship hub.");
        }
      },
      (err) => {
        setDetecting(false);
        const city = CITIES_DATA.find((c) => c.id === "gurgaon")!;
        onSelectCity(city);
        if (err.code === err.PERMISSION_DENIED) {
          setDetectionMsg("Location permission denied. Defaulted to Gurugram flagship hub.");
        } else {
          setDetectionMsg("Unable to retrieve location. Defaulted to Gurugram.");
        }
      },
      { timeout: 7000 }
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B231E]/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-[#0F2F28]/10 overflow-hidden z-10 my-auto"
          >
            {/* Header */}
            <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-[#0F2F28]/10 bg-[#FAF8F5] relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-200/60 transition-colors"
                aria-label="Close location selector"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00875A]/10 text-[#00875A] text-xs font-semibold tracking-wide uppercase mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Service Coverage Area</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#0F2F28] tracking-tight">
                Select your city for home healthcare
              </h2>
              <p className="text-xs sm:text-sm text-[#0F2F28]/75 mt-1 leading-relaxed">
                Hospital-supervised GDAs and on-demand emergency doctors dispatched from localized clinical hubs.
              </p>

              {/* Auto Detect Location Button */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleAutoDetect}
                  disabled={detecting}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#00875A]/30 hover:border-[#00875A] text-xs font-bold text-[#00875A] shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
                >
                  <Navigation className={`w-3.5 h-3.5 ${detecting ? "animate-spin text-[#FB923C]" : ""}`} />
                  <span>{detecting ? "Detecting GPS Location..." : "Auto-Detect My City (GPS)"}</span>
                </button>

                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-[#00875A]" />
                  <span>Instant 20-min doctor dispatch active in Gurugram</span>
                </div>
              </div>

              {detectionMsg && (
                <div className="mt-3 p-2.5 rounded-xl bg-[#E7EFEA] border border-[#00875A]/20 text-xs text-[#0F2F28] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#00875A] flex-shrink-0" />
                  <span>{detectionMsg}</span>
                </div>
              )}
            </div>

            {/* City Cards Grid */}
            <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-3.5">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                Available Cities &amp; Clinical Dispatch Hubs
              </div>

              {CITIES_DATA.map((city) => {
                const isSelected = selectedCityId === city.id;
                const isLive = city.status === "live";

                return (
                  <div
                    key={city.id}
                    onClick={() => {
                      if (isLive || city.status === "expanding") {
                        onSelectCity(city);
                        onClose();
                      }
                    }}
                    className={`relative p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#F0FDF4] border-[#00875A] ring-2 ring-[#00875A]/20 shadow-sm"
                        : isLive
                        ? "bg-white border-gray-200 hover:border-[#00875A]/50 hover:bg-[#FAF8F5]"
                        : "bg-gray-50/70 border-gray-200 opacity-80"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-lg font-medium text-[#0F2F28]">
                            {city.name}
                          </h3>
                          <span className="text-xs text-gray-500 font-normal">
                            ({city.state})
                          </span>

                          {/* Status Badge */}
                          {city.status === "live" && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#065F46] text-[10px] font-bold uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                              Live Now
                            </span>
                          )}
                          {city.status === "expanding" && (
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase">
                              Advance Booking
                            </span>
                          )}
                          {city.status === "waitlist" && (
                            <span className="px-2.5 py-0.5 rounded-full bg-gray-200 text-gray-700 text-[10px] font-medium">
                              Waitlist Open
                            </span>
                          )}
                        </div>

                        {/* Dispatch ETA */}
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FB923C]">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{city.eta}</span>
                        </div>

                        {/* Covered Sectors / Societies */}
                        <p className="text-xs text-gray-600 line-clamp-1">
                          <span className="font-medium text-gray-700">Hubs:</span> {city.hubs}
                        </p>

                        {/* Available Services Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {city.services.map((s) => (
                            <span
                              key={s}
                              className="px-2 py-0.5 rounded-md bg-gray-100 text-[11px] font-medium text-gray-700"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Indicator */}
                      <div className="flex-shrink-0 pt-1">
                        {isSelected ? (
                          <div className="w-7 h-7 rounded-full bg-[#00875A] text-white flex items-center justify-center shadow-sm">
                            <Check className="w-4 h-4 stroke-[2.5]" />
                          </div>
                        ) : isLive ? (
                          <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-[#00875A]">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        ) : (
                          <span className="text-[11px] text-gray-400 font-medium">Coming Soon</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 bg-[#FAF8F5] border-t border-[#0F2F28]/10 flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Need urgent care outside these areas? Call{" "}
                <a href="tel:+919953104104" className="font-bold text-[#0F2F28] hover:underline">
                  +91 99531 04104
                </a>
              </span>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-[#0F2F28] hover:bg-[#1A4D43] text-white text-xs font-semibold shadow-sm transition-all"
              >
                Confirm &amp; Continue
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
