"use client";

import { Check, ShieldCheck, Award, Stethoscope, PhoneCall } from "lucide-react";

export default function Clinicians() {
  const credentials = [
    "MBBS, MD (Internal Medicine) with 16+ years experience in acute and geriatric home care",
    "Ex-Senior Resident at AIIMS New Delhi and Consultant at Medanta The Medicity, Gurgaon",
    "Oversees clinical protocols and medical oversight for all Kyno Health caretakers and nurses",
    "Directs the 20-minute emergency doctor-at-home rapid response network across Gurgaon",
  ];

  const medicalLeaders = [
    {
      name: "Dr. K. S. Sharma, MD",
      image: "/images/doctor-kyno.jpg",
      role: "Medical Director & Senior Consultant",
      exp: "16+ Yrs Exp • Ex-AIIMS / Medanta",
      desc: "Specialist in internal medicine, geriatric multi-morbidity, and emergency home intervention protocols across Gurugram.",
    },
    {
      name: "Dr. Aryan Verma, MBBS",
      image: "/images/doctor-aryan.png",
      role: "Lead Emergency Physician",
      exp: "8+ Yrs Acute Medicine",
      desc: "Heads the 20-minute rapid response home doctor fleet with bedside ECG, vitals monitoring, and emergency injectables.",
    },
    {
      name: "Sr. Ananya Sen, B.Sc Nursing",
      image: null,
      role: "Head of Nursing & GDA Training",
      exp: "12+ Yrs Critical Care Nursing",
      desc: "Directs Haryana Police background checks, hospital ergonomics, and patient hygiene certification for all caretakers.",
    },
    {
      name: "Dr. Rohit Verma, MPT",
      image: null,
      role: "Lead Consultant Physiotherapist",
      exp: "10+ Yrs Neuro & Ortho Rehab",
      desc: "Leads post-knee/hip replacement ambulation and stroke paralysis rehabilitation programs at home.",
    },
  ];

  return (
    <section className="bg-[#E7EFEA] py-20 lg:py-28 text-[#132D2E] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Doctor Photo */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl bg-[#D0DFD6] shadow-xl aspect-[4/5] max-w-md mx-auto border-2 border-white/60">
              <img
                src="/images/doctor-kyno.jpg"
                alt="Dr. K. S. Sharma, MD – Medical Director at Kyno Health Gurgaon"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B231E]/95 via-[#0B231E]/60 to-transparent p-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FB923C] text-[11px] font-medium mb-2 text-white">
                  <Stethoscope className="w-3 h-3" />
                  <span>Medical Director</span>
                </div>
                <div className="font-serif text-xl sm:text-2xl font-normal">
                  Dr. K. S. Sharma, MD, MBBS
                </div>
                <div className="text-xs text-[#D8EFE8] mt-1 font-normal flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#34D399]" />
                  <span>Ex-AIIMS New Delhi • Medanta The Medicity, Gurgaon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#00875A] mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Physician-led home healthcare</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-light leading-[1.18] text-[#132D2E]">
              Supervised by top hospital doctors, delivered at your doorstep
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#132D2E]/85 leading-relaxed font-normal">
              At Kyno Health, our home caretakers don&apos;t work in isolation. Every patient plan is reviewed and backstopped by senior clinicians with deep experience from India&apos;s leading institutions like AIIMS and Medanta.
            </p>

            <ul className="mt-8 space-y-3.5">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-[#132D2E]">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00875A] text-white mt-0.5">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/book-caretaker"
                className="inline-flex items-center justify-center rounded-full bg-[#132D2E] px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#1B3340] transition-colors"
              >
                Consult With Our Care Team
              </a>
              <a
                href="tel:+919953104104"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#132D2E] hover:text-[#00875A] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#FB923C]" />
                <span>Call +91 99531 04104</span>
              </a>
            </div>
          </div>
        </div>

        {/* Clinical Leadership & Department Heads Grid */}
        <div className="mt-20 pt-16 border-t border-[#132D2E]/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#132D2E]">
              Our Clinical Leadership Team
            </h3>
            <p className="mt-2 text-sm text-[#132D2E]/75">
              Experienced medical practitioners ensuring hospital-level rigor in every home visit across Gurugram.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicalLeaders.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#132D2E]/10 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {leader.image ? (
                    <div className="h-14 w-14 rounded-2xl overflow-hidden mb-4 border border-[#00875A]/20 shadow-sm">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="h-12 w-12 rounded-2xl bg-[#E7EFEA] flex items-center justify-center text-[#00875A] mb-4 font-semibold text-sm">
                      {leader.name.split(" ")[1]?.[0] || "D"}
                    </div>
                  )}
                  <h4 className="font-serif text-lg font-normal text-[#132D2E]">
                    {leader.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#FB923C] mt-1">
                    {leader.role}
                  </p>
                  <p className="text-[11px] text-[#132D2E]/60 font-mono mt-0.5">
                    {leader.exp}
                  </p>
                  <p className="text-xs text-[#132D2E]/75 mt-3 leading-relaxed">
                    {leader.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Doctor Dispatch Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0F2F28] to-[#1A4D43] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-[#34D399] hidden sm:block">
                <img
                  src="/images/doctor-aryan.png"
                  alt="Doctor At Home 20 Mins"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-[#34D399] text-xs font-medium mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>20-Minute rapid response fleet</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-serif font-light text-white">
                  Need a doctor at home in Gurgaon right now?
                </h4>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  Full 30-min consultation, portable 12-lead ECG, vitals monitor &amp; emergency injectables. All-inclusive fee ₹1999.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
              <a
                href="/book-doctor"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-[#00875A] hover:bg-[#00704A] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 whitespace-nowrap"
              >
                Book Doctor in 20 Mins (₹1999)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
