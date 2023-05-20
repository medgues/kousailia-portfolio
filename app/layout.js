import "./globals.css";

export const metadata = {
  title: "Koussaila-Mehdi",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
