"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import {
  Check,
  Phone,
  Clock,
  AlertCircle,
  ChevronRight,
  Star,
  MessageSquare,
  Navigation,
  CheckCircle2
} from "lucide-react";

export default function BookDoctorPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Step 1: Phone & OTP
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpError, setOtpError] = useState("");

  // Step 2: Patient Info
  const [relation, setRelation] = useState("Self");
  const [patientName, setPatientName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [concerns, setConcerns] = useState("");
  const [history, setHistory] = useState("");
  const [step2Error, setStep2Error] = useState("");

  // Step 3: Location / Address
  const [houseNo, setHouseNo] = useState("");
  const [society, setSociety] = useState("");
  const [sector, setSector] = useState("Sector 46, HUDA Colony");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("122018");
  const [step3Error, setStep3Error] = useState("");

  // Step 4: Live dispatch details
  const [refId, setRefId] = useState("KYNO-DOC-4821");
  const [etaMinutes, setEtaMinutes] = useState(19);

  // Live countdown timer for Step 4
  useEffect(() => {
    if (step === 4 && etaMinutes > 5) {
      const timer = setInterval(() => {
        setEtaMinutes((prev) => Math.max(prev - 1, 5));
      }, 60000);
      return () => clearInterval(timer);
    }
  }, [step, etaMinutes]);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setOtpError("Please enter a valid 10-digit mobile number");
      return;
    }
    setOtpError("");
    setOtpSent(true);
    setOtp(["2", "0", "2", "6"]); // Pre-fill sample OTP for instant seamless UX
  };

  const handleVerifyOtp = () => {
    if (otp.join("").length < 4) {
      setOtpError("Please enter the 4-digit verification code");
      return;
    }
    setOtpError("");
    setStep(2);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      setStep2Error("Please enter patient name");
      return;
    }
    if (!gender) {
      setStep2Error("Please select patient gender");
      return;
    }
    if (!concerns.trim()) {
      setStep2Error("Please describe primary symptoms or health concern");
      return;
    }
    setStep2Error("");
    setStep(3);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!houseNo.trim() || !society.trim()) {
      setStep3Error("Please enter house/flat number and building or society name");
      return;
    }
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setRefId(`KYNO-DOC-${randomNum}`);
    setStep3Error("");
    setStep(4);
    window.scrollTo({ top: 80, behavior: "smooth" });
  };

  const sectors = [
    "Sector 46, HUDA Colony (Immediate Dispatch)",
    "DLF Phase 1, Gurgaon",
    "DLF Phase 2, Gurgaon",
    "DLF Phase 3 / Cyber City",
    "DLF Phase 4 / Galleria",
    "DLF Phase 5 / Golf Course Road",
    "Sector 56 / Sector 57, Gurugram",
    "Sector 54 / Sector 55, Gurugram",
    "Sushant Lok 1 & 2",
    "South City 1 & 2",
    "Sohna Road / Sector 47-50",
    "Sector 14 / Sector 15 / Old Gurgaon",
    "New Gurgaon (Sector 82-95)",
    "Golf Course Extension Road"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#132D2E]">
      <Banner />
      <Navbar />

      <main className="flex-grow py-8 sm:py-12">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6">

          {/* Stepper Header (Steps 1, 2, 3, 4) */}
          <div className="mb-8">
            <div className="flex items-center justify-between relative max-w-md mx-auto">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#0F2F28]/15 -translate-y-1/2 z-0" />
              
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step > 1
                      ? "bg-[#00875A] text-white shadow-sm"
                      : step === 1
                      ? "bg-[#0F2F28] text-white ring-4 ring-[#0F2F28]/15"
                      : "bg-white border-2 border-gray-300 text-gray-500"
                  }`}
                >
                  {step > 1 ? <Check className="w-4 h-4 stroke-[2.5]" /> : "1"}
                </div>
                <span className="text-[11px] font-semibold text-[#0F2F28] mt-1.5 whitespace-nowrap">
                  Mobile
                </span>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step > 2
                      ? "bg-[#00875A] text-white shadow-sm"
                      : step === 2
                      ? "bg-[#0F2F28] text-white ring-4 ring-[#0F2F28]/15"
                      : "bg-white border-2 border-gray-300 text-gray-500"
                  }`}
                >
                  {step > 2 ? <Check className="w-4 h-4 stroke-[2.5]" /> : "2"}
                </div>
                <span className="text-[11px] font-semibold text-[#0F2F28] mt-1.5 whitespace-nowrap">
                  Patient
                </span>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step > 3
                      ? "bg-[#00875A] text-white shadow-sm"
                      : step === 3
                      ? "bg-[#0F2F28] text-white ring-4 ring-[#0F2F28]/15"
                      : "bg-white border-2 border-gray-300 text-gray-500"
                  }`}
                >
                  {step > 3 ? <Check className="w-4 h-4 stroke-[2.5]" /> : "3"}
                </div>
                <span className="text-[11px] font-semibold text-[#0F2F28] mt-1.5 whitespace-nowrap">
                  Location
                </span>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step === 4
                      ? "bg-[#00875A] text-white ring-4 ring-[#00875A]/20 shadow-md"
                      : "bg-white border-2 border-gray-300 text-gray-500"
                  }`}
                >
                  {step === 4 ? <Check className="w-4 h-4 stroke-[2.5]" /> : "4"}
                </div>
                <span className="text-[11px] font-semibold text-[#0F2F28] mt-1.5 whitespace-nowrap">
                  Doctor &amp; ETA
                </span>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════ */}
          {/* STEP 1: MOBILE VERIFICATION                         */}
          {/* ═══════════════════════════════════════════════════ */}
          {step === 1 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0F2F28]/10 shadow-sm animate-fadeIn">
              {/* Realistic Doctor Team Banner */}
              <div className="relative mb-6 rounded-2xl overflow-hidden border border-[#0F2F28]/10 shadow-sm max-w-lg mx-auto">
                <img
                  src="/images/kyno-banner-step1.png"
                  alt="Kyno Health Doctors Team - Doctor at Home in 20 Minutes"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Headline */}
              <div className="text-center mb-6">
                <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#0F2F28] tracking-tight">
                  Get an experienced doctor at home in 20 minutes
                </h1>
                <p className="text-sm font-semibold text-[#FB923C] mt-1.5">
                  Book your Home Visit Now!
                </p>
              </div>

              {/* Phone & OTP Input Box */}
              <div className="max-w-md mx-auto mb-6">
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div className="flex rounded-2xl border-2 border-[#0F2F28]/15 bg-white overflow-hidden focus-within:border-[#00875A] transition-colors shadow-sm">
                    <div className="flex items-center gap-1.5 px-3.5 bg-gray-50 border-r border-gray-200 text-sm font-bold text-gray-700">
                      <span>🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      placeholder="Enter Mobile Number"
                      className="flex-grow px-4 py-3.5 text-sm sm:text-base font-medium text-[#132D2E] focus:outline-none"
                      disabled={otpSent}
                    />
                    {!otpSent ? (
                      <button
                        type="submit"
                        className="px-5 py-3.5 bg-[#0F2F28] hover:bg-[#1A4D43] text-white text-xs sm:text-sm font-semibold transition-all whitespace-nowrap active:scale-95"
                      >
                        Get OTP
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setOtpSent(false)}
                        className="px-4 py-3.5 text-xs text-[#00875A] font-medium hover:underline whitespace-nowrap"
                      >
                        Change
                      </button>
                    )}
                  </div>

                  {otpError && (
                    <p className="text-xs text-rose-600 font-medium text-center">{otpError}</p>
                  )}

                  {/* OTP Verification Form */}
                  {otpSent && (
                    <div className="p-5 rounded-2xl bg-[#E7EFEA]/60 border border-[#00875A]/20 animate-fadeIn">
                      <div className="text-center mb-3">
                        <span className="text-xs font-semibold text-[#0F2F28]">
                          OTP sent to +91 {phone}
                        </span>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          Verification code automatically entered for instant booking
                        </p>
                      </div>

                      <div className="flex justify-center gap-2 mb-4">
                        {otp.map((digit, i) => (
                          <input
                            key={i}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => {
                              const newOtp = [...otp];
                              newOtp[i] = e.target.value;
                              setOtp(newOtp);
                            }}
                            className="w-11 h-12 text-center text-lg font-bold rounded-xl border border-[#0F2F28]/20 bg-white text-[#0F2F28] focus:border-[#00875A] focus:outline-none"
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        className="w-full py-3.5 rounded-xl bg-[#00875A] hover:bg-[#00704A] text-white font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                      >
                        <span>Verify &amp; Enter Patient Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </form>
              </div>

              {/* Guidelines Notice Box */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#FAF8F5] border border-gray-200 text-xs text-gray-700 space-y-2 mb-8">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>Home visits are provided by qualified general physicians.</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>Specialist doctors or gender preferences are not available.</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto py-4 border-y border-gray-100 text-center mb-6">
                <div>
                  <div className="text-lg font-bold text-[#0F2F28]">30,000+</div>
                  <div className="text-xs text-gray-600 font-medium">Happy Families</div>
                </div>
                <div className="border-l border-gray-100">
                  <div className="text-lg font-bold text-[#0F2F28]">100+ Doctors</div>
                  <div className="text-xs text-gray-600 font-medium">Trusted Care</div>
                </div>
              </div>

              {/* Google Review Card (From Screenshot) */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#F0FDF4] border border-[#22C55E]/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#15803D] text-white font-bold text-xs flex items-center justify-center">
                      SP
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Sindhu Pillai</div>
                      <div className="flex items-center gap-1 text-[11px] text-[#15803D] font-medium">
                        <CheckCircle2 className="w-3 h-3" /> Recommends
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-500 text-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-bold ml-1 text-gray-800">5/5</span>
                  </div>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed italic">
                  &ldquo;Doctor arrived in just 22 minutes at DLF Phase 5 when my mother had sudden severe chills. Complete vitals check and emergency medication given promptly.&rdquo;
                </p>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════ */}
          {/* STEP 2: PATIENT DETAILS                             */}
          {/* ═══════════════════════════════════════════════════ */}
          {step === 2 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0F2F28]/10 shadow-sm animate-fadeIn">
              {/* Consultation Fee Callout Banner */}
              <div className="p-4 rounded-2xl bg-[#E7EFEA] border border-[#00875A]/25 mb-8 text-center max-w-lg mx-auto">
                <div className="text-sm font-bold text-[#0F2F28]">
                  Consultation Fees: <span className="text-[#00875A] font-extrabold text-base">₹1999</span>
                </div>
                <p className="text-xs text-[#0F2F28]/85 mt-1 leading-relaxed">
                  Your fee includes — a detailed 30 minute consultation and vitals check, emergency medicines/injectables &amp; unlimited Doctor follow-ups until recovery.
                </p>
              </div>

              <div className="max-w-lg mx-auto">
                <h2 className="text-lg font-bold text-[#0F2F28] mb-1">
                  Please provide details for whom you are booking for
                </h2>
                <p className="text-xs text-gray-500 mb-6">
                  Add patient details for clinical case file &amp; digital prescription
                </p>

                <form onSubmit={handleStep2Submit} className="space-y-5">
                  {/* Relation Pills */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">
                      Relation*
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Self", "Father", "Mother", "Son", "Daughter", "Spouse", "Relative"].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRelation(r)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                            relation === r
                              ? "bg-[#00875A] text-white shadow-sm ring-2 ring-[#00875A]/20"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Name*
                    </label>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Enter Full Patient Name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#00875A]"
                    />
                  </div>

                  {/* Date of Birth & Gender Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Date of Birth*
                      </label>
                      <input
                        type="date"
                        required
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#00875A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Gender*
                      </label>
                      <select
                        required
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#00875A] bg-white"
                      >
                        <option value="">Select Gender *</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Health Concerns */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Health Concerns*
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={concerns}
                      onChange={(e) => setConcerns(e.target.value)}
                      placeholder="Enter Health Concerns (e.g. Acute high fever, breathlessness, food poisoning, high blood pressure)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#00875A]"
                    />
                  </div>

                  {/* Medical History */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Past Medical History (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={history}
                      onChange={(e) => setHistory(e.target.value)}
                      placeholder="e.g. Known asthma on inhaler, diabetic, hypertensive"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#00875A]"
                    />
                  </div>

                  {step2Error && (
                    <p className="text-xs text-rose-600 font-medium">{step2Error}</p>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-grow py-3.5 rounded-xl bg-[#0F2F28] hover:bg-[#1A4D43] text-white font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                      <span>Continue to Address &amp; Dispatch</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════ */}
          {/* STEP 3: LOCATION / ADDRESS                          */}
          {/* ═══════════════════════════════════════════════════ */}
          {step === 3 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0F2F28]/10 shadow-sm animate-fadeIn">
              {/* Realistic Doctor Banner */}
              <div className="relative mb-6 rounded-2xl overflow-hidden border border-[#0F2F28]/10 shadow-sm max-w-lg mx-auto">
                <img
                  src="/images/kyno-banner-step3.png"
                  alt="Trusted by thousands - 30,000+ Happy Patients - Doctor at Home in 20 minutes"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Consultation Fee Reminder */}
              <div className="p-3.5 rounded-xl bg-[#E7EFEA] border border-[#00875A]/25 mb-6 text-center max-w-lg mx-auto">
                <span className="text-xs font-bold text-[#0F2F28]">
                  Consultation Fees: ₹1999 • All-inclusive (Detailed 30 min exam + vitals + emergency medicines)
                </span>
              </div>

              <div className="max-w-lg mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base sm:text-lg font-bold text-[#0F2F28]">
                    Add your address to send a doctor without delay!
                  </h2>
                </div>

                <form onSubmit={handleStep3Submit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Flat / House No / Tower*
                    </label>
                    <input
                      type="text"
                      required
                      value={houseNo}
                      onChange={(e) => setHouseNo(e.target.value)}
                      placeholder="e.g. Tower 3, Flat 1204"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#00875A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Apartment / Society / Building Name*
                    </label>
                    <input
                      type="text"
                      required
                      value={society}
                      onChange={(e) => setSociety(e.target.value)}
                      placeholder="e.g. The Magnolias / DLF Phase 5 / Ireo Grand Arch"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#00875A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Gurgaon Sector*
                      </label>
                      <select
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#00875A] bg-white font-medium"
                      >
                        {sectors.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Pincode
                      </label>
                      <input
                        type="text"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        placeholder="122018"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#00875A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                      placeholder="e.g. Near Huda City Centre / Opposite Artemis Hospital"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#00875A]"
                    />
                  </div>

                  {step3Error && (
                    <p className="text-xs text-rose-600 font-medium">{step3Error}</p>
                  )}

                  <div className="pt-3 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-3 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-grow py-3.5 rounded-xl bg-[#00875A] hover:bg-[#00704A] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                      <span>Confirm Address &amp; Dispatch Doctor</span>
                      <Navigation className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </form>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100 text-center">
                  <div>
                    <div className="text-base font-bold text-[#0F2F28]">30,000+</div>
                    <div className="text-[11px] text-gray-600">Happy Families</div>
                  </div>
                  <div className="border-l border-gray-100">
                    <div className="text-base font-bold text-[#0F2F28]">100+ Doctors</div>
                    <div className="text-[11px] text-gray-600">Trusted Care</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════ */}
          {/* STEP 4: DOCTOR ASSIGNED & LIVE ETA (20 MINS)        */}
          {/* ═══════════════════════════════════════════════════ */}
          {step === 4 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0F2F28]/10 shadow-lg animate-fadeIn max-w-lg mx-auto">
              
              {/* Emergency Beacon Banner */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 px-3.5 py-1 text-xs font-bold text-[#065F46] mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span>Doctor Dispatched • En Route in Gurgaon</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0F2F28] tracking-tight mb-2">
                Your Doctor is on the way!
              </h2>

              <p className="text-xs text-gray-600 mb-6">
                Case reference: <span className="font-mono font-bold text-[#0F2F28]">{refId}</span> • Sector 46 Hub
              </p>

              {/* Live ETA Card with Doctor Photo */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0F2F28] to-[#1A4D43] text-white shadow-md mb-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/15">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#34D399] font-bold">
                      Estimated Arrival
                    </div>
                    <div className="text-3xl font-bold font-mono text-white mt-0.5">
                      {etaMinutes} Mins
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-white/70">Consultation Fee</div>
                    <div className="text-lg font-bold text-[#FB923C]">₹1999</div>
                    <div className="text-[10px] text-white/60">Pay after visit</div>
                  </div>
                </div>

                {/* Assigned Doctor Profile Card */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#34D399] flex-shrink-0 bg-white">
                    <img
                      src="/images/doctor-aryan.png"
                      alt="Assigned Doctor - Kyno Health"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-base text-white">Dr. Aryan Verma, MBBS</span>
                      <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                    </div>
                    <div className="text-xs text-white/80 mt-0.5">
                      Senior Physician • Reg. HN-49210
                    </div>
                    <div className="text-[11px] text-[#34D399] flex items-center gap-1 mt-1 font-medium">
                      <Clock className="w-3 h-3" /> Dispatched from Sector 46 Hub
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Case Summary */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-gray-200 text-xs text-gray-700 space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Patient:</span>
                  <span className="font-bold text-gray-900">{patientName} ({relation})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Destination:</span>
                  <span className="font-semibold text-gray-900 text-right">{houseNo}, {society}, {sector}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Symptom Note:</span>
                  <span className="italic text-gray-800">{concerns}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Medical Kit Included:</span>
                  <span className="text-[#00875A] font-semibold">12-lead ECG, Vitals, Injections</span>
                </div>
              </div>

              {/* Action Buttons: Call Doctor + WhatsApp Confirmation */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/919953104104?text=${encodeURIComponent(
                    `*KYNO HEALTH DOCTOR DISPATCH CONFIRMATION*\n\n` +
                    `Reference ID: ${refId}\n` +
                    `Patient: ${patientName} (${relation})\n` +
                    `Location: ${houseNo}, ${society}, ${sector}\n` +
                    `Concern: ${concerns}\n` +
                    `Fee: ₹1999 (Pay after visit)\n\n` +
                    `Please share live driver GPS link on WhatsApp.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Track on WhatsApp &amp; Get GPS Link</span>
                </a>

                <a
                  href="tel:+919953104104"
                  className="w-full py-3 rounded-xl border-2 border-[#0F2F28] hover:bg-[#0F2F28] hover:text-white text-[#0F2F28] font-bold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FB923C]" />
                  <span>Call Emergency Dispatch (+91 99531 04104)</span>
                </a>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full text-center text-xs text-gray-500 hover:text-gray-800 pt-2"
                >
                  Book another home consultation
                </button>
              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
