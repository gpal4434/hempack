import withImages from "next-images";

const nextConfig = {
    reactStrictMode: true,
    images: {
        disableStaticImages: true,
    },
};

export default withImages(nextConfig);
