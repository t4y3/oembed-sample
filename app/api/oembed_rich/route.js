import { NextResponse} from "next/server";

// < \u003C
// > \u003E

export async function GET(request) {
    return NextResponse.json({
        "author_name": "t4y3",
        "html": "\u003Ciframe src=\"https://oembed-sample.vercel.app\" frameborder=\"0\" width=\"300\" height=\"300\" allowfullscreen\u003E\u003C/iframe\u003E",
        "width": 300,
        "height": 300,
        "version": "1.0",
        "provider_name": "oEmbed Sample",
        "provider_url": "https://oembed-sample.vercel.app/",
        "type": "rich",
        "title": "KUMA_SAN",
        "thumbnail_url": "https://i.scdn.co/image/ab67706f00000002100e87512faecef9861e5102",
        "thumbnail_width": 300,
        "thumbnail_height": 300
    }, { status: 200 });
}