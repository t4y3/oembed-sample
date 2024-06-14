import "./globals.css";

export const metadata = {
  title: "oEmbed Sample",
  description: "oEmbed Sample",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
