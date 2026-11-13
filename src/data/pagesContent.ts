export interface PageData {
  badge: string;
  title: string;
  subtitle: string;
  price?: string;
  highlights: string[];
  protocols: { title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
  coverageText?: string;
  category: "caretaker" | "service" | "condition" | "location" | "about" | "plans" | "legal";
}

export const pagesContent: Record<string, PageData> = {
  // ── Caretaker Services ──
  "caretaker-at-home": {
    category: "caretaker",
    badge: "12H & 24H CARETAKERS • GURGAON",
    title: "Certified Patient Caretakers at Home in Gurgaon",
    subtitle: "Trained General Duty Assistants (GDAs) for elderly individuals, bedridden patients, and post-surgery rehabilitation across Gurugram.",
    price: "From ₹1,200/day or ₹28,000/month",
    highlights: [
      "100% Police & Identity verified GDAs",
      "Assistance with bathing, sponge baths, diaper changing & hygiene",
      "Medication reminders, feeding & fluid logging",
      "Bed sore prevention (Q2H turning and positioning)",
      "Daily vital signs tracking with doctor oversight",
      "Rapid 4-hour replacement guarantee if caretaker is on leave",
    ],
    protocols: [
      { title: "Daily Living Activities (ADLs)", desc: "Assistance with personal grooming, oral hygiene, sponge bathing, and dignified bed or wheelchair transfers." },
      { title: "Clinical Hygiene Standards", desc: "Hospital-grade hand hygiene, diaper change sanitization, and sterile linen maintenance." },
      { title: "Emergency Escalation", desc: "Direct link to Kyno Medical Command Center with on-call emergency doctor dispatch in 20 minutes." },
    ],
    faqs: [
      { q: "What duties are included in caretaker service?", a: "Caretakers assist with all Activities of Daily Living (ADLs) such as personal hygiene, diaper changes, sponge baths, feeding, mobility transfers, and medication reminders. Clinical procedures like IV drips are handled by our visiting nurses." },
      { q: "How quickly can a caretaker be assigned in Gurgaon?", a: "We typically match and deploy a verified caretaker within 4 to 12 hours of booking across all major Gurgaon sectors." },
    ],
  },

  "caretaker-at-home/elderly-care": {
    category: "caretaker",
    badge: "GERIATRIC CARE • GURGAON",
    title: "Compassionate Elderly Care at Home in Gurgaon",
    subtitle: "Dedicated, patient assistance for aging parents and senior citizens in Gurugram, promoting dignity, independence, and safe mobility.",
    price: "₹1,200/day (12h) • ₹1,800/day (24h)",
    highlights: [
      "Personalized companionship & cognitive stimulation",
      "Assisted walking and fall prevention support",
      "Bathing, sponge baths, grooming and dressing assistance",
      "Timely medication administration reminders",
      "Assisted feeding and dietary fluid monitoring",
      "Regular blood pressure, pulse, and blood sugar checks",
    ],
    protocols: [
      { title: "Fall Prevention Protocols", desc: "Continuous supervision during bathroom visits, bed-to-chair transfers, and gentle indoor walks." },
      { title: "Emotional & Mental Wellbeing", desc: "Respectful, empathetic companionship that combats loneliness and keeps seniors emotionally engaged." },
      { title: "Supervising Doctor Audits", desc: "Weekly review call by our medical team to assess general health, sleep patterns, and vitals." },
    ],
  },

  "caretaker-at-home/24-hour-live-in": {
    category: "caretaker",
    badge: "ROUND-THE-CLOCK CARE",
    title: "24-Hour Live-In Patient Caretaker in Gurgaon",
    subtitle: "A dedicated resident caretaker staying in your home, providing continuous 24/7 bedside assistance for bedridden, post-op, or elderly family members.",
    price: "₹1,800/day or ₹42,000/month",
    highlights: [
      "Resident full-time GDA at patient's bedside",
      "Night-time monitoring and reassurance for restless patients",
      "Continuous support for toileting, diapering, and repositioning",
      "Emergency doctor on-call with 20-minute arrival in Gurgaon",
      "Dedicated Care Coordinator managing shifts and replacements",
      "Zero agency fee or brokerage cuts",
    ],
    protocols: [
      { title: "24/7 Continuity of Care", desc: "Caretaker resides in the patient's home, ensuring assistance is immediately available even in the middle of the night." },
      { title: "Scheduled Rest & Replacement", desc: "Structured shift handover protocols ensuring the patient is never left unassisted." },
    ],
  },

  "caretaker-at-home/12-hour-shift": {
    category: "caretaker",
    badge: "FLEXIBLE DAY / NIGHT CARE",
    title: "12-Hour Shift Caretaker at Home in Gurgaon",
    subtitle: "Flexible 12-hour daytime (8 AM – 8 PM) or night-time (8 PM – 8 AM) caretaker support tailored to your family's daily routine.",
    price: "₹1,200/day or ₹28,000/month",
    highlights: [
      "Choice of 12-Hour Day Shift or 12-Hour Night Shift",
      "Day shift: feeding, bathing, mobility, and medication schedules",
      "Night shift: sleep supervision, night diapering, and vitals safety",
      "Police verified and identity authenticated GDA attendant",
      "Flexible weekly packages or long-term monthly arrangements",
    ],
    protocols: [
      { title: "Day Shift Routine", desc: "Morning sponge bath, breakfast feeding, medication schedule, assisted walks, and vitals logging." },
      { title: "Night Shift Routine", desc: "Evening routine, repositioning every 2 hours, hydration checks, and calm emergency response." },
    ],
  },

  "caretaker-at-home/post-surgery": {
    category: "caretaker",
    badge: "SURGICAL RECOVERY",
    title: "Post-Operative Recovery Caretaker at Home in Gurgaon",
    subtitle: "Hospital-grade recovery assistance following orthopedic surgeries (knee/hip replacement), cardiac procedures, or general surgery in Gurgaon.",
    price: "From ₹1,200/day",
    highlights: [
      "Incision and surgical wound hygiene monitoring",
      "Safe ambulation assistance with walker or wheelchair",
      "Pain management schedule and medication adherence",
      "Prevention of post-surgical stiffness and DVT risks",
      "Coordination with visiting physiotherapists and surgeons",
    ],
    protocols: [
      { title: "Mobility & Ergonomics", desc: "Careful assistance preventing strain on surgical sites during bed transfers and bathroom use." },
      { title: "Surgical Site Oversight", desc: "Daily monitoring for wound redness, swelling, or dressing leakage with immediate doctor escalation." },
    ],
  },

  "caretaker-at-home/bedridden-care": {
    category: "caretaker",
    badge: "INTENSIVE BEDSIDE CARE",
    title: "Bedridden & Paralysis Patient Care at Home",
    subtitle: "Specialized bedside care for immobile, comatose, or paralyzed patients, focusing on bed sore prevention, dignity, and hygiene in Gurgaon.",
    price: "From ₹1,400/day",
    highlights: [
      "Mandatory 2-hourly repositioning (Q2H) to prevent bed sores",
      "Bed sponge bathing, gentle hair washing & skin hydration",
      "Frequent diaper changes & peri-anal barrier cream care",
      "Catheter hygiene and bag drainage tracking",
      "Passive limb movement and joint stiffness relief",
    ],
    protocols: [
      { title: "Pressure Ulcer Prevention", desc: "Strict Q2H turning schedule with air-mattress monitoring and skin integrity checks twice daily." },
      { title: "Dignified Personal Care", desc: "Compassionate, gentle bathing and grooming for completely dependent patients." },
    ],
  },

  "caretaker-at-home/stroke-paralysis": {
    category: "caretaker",
    badge: "NEUROLOGICAL SUPPORT",
    title: "Stroke & Paralysis Caretaker at Home in Gurgaon",
    subtitle: "Experienced assistance for stroke survivors, hemiplegia, and neurological rehabilitation patients under medical supervision.",
    price: "From ₹1,500/day",
    highlights: [
      "Assistance with paralyzed limb positioning to prevent contractures",
      "Safe transfer techniques from bed to wheelchair",
      "Swallowing precautions during semi-solid feeding",
      "Daily physiotherapy exercise assistance as advised by doctors",
      "Emotional reassurance and speech stimulation exercises",
    ],
    protocols: [
      { title: "Aspiration Prevention", desc: "Ensuring 90-degree upright seating during meals and maintaining head elevation for 30 minutes post-feeding." },
      { title: "Rehabilitation Continuity", desc: "Assisting physiotherapist-prescribed passive and active exercises twice daily." },
    ],
  },

  // ── Clinical Services ──
  "services": {
    category: "service",
    badge: "HOSPITAL AT HOME",
    title: "Hospital-Grade Clinical Services at Home in Gurgaon",
    subtitle: "From 20-minute doctor emergency visits and ICU-trained nurses to physiotherapy, doorstep blood tests, and medical equipment setup.",
    price: "Consultations from ₹499",
    highlights: [
      "Doctor at Home arrives within 20–30 minutes across Gurgaon",
      "GNM & B.Sc certified critical care nursing staff",
      "In-home physiotherapy for orthopedic and neurological recovery",
      "Doorstep blood collection, urine analysis, and 12-lead ECG",
      "Hospital ICU setup: BiPAP, oxygen concentrators, hospital beds",
    ],
    protocols: [
      { title: "Rapid Response Dispatch", desc: "Centrally coordinated from our Sector 46 hub with live fleet routing across Gurgaon." },
      { title: "Portable Medical Kits", desc: "Physicians and nurses carry calibrated diagnostic monitors, emergency injectables, and ECG devices." },
    ],
  },

  "services/doctor-at-home": {
    category: "service",
    badge: "20-MINUTE DISPATCH",
    title: "Doctor Visit at Home in Gurgaon (20 Mins Arrival)",
    subtitle: "Experienced general physicians and internal medicine specialists arrive at your doorstep across Gurugram equipped with diagnostic kits.",
    price: "₹999 / visit",
    highlights: [
      "Guaranteed 20–30 minute arrival across major Gurgaon sectors",
      "Comprehensive physical examination and vitals evaluation",
      "Portable 12-Lead ECG and digital blood sugar testing",
      "Instant digital prescription and medicine delivery coordination",
      "Ex-AIIMS, Fortis, and Medanta clinical network doctors",
      "Follow-up tele-consultation included",
    ],
    protocols: [
      { title: "Immediate Doorstep Evaluation", desc: "Thorough clinical assessment of respiratory, cardiovascular, and neurological symptoms in home comfort." },
      { title: "Emergency Hospital Escalation", desc: "If hospitalization is required, doctor coordinates direct admission with leading Gurgaon hospitals." },
    ],
  },

  "services/nurse-at-home": {
    category: "service",
    badge: "CRITICAL & GENERAL NURSING",
    title: "Certified Nurse at Home in Gurgaon",
    subtitle: "GNM and B.Sc certified registered nurses for IV infusions, injections, catheterization, wound dressing, and post-ICU critical monitoring.",
    price: "From ₹499 / procedure or ₹1,800 / 12h shift",
    highlights: [
      "IV fluid infusion and IV antibiotic administration",
      "Catheter insertion, removal, and bladder wash",
      "Ryle's tube insertion and enteral feeding supervision",
      "Surgical wound sterile dressing and suture removal",
      "Tracheostomy suctioning and care",
      "BiPAP, CPAP, and oxygen flow titrations",
    ],
    protocols: [
      { title: "Strict Aseptic Techniques", desc: "All clinical procedures adhere to hospital infection control protocols with sterile disposable kits." },
      { title: "Medication Verification", desc: "Double-check protocols for drug dosage, reconstitution, and infusion rates." },
    ],
  },

  "services/physiotherapy": {
    category: "service",
    badge: "HOME PHYSIOTHERAPY",
    title: "Physiotherapy at Home in Gurgaon",
    subtitle: "Doctor-prescribed physiotherapy sessions for joint pain, knee/hip surgery rehab, stroke recovery, and elderly mobility restoration.",
    price: "₹799 / session (Packages available)",
    highlights: [
      "Post-orthopedic surgery (TKR / THR) rehabilitation",
      "Stroke and neurological motor recovery therapies",
      "Chronic back pain, neck pain, and sciatica relief",
      "Geriatric balance training and gait re-education",
      "Electrotherapy (TENS, IFT, Ultrasound) delivered at home",
    ],
    protocols: [
      { title: "Personalized Functional Assessment", desc: "Initial baseline evaluation of joint range of motion, muscle power, and gait balance." },
      { title: "Measurable Milestones", desc: "Progressively structured recovery plan targeting pain reduction and independent walking." },
    ],
  },

  "services/lab-tests-at-home": {
    category: "service",
    badge: "DOORSTEP DIAGNOSTICS",
    title: "Blood Tests, ECG & Diagnostics at Home in Gurgaon",
    subtitle: "Certified phlebotomist arrives at your home within 30 minutes for blood sample collection and digital 12-lead ECG testing.",
    price: "From ₹299 (Sample collection free above ₹500)",
    highlights: [
      "Complete Blood Count (CBC), Lipid Profile, Liver & Kidney Function",
      "HbA1c, Thyroid Panel, Electrolytes, and Vitamin D/B12",
      "Portable 12-lead ECG with cardiologist-verified digital report in 1 hour",
      "NABL-accredited laboratory processing",
      "Same-day digital reports delivered on WhatsApp & Email",
    ],
    protocols: [
      { title: "Cold-Chain Sample Transport", desc: "Samples preserved in temperature-controlled kits for accurate biomarker assay." },
      { title: "Cardiologist Review", desc: "All home ECGs are reviewed and reported by senior cardiologists." },
    ],
  },

  "services/icu-setup": {
    category: "service",
    badge: "ICU AT HOME",
    title: "Hospital ICU Setup & Oxygen at Home in Gurgaon",
    subtitle: "Complete hospital-grade intensive care infrastructure at your home with ventilators, multipara monitors, oxygen, and 24/7 ICU nurses.",
    price: "Custom package based on clinical requirements",
    highlights: [
      "Motorized 3-function and 5-function ICU hospital beds",
      "High-flow oxygen concentrators (5L & 10L) and cylinder backup",
      "BiPAP, CPAP, and portable mechanical ventilators",
      "Multipara cardiac monitors tracking ECG, NIBP, and SpO2",
      "Suction machines, syringe infusion pumps, and air mattresses",
      "24/7 dedicated ICU nurse and daily intensivist tele-rounds",
    ],
    protocols: [
      { title: "Biomedical Sanitization", desc: "All equipment thoroughly disinfected and calibrated before installation in the patient's room." },
      { title: "Continuous Monitoring", desc: "Vital signs charted hourly with immediate doctor escalation on abnormal telemetry." },
    ],
  },

  // ── Plans & Pricing ──
  "plans": {
    category: "plans",
    badge: "TRANSPARENT PRICING",
    title: "Care Plans & Pricing in Gurgaon",
    subtitle: "Direct, transparent rate cards for home caretakers, doctors, nurses, and medical procedures with zero agency commissions.",
    highlights: [
      "12-Hour Caretaker Shift: ₹1,200/day or ₹28,000/month",
      "24-Hour Live-In Caretaker: ₹1,800/day or ₹42,000/month",
      "Doctor Home Visit (20 Mins): ₹999/visit",
      "Registered Nurse Home Visit: From ₹499/procedure",
      "Home Physiotherapy: ₹799/session",
      "No advance broker fees • 4-hour replacement guarantee",
    ],
    protocols: [
      { title: "Direct Daily & Monthly Billing", desc: "Pay only for active service days. Flexible 7-day trial packages available before monthly commitments." },
      { title: "Zero Agency Commissions", desc: "Unlike traditional maid bureaus, we charge transparent clinical fees with no hidden broker cut." },
    ],
  },

  // ── Clinical Conditions ──
  "conditions": {
    category: "condition",
    badge: "SPECIALTIES WE MANAGE",
    title: "Clinical Conditions & Specialized Care Programs",
    subtitle: "Hospital-grade home care pathways developed for senior health, chronic illnesses, and surgical rehabilitation in Gurgaon.",
    highlights: [
      "Geriatric and Senior Citizen Wellness",
      "Orthopedic Post-Operative Rehabilitation",
      "Dementia & Alzheimer's Supportive Care",
      "Palliative Oncology & Comfort Care",
      "Bed Sore Management (Stage 1 to 4)",
      "Catheter and Ryle's Tube Care",
    ],
    protocols: [
      { title: "Evidence-Based Protocols", desc: "Every patient care plan is formulated under guidelines aligned with AIIMS and Medanta clinical practices." },
    ],
  },

  "conditions/geriatric-care": {
    category: "condition",
    badge: "SENIOR HEALTH",
    title: "Geriatric & Senior Wellness Care at Home",
    subtitle: "Holistic home care designed for elderly citizens facing multiple chronic conditions, mobility restrictions, and frailty in Gurgaon.",
    highlights: [
      "Multi-morbidity management and medication coordination",
      "Fall risk assessment and bathroom safety support",
      "Gentle physical activity and joint mobility routines",
      "Dietary nutrition monitoring and hydration logging",
      "Regular doctor home visits and tele-supervision",
    ],
    protocols: [
      { title: "Preventative Geriatric Care", desc: "Focuses on preserving independence, preventing hospitalization, and maintaining emotional health." },
    ],
  },

  "conditions/dementia-alzheimers": {
    category: "condition",
    badge: "MEMORY & NEUROLOGY",
    title: "Dementia & Alzheimer's Care at Home in Gurgaon",
    subtitle: "Patience-centered care for seniors with memory loss, behavioral changes, sundowning symptoms, and cognitive impairment.",
    highlights: [
      "Structured daily routine reducing anxiety and confusion",
      "Gentle wander-prevention supervision and home safety",
      "Compassionate handling of agitation and mood fluctuations",
      "Memory stimulation games and familiar storytelling",
      "Support and respite for primary family caregivers",
    ],
    protocols: [
      { title: "De-escalation & Comfort", desc: "Caretakers trained in gentle redirection, sensory comfort, and non-confrontational communication." },
    ],
  },

  "conditions/palliative-care": {
    category: "condition",
    badge: "PALLIATIVE & ONCOLOGY",
    title: "Palliative & Oncology Supportive Care at Home",
    subtitle: "Dignified, compassionate end-of-life and cancer supportive care focused on comfort, pain management, and family guidance in Gurgaon.",
    highlights: [
      "Doctor-guided pain relief and medication administration",
      "Oxygen support and respiratory distress management",
      "Gentle bedside nursing and bed sore prevention",
      "Nutritional intake and hydration balance support",
      "Empathetic counseling and psychological family support",
    ],
    protocols: [
      { title: "Dignity & Comfort First", desc: "Dedicated to maximizing comfort and quality of life in familiar home surroundings surrounded by loved ones." },
    ],
  },

  "conditions/bed-sore-management": {
    category: "condition",
    badge: "WOUND & SKIN INTEGRITY",
    title: "Bed Sore Prevention & Wound Management at Home",
    subtitle: "Specialized clinical protocols for preventing and healing pressure ulcers in bedridden and spinal injury patients across Gurgaon.",
    highlights: [
      "Mandatory 2-hourly turning schedule (lateral and supine)",
      "Use of dynamic alternating pressure air mattresses",
      "Sterile wound debridement and medicated dressing by nurses",
      "Skin barrier cream application and moisture control",
      "High-protein nutritional guidance for tissue healing",
    ],
    protocols: [
      { title: "Wound Staging Protocol", desc: "Regular photographic tracking of wound size, granulation tissue, and exudate under physician supervision." },
    ],
  },

  // ── Gurgaon Hubs ──
  "gurgaon-locations": {
    category: "location",
    badge: "GURUGRAM COVERAGE",
    title: "Kyno Health Service Hubs Across Gurgaon",
    subtitle: "Local clinical dispatch hubs providing 20-minute doctor emergency visits and same-day caretaker deployment across all Gurugram sectors.",
    highlights: [
      "Sector 46 Central Command Hub (HUDA Colony)",
      "DLF Phase 1, 2, 3, 4, 5 & Cyber City Hub",
      "Golf Course Road & Golf Course Extension Hub",
      "Sohna Road, South City & Subhash Chowk Hub",
      "Sushant Lok 1 & 2 / Sector 56-57 Hub",
      "New Gurgaon (Sectors 81 to 95) & Dwarka Expressway",
    ],
    protocols: [
      { title: "Sector Response Times", desc: "Average emergency doctor arrival is 18–25 minutes. Caretakers deployed within 4 to 12 hours." },
    ],
  },

  "gurgaon/sector-46": {
    category: "location",
    badge: "HEADQUARTERS HUB",
    title: "Caretaker & Doctor at Home in Sector 46, Gurgaon",
    subtitle: "Immediate healthcare services from Kyno Health's central headquarters at 1094, HUDA Colony, Sector 46, Gurugram.",
    highlights: [
      "15-minute average doctor response time in Sector 46 & nearby sectors",
      "Full inventory of medical equipment: oxygen, BiPAP, hospital beds",
      "Emergency phlebotomy and doorstep ECG in 20 minutes",
      "Verified local caretakers available for immediate shift start",
    ],
    protocols: [
      { title: "Local Presence", desc: "Direct walk-in or phone coordination with our clinical directors at HUDA Colony, Sector 46." },
    ],
  },

  "gurgaon/dlf": {
    category: "location",
    badge: "DLF PHASE 1-5 & CYBER CITY",
    title: "Caretaker & Doctor at Home in DLF Gurgaon",
    subtitle: "Premium home healthcare and 24/7 caretakers serving DLF Phase 1, 2, 3, 4, 5, DLF Phase 5 luxury towers, and Cyber City.",
    highlights: [
      "Rapid dispatch across DLF Phase 1 through Phase 5",
      "Experienced live-in attendants for senior citizens",
      "Post-operative recovery for hospital discharges",
      "Doctor visits at home in 20 minutes",
    ],
    protocols: [
      { title: "Dedicated DLF Unit", desc: "Dedicated mobile care units positioned near DLF Phase 1 & 5 for rapid response." },
    ],
  },

  "gurgaon/golf-course-road": {
    category: "location",
    badge: "GOLF COURSE ROAD",
    title: "Home Healthcare & Caretakers on Golf Course Road",
    subtitle: "Specialized geriatric care, post-surgical recovery, and doctor visits serving Golf Course Road and Golf Course Extension.",
    highlights: [
      "Serving Aralias, Magnolias, Camellias, Palm Springs, and surrounding residences",
      "Hospital-grade ICU setup and 24-hour live-in caretakers",
      "Doctor on-call arriving within 20 minutes",
      "Certified physiotherapists for post-knee/hip replacement care",
    ],
    protocols: [
      { title: "High-Touch Care", desc: "Dedicated clinical coordinator assigned to every family with daily status reporting." },
    ],
  },

  // ── Company & Leadership ──
  "about": {
    category: "about",
    badge: "ABOUT KYNO HEALTH",
    title: "About Kyno Health — Re-architecting Primary & Home Healthcare",
    subtitle: "Founded by Aditya Gupta with medical leadership from senior AIIMS and Medanta clinicians, Kyno Health delivers hospital-grade healthcare to your home.",
    highlights: [
      "Operational since 2023 across Delhi NCR, Gurgaon, and Bengaluru",
      "Over 50,000+ bedside care hours delivered with 4.9/5 patient rating",
      "Tech-enabled logistics delivering doctors to doorsteps in 20 minutes",
      "100% background-verified and medically trained General Duty Assistants (GDAs)",
      "NABH-aligned clinical governance and infection control standards",
    ],
    protocols: [
      { title: "Our Mission", desc: "To eliminate the friction of hospital visits by delivering compassionate, doctor-supervised clinical care in home comfort." },
      { title: "Our Quality Charter", desc: "Zero compromise on patient safety, transparency in billing, and relentless verification of care personnel." },
    ],
  },

  "doctors": {
    category: "about",
    badge: "CLINICAL GOVERNANCE",
    title: "Our Doctors & Medical Leadership",
    subtitle: "Meet the senior physicians, nursing directors, and clinical advisors leading Kyno Health's home medical services across Gurgaon.",
    highlights: [
      "Dr. K. S. Sharma, MD, MBBS — Senior Medical Director (Ex-AIIMS / Medanta)",
      "Aditya Gupta — Founder & Managing Director",
      "Sr. Ananya Sen, B.Sc Nursing — Head of Nursing & Caretaker Training",
      "Dr. Rohit Verma, MPT — Lead Consultant Physiotherapist",
    ],
    protocols: [
      { title: "Physician Oversight", desc: "Every home caretaker functions under active clinical supervision with daily vitals auditing." },
    ],
  },

  "reviews": {
    category: "about",
    badge: "VERIFIED PATIENT STORIES",
    title: "Patient & Family Reviews in Gurgaon",
    subtitle: "Read authentic feedback from families in DLF Phase 5, Golf Course Road, Sushant Lok, and Sector 46 who healed at home with Kyno Health.",
    highlights: [
      "4.9 / 5 Average Rating across 1,200+ patient reviews",
      "96% of families report faster recovery and stress reduction",
      "Recommended by leading orthopedic surgeons and geriatricians in Delhi NCR",
    ],
    protocols: [
      { title: "Verified Feedback", desc: "All testimonials are verified through post-recovery follow-up calls by our patient care team." },
    ],
  },
};
