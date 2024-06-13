export async function generateMetadata(
    {params, searchParams},
    parent
) {
    const url = encodeURIComponent(`https://oembed-sample.vercel.app/news/${params.newsId}&format=json`)
    return {
        alternates: {
            types: {
                "application/json+oembed": `https://oembed-sample.vercel.app/api/oembed?url=${url}`,
                title: "Embed Test"
            }
        }
    }
}

export default function Page() {
    return (
        <main>
            <h1>News Page</h1>
        </main>
    );
}
