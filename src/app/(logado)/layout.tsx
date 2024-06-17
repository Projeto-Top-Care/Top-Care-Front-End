import Footer from "@/components/Footer/Footer";
import HeaderLogado from "@/components/HeaderLogado/HeaderLogado";
import AppProvider from "@/context";
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
        <AppProvider>
          <HeaderLogado />
            {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
