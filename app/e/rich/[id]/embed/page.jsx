export const runtime = 'edge';

export default function Page({ params }) {
    return (
        <main style={{
            backgroundColor: "lightblue",
        }}>
            <h1>Embedされるページです #{params.id}</h1>
        </main>
    );
}
