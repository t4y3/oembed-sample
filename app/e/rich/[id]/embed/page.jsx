export const runtime = 'edge';

export default function Page({params}) {
    return (
        <main style={{
            height: '100%',
            backgroundColor: "lightblue",
            color: "lightblue"
        }}>
            <h1>Embedされるページです #{params.id}</h1>
        </main>
    );
}
