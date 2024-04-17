import Footer from "@/components/Footer/Footer";
import FooterApresentacao from "@/components/FooterApresentacao/footerApresentacao";
import HeaderDeslogado from "@/components/HeaderDeslogado/HeaderDeslogado";
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
      <body className="bg-branco">
        <HeaderDeslogado />
        {children}
        <FooterApresentacao />
      </body>
    </html>
  );
}
