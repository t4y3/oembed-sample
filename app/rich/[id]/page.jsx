export async function generateMetadata(
    {params, searchParams},
    parent
) {
    const url = encodeURIComponent(`https://oembed-sample.vercel.app/rich/${params.id}`)
    return {
        alternates: {
            types: {
                "application/json+oembed": `https://oembed-sample.vercel.app/api/oembed?url=${url}&format=json&maxwidth=300&maxheight=300`
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
