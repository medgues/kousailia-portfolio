import "./globals.css";

export const metadata = {
  title: "Koussaila-Mehdi",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
