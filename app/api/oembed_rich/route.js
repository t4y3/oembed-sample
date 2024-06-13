import { NextResponse} from "next/server";

// < \u003C
// > \u003E

export async function GET(request) {
    return NextResponse.json({
        "version": "1.0",
        "author_name": "t4y3",
        "html": "\u003Ciframe referrerpolicy=\"unsace-url\" src=\"https://oembed-sample.vercel.app\" frameborder=\"0\" width=\"300\" height=\"300\" allowfullscreen\u003E\u003C/iframe\u003E",
        "width": 300,
        "height": 300,
        "provider_name": "oEmbed Sample",
        "provider_url": "https://oembed-sample.vercel.app/",
        "type": "rich",
        "title": "ku"
    }, { status: 200 });
}