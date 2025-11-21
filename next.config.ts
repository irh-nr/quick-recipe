import { defaultFilter } from "cmdk";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['http://192.168.42.138:3000'],
};

export default nextConfig;
