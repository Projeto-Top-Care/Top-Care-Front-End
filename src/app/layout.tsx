import Footer from "@/components/Footer/Footer";
import HeaderApresentacao from "@/components/HeaderApresentacao/headerApresentacao";
import HeaderDeslogado from "@/components/HeaderDeslogado/HeaderDeslogado";
import HeaderLogado from "@/components/HeaderLogado/HeaderLogado";
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
        {/* <HeaderDeslogado /> */}
        <HeaderApresentacao/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
