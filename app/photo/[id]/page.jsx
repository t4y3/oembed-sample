export async function generateMetadata(
    {params, searchParams},
    parent
) {
    const url = encodeURIComponent(`https://oembed-sample.vercel.app/photo/${params.id}`)
    return {
        alternates: {
            types: {
                "application/json+oembed": `https://oembed-sample.vercel.app/api/oembed_photo?url=${url}&format=json`,
                title: "Embed Test"
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
