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
      role: "Medical Director & Senior Consultant",
      exp: "16+ Yrs Exp • Ex-AIIMS / Medanta",
      desc: "Specialist in internal medicine, geriatric multi-morbidity, and emergency home intervention protocols.",
    },
    {
      name: "Aditya Gupta",
      role: "Founder & Managing Director",
      exp: "Healthcare Innovator",
      desc: "Pioneering technology-driven 20-minute primary care and hospital-grade home health delivery across India.",
    },
    {
      name: "Sr. Ananya Sen, B.Sc Nursing",
      role: "Head of Nursing & GDA Training",
      exp: "12+ Yrs Critical Care Nursing",
      desc: "Directs background verification, hospital ergonomics, and patient hygiene certification for all caretakers.",
    },
    {
      name: "Dr. Rohit Verma, MPT",
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
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FB923C] text-[11px] font-semibold uppercase tracking-wider mb-2 text-white">
                  <Stethoscope className="w-3 h-3" />
                  Medical Director
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
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#00875A] mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Physician-Led Home Healthcare</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-light leading-[1.18] text-[#132D2E]">
              Supervised by top hospital doctors, delivered at your doorstep.
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
                  <div className="h-10 w-10 rounded-full bg-[#E7EFEA] flex items-center justify-center text-[#00875A] mb-4 font-semibold text-sm">
                    {leader.name.split(" ")[1]?.[0] || "D"}
                  </div>
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
        </div>
      </div>
    </section>
  );
}
