/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "http://locahost:3000",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
