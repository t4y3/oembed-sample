'use client';

export const Embed = ({blogId}) => {
    return (
        <div style={{backgroundColor: "red"}}>
            <a href={`https://oembed-sample.vercel.app/e/rich/${blogId}`} className="embedly-card">Embedly</a>
        </div>
    );
}