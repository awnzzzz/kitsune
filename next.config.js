const withPWA = require("@ducanh2912/next-pwa").default;

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  images: {
    domains: ["i.waifu.pics"],
  },
});
