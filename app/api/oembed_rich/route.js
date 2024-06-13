import { NextResponse} from "next/server";

// < \u003C
// > \u003E

export async function GET(request) {
    return NextResponse.json({
        "version": "1.0",
        "author_name": "t4y3",
        "html": "\u003Cp\u003Etest\u003C/p\u003E",
        "width": 300,
        "height": 300,
        "provider_name": "oEmbed Sample",
        "provider_url": "https://oembed-sample.vercel.app/",
        "type": "rich",
        "title": "embed test"
    }, { status: 200 });
}