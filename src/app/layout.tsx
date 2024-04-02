import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Top Care",
  description: "Pet Shop Top Care LTDA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script async src="node_modules/@material-tailwind/html/scripts/ripple.js"></script>
      <script async src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
      <body className="">{children}</body>
    </html>
  );
}
