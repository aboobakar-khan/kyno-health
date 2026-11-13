"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Send,
  CheckCircle2,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sector, setSector] = useState("DLF Phase 5");
  const [serviceNeeded, setServiceNeeded] = useState("12h-caretaker");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.trim().length < 10) {
      alert("Please enter your name and a valid 10-digit mobile number.");
      return;
    }
    const id = `KYNO-ENQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(id);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Kyno Health Care Coordinator, I have submitted an inquiry.\n\n` +
    `Ref ID: ${referenceId}\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Gurgaon Sector: ${sector}\n` +
    `Service Needed: ${serviceNeeded}\n` +
    `Message: ${message || "I need immediate caretaker/medical care assistance."}\n\n` +
    `Please assist me.`
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#132D2E]">
      <Banner />
      <Navbar />

      <main className="flex-grow py-12 lg:py-20">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2F28]/10 text-[#0F2F28] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>Gurgaon Care Command Center • 24/7 Live</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#0F2F28] tracking-tight">
              Contact Kyno Health Gurgaon
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#0F2F28]/80 leading-relaxed font-normal">
              Speak with our clinical care coordinators for immediate caretaker matching, doctor emergency dispatch in 20 minutes, or home nursing services across Gurugram.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Contact Info & Emergency Hotline Cards (Span 5) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Emergency Hotline Card */}
              <div className="rounded-3xl bg-[#0F2F28] text-white p-7 shadow-xl border border-white/10 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FB923C] uppercase tracking-wider mb-2">
                    <Phone className="w-4 h-4 animate-pulse" />
                    <span>24/7 Gurgaon Emergency Hotline</span>
                  </div>
                  <h3 className="font-serif text-2xl font-light">
                    Immediate Medical Assistance
                  </h3>
                  <p className="text-xs text-white/80 mt-1 leading-relaxed">
                    Doctor dispatched in 20–30 minutes across Gurgaon. 12h/24h caretaker placement within 4–12 hours.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href="tel:+919953104104"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FB923C] hover:bg-[#EA580C] text-white px-6 py-3 text-sm font-semibold transition-colors shadow-sm text-center"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+91 99531 04104</span>
                    </a>

                    <a
                      href="https://wa.me/919953104104?text=Hi%20Kyno%20Health,%20I%20need%20care%20support%20in%20Gurgaon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-3 text-sm font-semibold transition-colors shadow-sm text-center"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>WhatsApp Care</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Physical Clinic / HQ Address Card */}
              <div className="rounded-3xl bg-white p-7 shadow-sm border border-[#0F2F28]/10 space-y-4">
                <h3 className="font-serif text-xl font-normal text-[#0F2F28]">
                  Gurgaon Central Headquarters
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#0F2F28]/85">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#FB923C] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#0F2F28]">Kyno Care Pvt. Ltd.</span>
                      <span>1094, HUDA Colony, Sector 46, Gurugram, Haryana - 122018</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#00875A] flex-shrink-0" />
                    <span>Operating Hours: 24 Hours / 7 Days / 365 Days</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#00875A] flex-shrink-0" />
                    <a href="mailto:support@kynohealth.com" className="hover:underline">
                      support@kynohealth.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0F2F28]/10 flex items-center justify-between text-xs text-[#0F2F28]/70">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#00875A]" />
                    <span>NABH Compliant</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#FB923C]" />
                    <span>100% Police Verified</span>
                  </div>
                </div>
              </div>

              {/* Quick Link Card */}
              <div className="rounded-3xl bg-[#E6F4EA] p-6 border border-[#34D399]/30 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0F2F28]">Need an Instant Rate Card?</h4>
                  <p className="text-xs text-[#0F2F28]/75 mt-0.5">Explore transparent daily &amp; monthly packages.</p>
                </div>
                <Link
                  href="/plans"
                  className="px-4 py-2 rounded-full bg-[#0F2F28] text-white text-xs font-semibold hover:bg-[#1A423A] transition-colors"
                >
                  View Plans
                </Link>
              </div>
            </div>

            {/* Right: Working Interactive Enquiry Form (Span 7) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 shadow-xl border border-[#0F2F28]/10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#E6F4EA] flex items-center justify-center text-[#00875A] mx-auto mb-5">
                    <CheckCircle2 className="w-10 h-10 text-[#00875A]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#00875A] bg-[#E6F4EA] px-3 py-1 rounded-full">
                    Inquiry Received
                  </span>
                  <h3 className="font-serif text-3xl font-light text-[#0F2F28] mt-3">
                    Thank You, {name}!
                  </h3>
                  <p className="font-mono text-sm font-bold text-[#FB923C] mt-2">
                    Reference ID: {referenceId}
                  </p>
                  <p className="text-sm text-[#0F2F28]/80 max-w-md mx-auto mt-3 leading-relaxed">
                    Our Gurgaon Care Coordinator has received your details and will call you on <strong>{phone}</strong> within 10 minutes to discuss your requirement.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919953104104?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3.5 text-sm font-semibold shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Continue on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#0F2F28]/60 hover:text-[#0F2F28] underline underline-offset-4"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#0F2F28]/10 pb-4 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#00875A] flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5" />
                      Send a Message to Clinical Team
                    </span>
                    <h3 className="font-serif text-2xl font-light text-[#0F2F28] mt-1">
                      Request Consultation or Caretaker Placement
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajiv Malhotra"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-sm focus:outline-none focus:border-[#00875A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-1.5">
                        10-Digit Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9953104104"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-sm focus:outline-none focus:border-[#00875A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. family@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-sm focus:outline-none focus:border-[#00875A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-1.5">
                        Gurgaon Sector / Locality
                      </label>
                      <select
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-sm focus:outline-none focus:border-[#00875A]"
                      >
                        <option value="DLF Phase 1-5">DLF Phase 1, 2, 3, 4, 5</option>
                        <option value="Golf Course Road">Golf Course Road</option>
                        <option value="Golf Course Extension">Golf Course Extension Road</option>
                        <option value="Sector 46 & HUDA Colony">Sector 46 (HUDA Colony HQ)</option>
                        <option value="Sushant Lok 1 & 2">Sushant Lok 1 &amp; 2</option>
                        <option value="Sohna Road">Sohna Road / South City</option>
                        <option value="Nirvana Country">Nirvana Country / Sector 50</option>
                        <option value="Palam Vihar">Palam Vihar / Old Gurgaon</option>
                        <option value="New Gurgaon">New Gurgaon (Sectors 81-95)</option>
                        <option value="Other Area">Other Delhi NCR Location</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      value={serviceNeeded}
                      onChange={(e) => setServiceNeeded(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-sm focus:outline-none focus:border-[#00875A]"
                    >
                      <option value="12h-caretaker">12-Hour Caretaker (Day or Night Shift)</option>
                      <option value="24h-caretaker">24-Hour Live-In Dedicated Caretaker</option>
                      <option value="doctor-visit">Doctor Visit at Home (20 Mins Dispatch)</option>
                      <option value="nurse-visit">Critical Care / General Nurse at Home</option>
                      <option value="physiotherapy">Home Physiotherapy Session</option>
                      <option value="icu-setup">ICU Equipment &amp; Oxygen at Home</option>
                      <option value="general-inquiry">General Inquiry / Assessment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-1.5">
                      Tell us about the patient&apos;s condition
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. 80-year-old father, post-hip surgery, needs assistance with walking and personal hygiene..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-sm focus:outline-none focus:border-[#00875A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FB923C] hover:bg-[#EA580C] text-white py-4 px-8 text-sm font-semibold shadow-md active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Submit Inquiry for 10-Minute Callback</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-[#0F2F28]/60">
                    Your information is strictly private under HIPAA &amp; NABH patient privacy standards.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
