export const runtime = 'edge';

import "./globals.css";

export const metadata = {
  title: "oEmbed Sample",
  description: "oEmbed Sample",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <script async src="//cdn.embedly.com/widgets/platform.js" charSet="UTF-8"></script>
    </head>
    <body>{children}</body>
    </html>
  );
}
