import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import InfoBar from "@/components/ui/InfoBar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnePost : Endless Insights",
  description:
    "Discover the latest trends and untold stories.Stay ahead with insights that matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5BZXZXTC');
  `,
          }}
        />
      </head>

      <body className={inter.className}>
        <Navbar />
        {/* <InfoBar /> */}
        <div className="max-w-[1200px] min-h-[100vh] mx-auto ">{children}</div>
        <Footer />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5BZXZXTC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
