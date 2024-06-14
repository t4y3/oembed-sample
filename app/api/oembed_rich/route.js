import { NextResponse} from "next/server";

// < \u003C
// > \u003E

export async function GET(request) {
    const response = NextResponse.json({
        "version": "1.0",
        "author_name": "t4y3",
        "html": "\u003Ciframe allowfullscreen allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" src=\"https://oembed-sample.vercel.app/rich/123/embed\" frameborder=\"0\" width=\"300\" height=\"300\" \u003E\u003C/iframe\u003E",
        "width": 300,
        "height": 300,
        "provider_name": "oEmbed Sample",
        "provider_url": "https://oembed-sample.vercel.app/",
        "type": "rich",
        "title": "ku"
    }, { status: 200 });


    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET');

    return response;
}