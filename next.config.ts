const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [], // 외부 이미지를 사용할 경우 도메인 추가
        unoptimized: true,
    },
    output: "export",
    basePath: isProd ? "/hempack" : "",
    trailingSlash: true,
    distDir: "out",
};

module.exports = nextConfig;
