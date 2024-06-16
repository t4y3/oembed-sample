export const runtime = 'edge';
// import { extract } from '@extractus/oembed-extractor'
import { Embed } from './Embed';


export default function Page({params}) {
    return (
        <main>
            <h1>ブログ記事ページ</h1>
            <hr/>
            <Embed blogId={params.blogId}/>
            <hr/>
            <iframe style={{borderRadius: "12px"}} width={300} height={300} title="oEmbed Rich Sample #${id}"
                    frameBorder="0" allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    sandbox="allow-top-navigation-by-user-activation allow-scripts" src={`https://oembed-sample.vercel.app/e/rich/${params.blogId}/embed`}></iframe>
        </main>
    );
}
