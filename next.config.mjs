/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async rewrites() {
        return [
            {
                "source": "/api/oembed",
                "destination": "/api/oembed"
            },
            {
                "source": "/e/rich/:match*",
                "destination": "/e/rich/:match*"
            }
        ]
    },
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
                source: "/e/rich/:path*",
                headers: [
                    {
                        key: "Link",
                        value: `<https://oembed-sample.vercel.app/api/oembed?url=https%3A%2F%2Foembed-sample.vercel.app%2Fe%2Frich%2F:path*&format=json>; rel=\"alternate\"; type=\"application/json+oembed\"; title=\"oEmbed Sample\"`,
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
