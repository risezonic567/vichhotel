import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { conferenceData, ourHotelsData, weddingsData } from '../data/hospitalityData';
import { siteConfig } from '../data/siteConfig';

const ROUTE_META = {
  '/': ['Vicoh Hotel | Vibe Collective Hospitality', 'Explore Vicoh Hotel stays, events and hospitality experiences.'],
  '/about-us': ['About Us | Vicoh Hotel', 'Learn about Vicoh Hotel and Vibe Collective Hospitality.'],
  '/our-hotels': ['Our Hotels | Vicoh Hotel', 'Explore the properties listed by Vicoh Hotel.'],
  '/conferences': [
    'Conferences & Corporate Events | VICOH Hotel & Resorts',
    'Plan conferences, corporate offsites, and team events with VICOH in Jim Corbett, Manali, Goa, Jaipur, Rishikesh, Bhimtal, or Dehradun. Call us to discuss your event.',
  ],
  '/weddings': ['Weddings | Vicoh Hotel', 'Explore wedding destinations listed by Vicoh Hotel.'],
  '/offers': ['Offers | Vicoh Hotel', 'View current Vicoh Hotel offers.'],
  '/contact': ['Contact | Vicoh Hotel', 'Contact Vicoh Hotel with your enquiry.'],
  '/dining': ['Dining | Vicoh Hotel', 'Explore dining experiences from Vicoh Hotel.'],
  '/terms-conditions': ['Terms of Service | Vicoh Hotel', 'Read the Vicoh Hotel terms of service.'],
  '/privacy-policy': ['Privacy Policy | Vicoh Hotel', 'Read the Vicoh Hotel privacy policy.'],
};

function ensureMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const hotelSlug = pathname.match(/^\/our-hotels\/([^/]+)$/)?.[1];
    const conferenceSlug = pathname.match(/^\/conferences\/([^/]+)$/)?.[1];
    const weddingSlug = pathname.match(/^\/weddings\/([^/]+)$/)?.[1];
    const hotel = ourHotelsData.find((item) => item.slug === hotelSlug);
    const conference = conferenceData.find((item) => item.slug === conferenceSlug);
    const wedding = weddingsData.find((item) => item.slug === weddingSlug);
    const meta = hotel
      ? [`${hotel.name} | Vicoh Hotel`, hotel.shortDescription]
      : conference
        ? [`${conference.name} | Vicoh Hotel`, conference.shortDescription]
        : wedding
          ? [`${wedding.title} | Vicoh Hotel`, wedding.shortDesc]
          : ROUTE_META[pathname] || ['Page Not Found | Vicoh Hotel', 'The requested Vicoh Hotel page could not be found.'];
    const canonical = `${siteConfig.domain}${pathname}`;

    document.title = meta[0];
    ensureMeta('name', 'description', meta[1]);
    ensureMeta('property', 'og:title', meta[0]);
    ensureMeta('property', 'og:description', meta[1]);
    ensureMeta('property', 'og:type', 'website');
    ensureMeta('property', 'og:url', canonical);
    ensureMeta('property', 'og:image', ourHotelsData[0].heroImage);
    ensureMeta('name', 'twitter:card', 'summary_large_image');
    ensureMeta('name', 'twitter:title', meta[0]);
    ensureMeta('name', 'twitter:description', meta[1]);
    ensureMeta('name', 'twitter:image', ourHotelsData[0].heroImage);

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    let jsonLd = document.head.querySelector('#hotel-jsonld');
    if (pathname === '/') {
      const featured = ourHotelsData.find((item) => item.slug === 'sparklyn-view-manali');
      // TODO: client verify all property identity and contact fields before publishing this schema.
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Hotel',
        name: featured.name,
        description: featured.shortDescription,
        address: { '@type': 'PostalAddress', addressLocality: featured.location },
        telephone: featured.phone,
        email: featured.email,
        image: featured.heroImage,
        url: siteConfig.domain,
      };
      if (!jsonLd) {
        jsonLd = document.createElement('script');
        jsonLd.id = 'hotel-jsonld';
        jsonLd.type = 'application/ld+json';
        document.head.appendChild(jsonLd);
      }
      jsonLd.textContent = JSON.stringify(schema);
    } else {
      jsonLd?.remove();
    }
  }, [pathname]);

  return null;
}
