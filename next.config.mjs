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
                ],
            },
            {
                source: "/:path*",
                headers: [
                    {
                        key: 'Referrer-Policy',
                        value: 'unsafe-url'
                    }

                ],
            },

        ];
    },
};

export default nextConfig;
