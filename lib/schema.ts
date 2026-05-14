export function getDentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
    name: "Especialidades Dentales Terranova S.C.",
    description:
      "Clínica dental de especialidades en Guadalajara, Jalisco. Ortodoncia, Endodoncia, Implantología, Estética Dental y más.",
    url: "https://terranovadental.com",
    telephone: "+52-33-1234-5678",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Terranova 123",
      addressLocality: "Guadalajara",
      addressRegion: "Jalisco",
      postalCode: "44660",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.6597,
      longitude: -103.3496,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "62",
      bestRating: "5",
    },
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Cash, Credit Card",
    sameAs: ["https://www.facebook.com/edterranovaGDL"],
  };
}

export interface FAQItem {
  pregunta: string;
  respuesta: string;
}

export function getFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.respuesta,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
