// next-sitemap.config.js
module.exports = {
  siteUrl: "https://www.sunwize.co.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async () => [
    { loc: "/solar-panel-price-lucknow", priority: 1.0, changefreq: "weekly" },
    { loc: "/solar-subsidy-uttar-pradesh", priority: 0.9, changefreq: "weekly" },
    { loc: "/solar-panel-price", priority: 0.9, changefreq: "weekly" },
    { loc: "/solar-calculator", priority: 0.8, changefreq: "monthly" },
    { loc: "/services/house", priority: 0.8, changefreq: "monthly" },
    { loc: "/services/commercial", priority: 0.8, changefreq: "monthly" },
    { loc: "/services/housing_societies", priority: 0.8, changefreq: "monthly" },
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
