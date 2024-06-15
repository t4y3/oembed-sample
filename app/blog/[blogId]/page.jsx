export const runtime = 'edge';

export default function Page({ params }) {
    return (
        <main>
            <h1>ブログ記事ページ</h1>
            <a href={`https://oembed-sample.vercel.app/e/rich/${params.blogId}`} className="embedly-card">Embedly</a>
        </main>
    );
}
