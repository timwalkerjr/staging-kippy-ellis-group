export const SITE = {
  name: 'Kippy Ellis Group',
  title: 'Kippy Ellis Group | Five Star Real Estate',
  description: 'Your Home, My Priority. Kippy Ellis Group is a dedicated West Michigan real estate team with Five Star Real Estate, serving Grand Rapids, Holland, the Lakeshore, and surrounding areas.',
  lang: 'en',
  url: 'https://kippy-ellis-v2.newsitebuild.dev',
  image: 'https://pagesmith-cdn.com/ab210347/images/svg-render-640.webp',
  socials: {
    facebook: 'https://www.facebook.com/kippy.miles.7/',
    instagram: 'https://www.instagram.com/kippy.ellis/',
  },
} as const;

export type SiteConfig = typeof SITE;
