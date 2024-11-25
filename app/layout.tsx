import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import InfoBar from "@/components/ui/InfoBar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnePost",
  description: "Stay up to date with your blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* <InfoBar /> */}
        <div className="max-w-[1200px] min-h-[100vh] mx-auto ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
