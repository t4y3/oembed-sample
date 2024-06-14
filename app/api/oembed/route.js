import {NextResponse} from "next/server";

// < \u003C
// > \u003E


const baseObject = {
    "version": "1.0",
    "author_name": "Yuki",
    "author_url": "https://oembed-sample.vercel.app",
    "provider_name": "oEmbed Sample",
    "provider_url": "https://oembed-sample.vercel.app"
};

export async function GET(request) {

    const width = 300;
    const height = 300;

    const url = new URL(request.url);
    const _url = url.searchParams.get('url');

    const id = _url.split('/')[_url.split('/').length - 1];
    const type = _url.indexOf('photo') !== -1 ? 'photo' : 'rich';
    const thumbnailImage = `https://picsum.photos/id/${id}/200/300`;
    const iframeUrl = `https://oembed-sample.vercel.app/rich/${id}/embed`

    const json = {
        ...baseObject,
        "width": width,
        "height": height,
        ...(type === 'photo' && {
            "type": "photo",
            url: thumbnailImage,
            "title": `oEmbed Photo Sample #${id}`,
        }),
        ...(type === 'rich' && {
            "type": "rich",
            "title": `oEmbed Rich Sample #${id}`,
            "html": `\u003Ciframe style="border-radius: 12px" width="300" height="300" title="Spotify Embed: Today’s Top Hits" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" src="${iframeUrl}"\u003E\u003C/iframe\u003E`,
            "iframe_url": iframeUrl,
            "thumbnail_url": thumbnailImage,
            "thumbnail_width": width,
            "thumbnail_height": height
        })
    }

    const response = NextResponse.json(json, {status: 200});


    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET');

    return response;
}