import { NextResponse} from "next/server";
// < \u003C
// > \u003E

export async function GET(request) {
    return NextResponse.json({
        "version": "1.0",
        "type": "photo",
        "width": 240,
        "height": 160,
        "title": "oEmbed Photo Sample",
        "url": "http://farm4.static.flickr.com/3123/2341623661_7c99f48bbf_m.jpg",
        "author_name": "Yuki",
        "author_url": "https://oembed-sample.vercel.app/",
        "provider_name": "oEmbed Sample",
        "provider_url": "https://oembed-sample.vercel.app/"
    }, {
        status: 200
    })
}