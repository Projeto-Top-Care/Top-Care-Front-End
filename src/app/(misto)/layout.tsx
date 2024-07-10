import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
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
          <Header/> 
            {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}