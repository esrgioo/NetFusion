import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ExpletusSans, poppins } from "@/utils/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL_FE!),
  title: "Business Networking Platform | NetFusion",
  description:
    "Discover the top business networking platform with over 9 million members in North America. Connect, build relationships, and drive success on the largest business network.",
  keywords: ["Company Profile", "NetFusion"],
  openGraph: {
    images: ["/home-globe.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${ExpletusSans.variable} `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
