export const runtime = 'edge';

export async function generateMetadata(
    {params, searchParams},
    parent
) {
    const url = encodeURIComponent(`https://oembed-sample.pages.dev/__photo/${params.id}`)
    return {
        alternates: {
            types: {
                "application/json+oembed": `https://oembed-sample.pages.dev/api/oembed?url=${url}&format=json`
            }
        }
    }
}

export default function Page() {
    return (
        <main>
            <h1>Photoのembedを確認</h1>
        </main>
    );
}
