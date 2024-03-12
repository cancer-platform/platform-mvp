/** @type {import('next').NextConfig} */

import { loggerMiddleware } from "./middleware/logger";

/**
 * Logger middleware
 *
 *
 */

module.exports = {
  webpack: (config, options) => {
    config.middleware.use(loggerMiddleware);
    return config;
  },
};
/** End logger middleware */

const nextConfig = {};

export default nextConfig;
