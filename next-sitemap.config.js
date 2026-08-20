// next-sitemap.config.js
//
// NOTE: /blog-details/[slug] is a dynamic App Router route, so next-sitemap
// can't discover those URLs on its own. Keep BLOG_SLUGS below in sync with
// the `slug` values in src/components/Blog/blogData.tsx whenever a post is
// added or removed - otherwise new posts won't be submitted to Google.
const BLOG_SLUGS = [
  "solar-panel-lifespan-india",
  "solar-for-schools-colleges-up",
  "solar-subsidy-apply-uppcl-2026",
  "solar-savings-lucknow",
  "commercial-solar-rooftop-up",
  "solar-emi-financing-india",
  "solar-inverter-buying-guide-india",
  "pm-kusum-solar-pump-up",
  "solar-performance-winter-north-india",
  "solar-for-apartments-india",
  "net-metering-guide-uppcl",
  "solar-battery-storage-india-2026",
  "solar-for-small-businesses-up",
  "solar-panel-maintenance-india",
  "best-solar-panels-india-2026",
  "pm-surya-ghar-yojana-2026",
  "solar-panel-price-lucknow-guide",
  "solar-for-agriculture-indian-farmers",
  "solar-water-heaters-vs-electric-geysers-2026",
  "solar-power-plant-savings-india",
  "solar-subsidy-schemes-india-2026",
  "on-grid-vs-off-grid-solar-india",
];

module.exports = {
  siteUrl: "https://www.sunwize.co.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  // Orphaned template demo pages left over from the starter theme - not
  // linked from any nav/footer, noindexed, and shouldn't be submitted.
  exclude: ["/signin", "/signup", "/error", "/blog-sidebar"],
  additionalPaths: async () => [
    { loc: "/solar-panel-price-lucknow", priority: 1.0, changefreq: "weekly" },
    { loc: "/solar-subsidy-uttar-pradesh", priority: 0.9, changefreq: "weekly" },
    { loc: "/solar-panel-price", priority: 0.9, changefreq: "weekly" },
    { loc: "/solar-calculator", priority: 0.8, changefreq: "monthly" },
    { loc: "/services/house", priority: 0.8, changefreq: "monthly" },
    { loc: "/services/commercial", priority: 0.8, changefreq: "monthly" },
    { loc: "/services/housing_societies", priority: 0.8, changefreq: "monthly" },
    ...BLOG_SLUGS.map((slug) => ({
      loc: `/blog-details/${slug}`,
      priority: 0.7,
      changefreq: "monthly",
    })),
  ],
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/solar-panel-price-lucknow": 1.0,
      "/solar-subsidy-uttar-pradesh": 0.9,
      "/solar-panel-price": 0.9,
      "/contact": 0.85,
      "/solar-calculator": 0.8,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorityMap[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
