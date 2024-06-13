export async function generateMetadata(
    {params, searchParams},
    parent
) {
    return {
        alternates: {
            types: {
                "'application/json+oembed'": `/api/oembed?newsId=${params.newsId}`
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
