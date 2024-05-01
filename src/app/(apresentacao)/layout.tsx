import Footer from "@/components/Footer/Footer";
import FooterApresentacao from "@/components/FooterApresentacao/footerApresentacao";
import HeaderApresentacao from "@/components/HeaderApresentacao/headerApresentacao";
import HeaderDeslogado from "@/components/HeaderDeslogado/HeaderDeslogado";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Top Care",
  description: "Pet Shop Top Care LTDA",
  icons: "./assets/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-branco">
        <HeaderApresentacao />
        {children}
        <FooterApresentacao />
      </body>
    </html>
  );
}
