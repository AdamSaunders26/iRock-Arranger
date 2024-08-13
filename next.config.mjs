/** @type {import('next').NextConfig} */

import withSerwistInit from "@serwist/next";

const nextConfig = {};
const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
});
// withPWA = require("@ducanh2912/next-pwa").default({ dest: "public" });
// module.exports = withPWA({ nextConfig });
export default withSerwist({ nextConfig });
