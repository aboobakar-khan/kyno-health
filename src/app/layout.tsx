import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyno Health — Caretaker at Home & Hospital-Grade Healthcare in Gurgaon",
  description:
    "Certified 12-hour and 24-hour live-in caretakers, elderly care, bedridden patient assistance, and 20-minute emergency doctor visits at home in Gurgaon & Delhi NCR.",
  keywords: [
    "caretaker at home gurgaon",
    "elder care gurgaon",
    "patient caretaker at home gurgaon",
    "24 hour live-in caretaker gurgaon",
    "doctor at home gurgaon",
    "kyno health",
    "nursing at home gurgaon",
    "post surgery caretaker gurgaon",
    "bedridden patient care gurgaon",
    "geriatric home healthcare gurugram",
  ],
  authors: [{ name: "Kyno Health" }],
  creator: "Kyno Health",
  publisher: "Kyno Health",
  openGraph: {
    title: "Kyno Health — Caretaker at Home & Healthcare in Gurgaon",
    description:
      "NABH-aligned hospital-grade home care in Gurgaon. 100% police-verified GDAs, daily doctor supervision, and 20-minute emergency physician visits.",
    url: "https://www.kynohealth.com/gurgaon/caretaker-at-home",
    siteName: "Kyno Health",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.kynohealth.com/gurgaon/caretaker-at-home",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "MedicalBusiness"],
    name: "Kyno Health - Caretaker & Healthcare at Home Gurgaon",
    alternateName: "Kyno Health Gurgaon",
    url: "https://www.kynohealth.com/gurgaon/caretaker-at-home",
    logo: "https://www.kynohealth.com/logo.png",
    telephone: "+91-9953104104",
    email: "support@kynohealth.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1094, HUDA Colony, Sector 46",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122018",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4357,
      longitude: 77.0573,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    medicalSpecialty: [
      "Geriatric Medicine",
      "Home Health Care",
      "Emergency Medicine",
      "Physical Therapy",
      "Palliative Care",
    ],
    priceRange: "₹₹",
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "12-Hour Caretaker Shift at Home",
        description: "Assistance with personal hygiene, bathing, feeding, medication scheduling, and vitals monitoring for seniors and recovering patients.",
      },
      {
        "@type": "MedicalProcedure",
        name: "24-Hour Live-In Patient Caretaker",
        description: "Round-the-clock bedside assistance for bedridden, post-operative, and dementia patients with continuous clinical supervision.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Doctor Visit at Home in 20 Minutes",
        description: "On-demand emergency and primary care physician visits across Gurgaon equipped with portable ECG and diagnostic vitals.",
      },
      {
        "@type": "MedicalProcedure",
        name: "ICU & Nursing Care at Home",
        description: "GNM and B.Sc certified nursing for IV drips, tracheostomy care, catheterization, and post-discharge critical monitoring.",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
