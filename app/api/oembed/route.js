import {NextResponse} from 'next/server'

export async function GET(request) {

    // return NextResponse.json({
    //         "type": "rich",
    //         "version": "1.0",
    //         "title": "埋め込みどうでしょう",
    //         "author_name": "t4y3",
    //         "html": "<div style=\"width:100%;height:120px;border:1px solid;font-weight:bold;overflow:hidden;background-color:white;\"><img src=\"https://t4y3.github.io/oembed-sample/img/Bears.jpg\" width=120 height=120 style=\"float:left;margin-right:10px;\"/>くまさん</div>",
    //         "height": 500,
    //         "width": 500,
    //     }, {status: 200}
    // )

    return NextResponse.json({
        "version": "1.0",
        "type": "photo",
        "width": 240,
        "height": 160,
        "title": "ZB8T0193",
        "url": "http://farm4.static.flickr.com/3123/2341623661_7c99f48bbf_m.jpg",
        "author_name": "Bees",
        "author_url": "http://www.flickr.com/photos/bees/",
        "provider_name": "Flickr",
        "provider_url": "http://www.flickr.com/"
    })
}