export const runtime = 'edge';
import { headers } from "next/headers";

export async function generateMetadata(
    {params, searchParams},
    parent
) {
    const url = encodeURIComponent(`https://oembed-sample.vercel.app/e/rich/${params.id}`)
    return {
        alternates: {
            types: {
                "application/json+oembed": `https://oembed-sample.vercel.app/api/oembed?url=${url}&amp;format=json`
            }
        }
    }
}

export default function Page() {
    const headersList = headers()
    
    console.log( "\x1b[31m" );
    console.log("_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/");
    console.log("_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/");
    console.log("_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/");
    console.log("\x1b[0m");
    console.log(headersList);
    return (
        <main>
            <h1>h1:Richのembedを確認</h1>
        </main>
    );
}
