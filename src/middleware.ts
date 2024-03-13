import type { NextConfig } from "next";
import { backLogger } from "@/helpers/backLogger";

const nextConfig: NextConfig = {
  webpack: (config, options) => {
    config.middleware.use(backLogger);
    return config;
  },
};

export default nextConfig;
