"use client";

import { useState } from "react";
import {
  CalendarCheck,
  ShieldCheck,
  Phone,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

interface BookingFormProps {
  initialService?: string;
  initialPlan?: string;
}

export default function BookingForm({
  initialService = "12h-caretaker",
  initialPlan = "12h",
}: BookingFormProps) {
  const [service, setService] = useState(initialPlan === "24h" ? "24h-caretaker" : initialService);
  const [patientCondition, setPatientCondition] = useState("elderly-care");
  const [sector, setSector] = useState("DLF Phase 5");
  const [shift, setShift] = useState(initialPlan === "24h" ? "24-Hours Live-In" : "Day Shift (8 AM - 8 PM)");
  const [startDate, setStartDate] = useState("2026-11-14");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");

  // Rate calculation
  const getPrice = () => {
    switch (service) {
      case "12h-caretaker":
        return { rate: "₹1,200", period: "per day", monthly: "₹28,000/month", badge: "Zero Brokerage" };
      case "24h-caretaker":
        return { rate: "₹1,800", period: "per day", monthly: "₹42,000/month", badge: "Doctor Supervised" };
      case "doctor-visit":
        return { rate: "₹1,999", period: "per visit", monthly: "20 min arrival (detailed 30m consultation + vitals + emergency meds)", badge: "Emergency Kit & ECG" };
      case "nurse-visit":
        return { rate: "₹499", period: "per visit", monthly: "IV / Injections / Dressings", badge: "GNM / B.Sc Nurse" };
      case "physiotherapy":
        return { rate: "₹799", period: "per session", monthly: "Package available", badge: "Ortho & Neuro Rehab" };
      default:
        return { rate: "₹1,200", period: "per day", monthly: "₹28,000/month", badge: "Zero Brokerage" };
    }
  };

  const currentPrice = getPrice();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.trim().length < 10) {
      alert("Please enter a valid name and 10-digit mobile number.");
      return;
    }
    const generatedId = `KYNO-GUR-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingId(generatedId);
    setBookingConfirmed(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Kyno Health Care Coordinator, I have scheduled care on your website.\n\n` +
    `Booking ID: ${bookingId}\n` +
    `Patient Name: ${name}\n` +
    `Service: ${service}\n` +
    `Condition: ${patientCondition}\n` +
    `Gurgaon Sector: ${sector}\n` +
    `Address: ${address || "Gurgaon"}\n` +
    `Start Date: ${startDate}\n` +
    `Special Notes: ${notes || "None"}\n` +
    `Phone: ${phone}\n\n` +
    `Please confirm the caretaker/doctor assignment.`
  );

  if (bookingConfirmed) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#34D399]/30 text-center max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-[#E6F4EA] flex items-center justify-center text-[#00875A] mx-auto mb-5 shadow-sm">
          <CheckCircle2 className="w-10 h-10 text-[#00875A]" />
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F2F28]/10 text-xs font-semibold text-[#0F2F28] mb-3">
          <ShieldCheck className="w-4 h-4 text-[#00875A]" />
          Booking Reference Confirmed
        </span>

        <h3 className="font-serif text-3xl font-light text-[#0F2F28]">
          Care Request Scheduled!
        </h3>

        <div className="my-6 p-4 rounded-2xl bg-[#FAF8F5] border border-[#0F2F28]/10 text-left space-y-2 text-sm text-[#0F2F28]">
          <div className="flex justify-between items-center border-b border-[#0F2F28]/10 pb-2">
            <span className="text-xs text-[#0F2F28]/70 font-semibold uppercase">Booking ID</span>
            <span className="font-mono font-bold text-base text-[#FB923C]">{bookingId}</span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-[#0F2F28]/70">Patient Name:</span>
            <span className="font-medium">{name}</span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-[#0F2F28]/70">Selected Service:</span>
            <span className="font-medium capitalize">{service.replace("-", " ")}</span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-[#0F2F28]/70">Gurgaon Sector:</span>
            <span className="font-medium">{sector}</span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-[#0F2F28]/70">Start Date:</span>
            <span className="font-medium">{startDate}</span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm pt-2 border-t border-[#0F2F28]/10">
            <span className="text-[#0F2F28]/70">Estimated Rate:</span>
            <span className="font-bold text-[#00875A]">{currentPrice.rate} ({currentPrice.period})</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#0F2F28]/80 leading-relaxed mb-6">
          Our Gurgaon Clinical Coordinator has received your request and will call you at <strong>{phone}</strong> within 10 minutes to finalize details.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/919953104104?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-7 py-3.5 text-sm font-semibold shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Confirm on WhatsApp</span>
          </a>

          <a
            href="tel:+919953104104"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0F2F28] hover:bg-[#1A423A] text-white px-7 py-3.5 text-sm font-semibold shadow-md transition-all"
          >
            <Phone className="w-4 h-4 text-[#FB923C]" />
            <span>Call +91 99531 04104</span>
          </a>
        </div>

        <button
          onClick={() => setBookingConfirmed(false)}
          className="mt-6 text-xs text-[#0F2F28]/60 hover:text-[#0F2F28] underline underline-offset-4 cursor-pointer"
        >
          Schedule another service
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#0F2F28]/10 max-w-2xl mx-auto">
      {/* Quick link to 20-min Doctor Flow */}
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#0F2F28] to-[#1A4D43] text-white flex items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border border-[#34D399]">
            <img src="/images/doctor-aryan.png" alt="Doctor" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#34D399] uppercase tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" /> Urgent Home Doctor?
            </div>
            <div className="text-xs text-white/90 font-medium">
              Need a doctor in 20 minutes? (₹1999 all-inclusive)
            </div>
          </div>
        </div>
        <a
          href="/book-doctor"
          className="px-3.5 py-1.5 rounded-full bg-[#00875A] hover:bg-[#00704A] text-white text-xs font-bold whitespace-nowrap shadow-sm transition-all flex items-center gap-1"
        >
          <span>Book Doctor</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      <div className="flex items-center justify-between border-b border-[#0F2F28]/10 pb-5 mb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00875A] flex items-center gap-1.5">
            <CalendarCheck className="w-4 h-4" />
            Instant Caretaker &amp; Doctor Scheduling
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#0F2F28] mt-1">
            Book Healthcare at Home in Gurgaon
          </h3>
        </div>

        <div className="hidden sm:flex flex-col items-end">
          <span className="text-[11px] font-semibold text-[#00875A] bg-[#E6F4EA] px-2.5 py-0.5 rounded-full">
            {currentPrice.badge}
          </span>
          <span className="text-lg font-bold text-[#0F2F28] mt-0.5">{currentPrice.rate}</span>
          <span className="text-[11px] text-[#0F2F28]/60">{currentPrice.period}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Select Service */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-2">
            1. Select Required Service
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {[
              { id: "12h-caretaker", label: "12-Hr Caretaker", price: "₹1,200/day" },
              { id: "24h-caretaker", label: "24-Hr Live-In", price: "₹1,800/day" },
              { id: "doctor-visit", label: "Doctor Home Visit", price: "₹999/visit" },
              { id: "nurse-visit", label: "Nurse at Home", price: "₹499/visit" },
              { id: "physiotherapy", label: "Physiotherapy", price: "₹799/session" },
            ].map((opt) => (
              <button
                type="button"
                key={opt.id}
                onClick={() => setService(opt.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  service === opt.id
                    ? "bg-[#0F2F28] text-white border-[#0F2F28] shadow-sm"
                    : "bg-[#FAF8F5] text-[#0F2F28] border-[#0F2F28]/15 hover:border-[#0F2F28]/40"
                }`}
              >
                <div className="text-xs sm:text-[13px] font-semibold leading-tight">{opt.label}</div>
                <div className={`text-[11px] mt-1 ${service === opt.id ? "text-[#34D399]" : "text-[#00875A]"}`}>
                  {opt.price}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Patient Condition */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-2">
            2. Patient Condition
          </label>
          <select
            value={patientCondition}
            onChange={(e) => setPatientCondition(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-sm focus:outline-none focus:border-[#00875A]"
          >
            <option value="elderly-care">Elderly &amp; Senior Citizen Care</option>
            <option value="post-surgery">Post-Operative Recovery (Knee/Hip, Cardiac)</option>
            <option value="bedridden-care">Bedridden / Paralysis (Bed Sore Prevention)</option>
            <option value="dementia-alzheimers">Dementia &amp; Alzheimer&apos;s Memory Care</option>
            <option value="stroke-rehab">Stroke &amp; Neurological Rehabilitation</option>
            <option value="palliative-care">Palliative &amp; Oncology Supportive Care</option>
            <option value="general-weakness">General Chronic Weakness / Acute Illness</option>
          </select>
        </div>

        {/* Step 3: Gurgaon Area & Shift Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-2">
              3. Gurgaon Hub
            </label>
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-xs sm:text-sm focus:outline-none focus:border-[#00875A]"
            >
              <option value="DLF Phase 1-5">DLF Phase 1, 2, 3, 4, 5</option>
              <option value="Golf Course Road">Golf Course Road</option>
              <option value="Golf Course Ext">Golf Course Extension</option>
              <option value="Sector 46 & HUDA Colony">Sector 46 (HUDA Colony)</option>
              <option value="Sushant Lok 1 & 2">Sushant Lok 1 &amp; 2</option>
              <option value="Sohna Road">Sohna Road / South City</option>
              <option value="Nirvana Country">Nirvana Country / Sec 50</option>
              <option value="New Gurgaon">New Gurgaon (Sectors 81-95)</option>
              <option value="Other Gurgaon Area">Other Gurgaon Sector</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-2">
              Preferred Shift
            </label>
            <select
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-xs sm:text-sm focus:outline-none focus:border-[#00875A]"
            >
              <option value="Day Shift (8 AM - 8 PM)">12h Day (8 AM - 8 PM)</option>
              <option value="Night Shift (8 PM - 8 AM)">12h Night (8 PM - 8 AM)</option>
              <option value="24-Hours Live-In">24-Hours Live-In Resident</option>
              <option value="Immediate Urgent Dispatch">Immediate Emergency Doctor</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-2">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-xs sm:text-sm focus:outline-none focus:border-[#00875A]"
            />
          </div>
        </div>

        {/* Step 4: Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-1.5">
              Contact Person / Family Name *
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
              placeholder="e.g. 98110XXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-sm focus:outline-none focus:border-[#00875A]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-1.5">
            Gurgaon Address / Society / Tower (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. Tower 3, Flat 802, The Magnolias, DLF Phase 5"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-sm focus:outline-none focus:border-[#00875A]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70 mb-1.5">
            Medical Notes / Special Requirements (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Diaper change needed, patient has mild dementia, walker assistance required..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#0F2F28]/15 text-[#0F2F28] text-sm focus:outline-none focus:border-[#00875A]"
          />
        </div>

        {/* Submit Button & Price Callout */}
        <div className="pt-3 border-t border-[#0F2F28]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left w-full sm:w-auto">
            <span className="text-xs text-[#0F2F28]/70">Estimated Cost:</span>
            <div className="font-bold text-lg text-[#0F2F28] leading-tight">
              {currentPrice.rate} <span className="text-xs font-normal text-[#0F2F28]/70">({currentPrice.period})</span>
            </div>
            <div className="text-[11px] text-[#00875A] font-semibold">Zero brokerage fee • 4-hr replacement guarantee</div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#FB923C] hover:bg-[#EA580C] text-white px-9 py-4 text-sm font-semibold shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Confirm &amp; Schedule Caretaker</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
