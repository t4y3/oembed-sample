export const runtime = 'edge';

export default function Page({params}) {
    return (
        <main style={{
            height: '100%',
            backgroundColor: "lightblue",
            color: "red"
        }}>
            <h1>Embedされるページです #{params.id}</h1>
            <ul>
                <li>
                    <a href="/blog/1" target="_parent">/blog/1へ遷移</a>
                </li>
                <li>
                    <a href="/blog/2" target="_parent">/blog/2へ遷移</a>
                </li>
                <li>
                    <a href="/blog/3" target="_parent">/blog/3へ遷移</a>
                </li>
                <li>
                    <a href="/blog/4" target="_parent">/blog/4へ遷移</a>
                </li>
            </ul>
        </main>
    );
}
