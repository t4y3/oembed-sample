/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*", // Set your origin
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Referer",
                    },
                ],
            },
            {
                source: "/:path*",
                headers: [
                    // {
                    //     key: "X-Frame-Options",
                    //     value: "SAMEORIGIN",
                    // },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Referer",
                    },
                ],
            },

        ];
    },
};

export default nextConfig;
