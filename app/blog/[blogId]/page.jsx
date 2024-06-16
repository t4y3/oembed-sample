export const runtime = 'edge';

export default function Page({ params }) {
    return (
        <main>
            <h1>ブログ記事ページ</h1>
            <hr/>
            <a href={`https://oembed-sample.vercel.app/e/rich/${params.blogId}`} className="embedly-card">Embedly</a>
            <hr/>
            <iframe style="border-radius: 12px" width={300} height={300} title="oEmbed Rich Sample #${id}" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" sandbox="allow-scripts" src={`https://oembed-sample.vercel.app/e/rich/${params.blogId}`}></iframe>
        </main>
    );
}
