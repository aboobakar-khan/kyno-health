"use client";

import footerData from "@/data/footer.json";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function Footer() {
  const socialIcons = (
    <div className="flex items-center gap-3 text-white">
      <ul className="flex gap-2 text-white items-center">
        {/* Facebook */}
        <li className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            className="hover:text-gray-300 transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg height="22" viewBox="6 6 24 24" width="22" className="w-5 h-5 fill-current">
              <path d="M30 18C30 11.3726 24.6274 6 18 6C11.3726 6 6 11.3726 6 18C6 23.9895 10.3882 28.954 16.125 29.8542V21.4687H13.0781V18H16.125V15.3562C16.125 12.3488 17.9166 10.6875 20.6576 10.6875C21.9701 10.6875 23.3438 10.9219 23.3438 10.9219V13.875H21.8306C20.34 13.875 19.875 14.8001 19.875 15.75V18H23.2031L22.6711 21.4687H19.875V29.8542C25.6118 28.954 30 23.9895 30 18Z" />
            </svg>
          </a>
        </li>

        {/* Instagram */}
        <li className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            className="hover:text-gray-300 transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5">
              <path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0m112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112z" />
              <path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128m0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80" />
              <circle cx="393.6" cy="118.4" r="17.056" />
            </svg>
          </a>
        </li>

        {/* LinkedIn */}
        <li className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <a
            href="https://www.linkedin.com/company/kynohealth/"
            aria-label="Kyno Health LinkedIn"
            className="hover:text-gray-300 transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" className="w-5 h-5">
              <path fill="#fff" fillRule="evenodd" d="M2.556 23h17.888A2.556 2.556 0 0 0 23 20.444V2.556A2.556 2.556 0 0 0 20.444 0H2.556A2.556 2.556 0 0 0 0 2.556v17.888A2.556 2.556 0 0 0 2.556 23" clipRule="evenodd" />
              <path fill="#0F2F28" fillRule="evenodd" d="M19.805 19.806h-3.413v-5.814c0-1.594-.605-2.484-1.867-2.484-1.372 0-2.09.927-2.09 2.484v5.814H9.148V8.732h3.289v1.491s.989-1.83 3.339-1.83 4.03 1.435 4.03 4.401zM5.223 7.28a2.036 2.036 0 0 1-2.029-2.043c0-1.129.908-2.044 2.029-2.044S7.25 4.11 7.25 5.238A2.035 2.035 0 0 1 5.223 7.28M3.524 19.806h3.43V8.732h-3.43z" clipRule="evenodd" />
            </svg>
          </a>
        </li>
      </ul>

      {/* NABH & Police Verification Trust Badge */}
      <div className="pl-2 border-l border-white/20 flex items-center gap-1.5 text-xs text-[#34D399] font-medium">
        <ShieldCheck className="w-4 h-4 text-[#34D399]" />
        <span>NABH Standard</span>
      </div>
    </div>
  );

  const contactCard = (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-white/90 text-xs sm:text-sm space-y-3">
      <div className="flex items-start gap-2.5">
        <MapPin className="w-4 h-4 text-[#FB923C] flex-shrink-0 mt-0.5" />
        <span className="leading-snug">
          1094, HUDA Colony, Sector 46, Gurugram, Haryana - 122018
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        <Phone className="w-4 h-4 text-[#34D399] flex-shrink-0" />
        <a href="tel:+919953104104" className="font-semibold text-white hover:text-[#34D399] transition-colors">
          +91 99531 04104 (24/7 Helpline)
        </a>
      </div>
      <div className="flex items-center gap-2.5">
        <Mail className="w-4 h-4 text-[#34D399] flex-shrink-0" />
        <a href="mailto:support@kynohealth.com" className="hover:text-[#34D399] transition-colors">
          support@kynohealth.com
        </a>
      </div>
      <div className="flex items-center gap-2.5">
        <Clock className="w-4 h-4 text-[#FB923C] flex-shrink-0" />
        <span>Operating 24 Hours / 7 Days a Week</span>
      </div>
    </div>
  );

  return (
    <footer className="relative bg-[#0A241F] text-white py-12 px-5 sm:px-10 lg:py-16 w-full">
      <div className="max-w-[1200px] mx-auto">
        {/* ── TOP HORIZONTAL DIVIDER LINE ── */}
        <div className="border-t border-[#34D399]/20 mb-10 sm:mb-12" />

        {/* ── MOBILE / PHONE FOOTER ── */}
        <div className="block lg:hidden">
          {/* Wordmark */}
          <div className="mb-6 flex items-center gap-2.5">
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
            <div className="flex items-baseline">
              <span className="font-sans text-[24px] font-bold text-white">Kyno</span>
              <span className="font-sans text-[24px] font-medium text-[#FB923C] ml-1">health</span>
            </div>
          </div>

          <div className="mb-8">{contactCard}</div>

          {/* 2-Column Responsive Layout */}
          <div className="flex flex-row gap-6 sm:gap-10 mb-10">
            {/* Left Column: Caretaker Services & Gurgaon Centers */}
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <h3 className="text-[15px] font-semibold text-[#34D399] mb-3">
                  Caretaker Services
                </h3>
                <ul className="space-y-2">
                  {footerData.completeCare.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] text-white/90 hover:text-[#34D399] transition-colors leading-[1.5] block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-[#34D399] mb-3">
                  Gurgaon Hubs
                </h3>
                <ul className="space-y-2">
                  {footerData.centers.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] text-white/90 hover:text-[#34D399] transition-colors leading-[1.5] block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Clinical Services & About Us */}
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <h3 className="text-[15px] font-semibold text-[#34D399] mb-3">
                  Clinical Services
                </h3>
                <ul className="space-y-2">
                  {footerData.clinicalLabReview.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] text-white/90 hover:text-[#34D399] transition-colors leading-[1.5] block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-[#34D399] mb-3">
                  About Us
                </h3>
                <ul className="space-y-2">
                  {footerData.aboutUs.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] text-white/90 hover:text-[#34D399] transition-colors leading-[1.5] block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons on Mobile */}
          <div className="flex flex-col gap-3 mb-8">
            <a
              href="/book-caretaker"
              className="inline-flex items-center justify-center rounded-full bg-[#FB923C] text-white hover:bg-[#EA580C] transition-colors py-3.5 px-6 text-sm font-semibold text-center shadow-md"
            >
              Book Caretaker in Gurgaon
            </a>
            <a
              href="tel:+919953104104"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors py-3 px-6 text-sm font-semibold text-center"
            >
              <Phone className="w-4 h-4 text-[#FB923C]" />
              <span>Call Helpline: +91 99531 04104</span>
            </a>
          </div>

          <div className="mb-6">{socialIcons}</div>
        </div>

        {/* ── DESKTOP 4-COLUMN FOOTER NAVIGATION ── */}
        <div className="hidden lg:grid grid-cols-12 gap-8 pb-8">
          {/* COLUMN 1: Brand Wordmark, Address, Contact & Accreditation */}
          <div className="col-span-4 pr-4">
            <div className="mb-6 flex items-center gap-2.5">
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
              <div className="flex items-baseline">
                <span className="font-sans text-[26px] font-bold text-white">Kyno</span>
                <span className="font-sans text-[26px] font-medium text-[#FB923C] ml-1">health</span>
              </div>
            </div>

            {contactCard}

            <div className="mt-6">{socialIcons}</div>
          </div>

          {/* COLUMN 2: Caretaker Services */}
          <div className="col-span-3">
            <h3 className="text-[15px] font-semibold text-[#34D399] mb-3.5 whitespace-nowrap">
              Caretaker at Home
            </h3>
            <ul className="space-y-2.5">
              {footerData.completeCare.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13.5px] text-white/85 hover:text-[#34D399] transition-colors leading-[1.6]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Clinical Services & Doctors */}
          <div className="col-span-3">
            <h3 className="text-[15px] font-semibold text-[#34D399] mb-3.5 whitespace-nowrap">
              Clinical &amp; Medical Services
            </h3>
            <ul className="space-y-2.5">
              {footerData.clinicalLabReview.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13.5px] text-white/85 hover:text-[#34D399] transition-colors leading-[1.6]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="text-[15px] font-semibold text-[#34D399] mb-3 whitespace-nowrap">
                About &amp; Clinical Leadership
              </h3>
              <ul className="space-y-2">
                {footerData.aboutUs.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[13px] text-white/80 hover:text-[#34D399] transition-colors leading-[1.5]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMN 4: Gurgaon Hubs & CTA */}
          <div className="col-span-2">
            <h3 className="text-[15px] font-semibold text-[#34D399] mb-3.5 whitespace-nowrap">
              Gurgaon Hubs
            </h3>
            <ul className="space-y-2">
              {footerData.centers.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] text-white/85 hover:text-[#34D399] transition-colors leading-[1.5]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <a
                href="/book-caretaker"
                className="inline-flex items-center justify-center rounded-full bg-[#FB923C] text-white hover:bg-[#EA580C] transition-colors py-2.5 px-5 text-xs font-semibold w-full text-center shadow-sm"
              >
                Book Caretaker
              </a>

              <a
                href="tel:+919953104104"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 text-white hover:border-[#34D399] transition-colors py-2 px-4 text-xs font-medium w-full text-center"
              >
                <Phone className="w-3 h-3 text-[#FB923C]" />
                <span>+91 99531 04104</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── BOTTOM HORIZONTAL DIVIDER LINE ── */}
        <div className="border-t border-[#34D399]/20 mt-10 pt-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            {/* Copyright */}
            <div className="text-[11.5px] sm:text-[12px] text-white/80 text-center lg:text-left font-normal">
              {footerData.copyright}
            </div>

            {/* Legal Links */}
            <div className="flex flex-row flex-wrap items-center justify-center text-[11.5px] sm:text-[12px] text-white/80">
              {footerData.legal.map((item, idx) => (
                <span key={item.label} className="inline-flex items-center">
                  <a
                    href={item.href}
                    className="hover:text-[#34D399] transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                  {idx < footerData.legal.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-white/30 mx-1.5 font-light select-none"
                    >
                      |
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
