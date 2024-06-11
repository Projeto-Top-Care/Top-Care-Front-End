import Footer from "@/components/Footer/Footer";
import HeaderDeslogado from "@/components/HeaderDeslogado/HeaderDeslogado";
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
        <HeaderDeslogado/>
          <AppProvider>
            {children}
          </AppProvider>
        <Footer />
      </body>
    </html>
  );
}
