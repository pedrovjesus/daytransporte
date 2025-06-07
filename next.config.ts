import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";
const repo = "daytransporte"; // ⬅️ altere para o nome real do seu repositório

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  trailingSlash: true,
};

export default nextConfig;
