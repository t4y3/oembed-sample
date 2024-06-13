import {NextResponse} from 'next/server'

// < \u003C
// > \u003E

export async function GET(request) {
    return NextResponse.json({
            "author_name": "t4y3",
            "html": "\u003Cdiv\u003Eくまさん\u003C/div\u003E",
            "width": 300,
            "height": 300,
            "version": "1.0",
            "provider_name": "oEmbed Sample",
            "provider_url": "https://oembed-sample.vercel.app/",
            "type": "rich",
            "title": "Today’s Top Hits",
            "thumbnail_url": "https://i.scdn.co/image/ab67706f00000002100e87512faecef9861e5102",
            "thumbnail_width": 300,
            "thumbnail_height": 300

        }, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        }
    )
}