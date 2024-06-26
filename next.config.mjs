/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    poweredByHeader: false,
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
        const cspHeader = `
    default-src 'self' http://* https://* data: 'unsafe-inline';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' http://* https://*;
    img-src 'self' 'unsafe-eval' 'unsafe-inline' http://* https://* data:;
    connect-src 'self' http://* https://*;
    frame-src 'self' http://* https://*;
    frame-ancestors 'self' http://* https://* http://localhost:4090;
`
        // Replace newline characters and spaces
        const contentSecurityPolicyHeaderValue = cspHeader
            .replace(/\s{2,}/g, ' ')
            .trim()

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
                        value: "GET, OPTIONS",
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
                        value: `<https://oembed-sample.vercel.app/api/oembed?url=https%3A%2F%2Foembed-sample.vercel.app%2Fe%2Frich%2F:path*&amp;format=json>; rel=\"alternate\"; type=\"application/json+oembed\"; title=\"oEmbed Sample\"`,
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
                        key: "Accept-Ranges",
                        value: "bytes",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Referer",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "unsafe-url",
                    },
                    {
                        key: "Content-Security-Policy",
                        value: contentSecurityPolicyHeaderValue
                    }
                ],
            },

        ];
    },
};

export default nextConfig;
