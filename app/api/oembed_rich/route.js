import {NextResponse} from "next/server";

// < \u003C
// > \u003E

export async function GET(request) {
    const response = NextResponse.json({
        "html": "\u003Ciframe allowfullscreen allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" src=\"https://oembed-sample.vercel.app/rich/123/embed\" frameborder=\"0\" width=\"300\" height=\"300\"\u003E\u003C/iframe\u003E",
        "iframe_url": "https://oembed-sample.vercel.app/rich/123/embed",
        "width": 300,
        "height": 300,
        "version": "1.0",
        "provider_name": "oEmbed Sample",
        "provider_url": "https://oembed-sample.vercel.app",
        "type": "rich",
        "title": "ku",
        "thumbnail_url": "http://farm4.static.flickr.com/3123/2341623661_7c99f48bbf_m.jpg",
        "thumbnail_width": 300,
        "thumbnail_height": 300
    }, {status: 200});


    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET');

    return response;
}