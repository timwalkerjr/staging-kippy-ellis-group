import { SITE } from './site';

export type SchemaNode = Record<string, any>;
export const absoluteUrl = (path: string) => new URL(path, SITE.url).toString();
export const businessId = absoluteUrl('/#business');
export const websiteId = absoluteUrl('/#website');
export const SEO = {
  home: { title: 'West Michigan Real Estate | Kippy Ellis Group', description: 'Buy or sell a home in Grand Rapids, Holland, and the West Michigan Lakeshore with Kippy Ellis Group at Five Star Real Estate. Connect with our local team.' },
  team: { title: 'Meet Our Realtors | Kippy Ellis Group | West Michigan', description: 'Meet Kippy Ellis, Erin Forestier, and Valynn Trent. Read their bios and contact our Five Star Real Estate team for help buying or selling in West Michigan.' },
  agents: { title: 'Our Brokerage & Agents | Kippy Ellis Group', description: 'Explore the Kippy Ellis Group brokerage team, real estate specialties, and client service approach across Grand Rapids, Holland, and the West Michigan Lakeshore.' },
  testimonials: { title: 'Client Testimonials | Kippy Ellis Group | West Michigan', description: 'Read client experiences with Kippy Ellis Group, from first-time home purchases to selling, relocation, and lakeshore properties across West Michigan.' },
};

export function pageGraph(path: string, meta: { title: string; description: string }, type: string | string[] = 'WebPage', extra: SchemaNode[] = [], pageProperties: SchemaNode = {}) {
  const url = absoluteUrl(path);
  const pageId = url + '#webpage';
  const breadcrumbs = path !== '/' ? {
    '@type': 'BreadcrumbList', '@id': url + '#breadcrumbs',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: meta.title.split(' | ')[0], item: url },
    ],
  } : null;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent', '@id': businessId,
        name: SITE.name, alternateName: 'Kippy Ellis Group - Five Star Real Estate',
        url: absoluteUrl('/'), description: SITE.description,
        telephone: '+16164370205', email: 'kippy@fivestar.com',
        logo: { '@type': 'ImageObject', '@id': absoluteUrl('/#logo'), url: SITE.image, contentUrl: SITE.image, caption: SITE.name },
        image: SITE.image, sameAs: Object.values(SITE.socials),
        areaServed: ['Grand Rapids', 'Holland', 'Grand Haven', 'Saugatuck', 'Spring Lake', 'Ada', 'Cascade', 'Rockford', 'Muskegon'].map(name => ({ '@type': 'Place', name: `${name}, Michigan` })).concat([{ '@type': 'Place', name: 'West Michigan Lakeshore' }]),
        contactPoint: { '@type': 'ContactPoint', contactType: 'Real estate inquiries', telephone: '+16164370205', email: 'kippy@fivestar.com', url: absoluteUrl('/#contact') },
      },
      { '@type': 'WebSite', '@id': websiteId, url: absoluteUrl('/'), name: SITE.name, description: SITE.description, inLanguage: 'en-US', publisher: { '@id': businessId } },
      { '@type': type, '@id': pageId, url, name: meta.title, description: meta.description, inLanguage: 'en-US', isPartOf: { '@id': websiteId }, about: { '@id': businessId }, publisher: { '@id': businessId }, ...(breadcrumbs ? { breadcrumb: { '@id': breadcrumbs['@id'] } } : {}), ...pageProperties },
      ...(breadcrumbs ? [breadcrumbs] : []), ...extra,
    ],
  };
}

export function personSchema(data: SchemaNode, id: string, url: string): SchemaNode {
  return { '@type': 'Person', '@id': id, name: data.name, jobTitle: data.role, description: data.bio, url,
    ...(data.image || data.photo ? { image: data.image || data.photo } : {}),
    ...(data.phone ? { telephone: data.phone } : {}), ...(data.email ? { email: data.email } : {}),
    ...(data.specialties?.length ? { knowsAbout: data.specialties } : {}), worksFor: { '@id': businessId } };
}
