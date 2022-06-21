const withPWA = require("next-pwa");

module.exports = withPWA({
  swcFileReading: false,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    register: true,
    sw: "sw.js",
    dest: "public",
  },

  i18n: {
    locales: ["en", "es", "zh", "fr"],
    localeDetection: false,
    defaultLocale: "en",
  },
  optimizeFonts: false,
});
