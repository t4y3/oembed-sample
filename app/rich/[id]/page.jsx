export async function generateMetadata(
    {params, searchParams},
    parent
) {
    const url = encodeURIComponent(`https://oembed-sample.vercel.app/rich/${params.id}`)
    return {
        alternates: {
            types: {
                "application/json+oembed": `https://oembed-sample.vercel.app/api/oembed_rich?url=${url}&format=json`,
                title: "Embed Test"
            }
        }
    }
}

export default function Page() {
    return (
        <main>
            <h1>Richのembedを確認</h1>
        </main>
    );
}
