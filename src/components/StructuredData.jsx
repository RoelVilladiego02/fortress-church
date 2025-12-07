import { useEffect } from 'react';
import churchInfo from '../data/church-info.json';

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Church',
      name: churchInfo.name,
      description: churchInfo.mission,
      address: {
        '@type': 'PostalAddress',
        streetAddress: churchInfo.address.street,
        addressLocality: churchInfo.address.city,
        addressRegion: churchInfo.address.state,
        postalCode: churchInfo.address.zip,
        addressCountry: churchInfo.address.country
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: churchInfo.contact.phone,
        email: churchInfo.contact.email,
        contactType: 'General Inquiry'
      },
      sameAs: [
        churchInfo.social.facebook,
        churchInfo.social.instagram
      ].filter(Boolean),
      url: window.location.origin
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

