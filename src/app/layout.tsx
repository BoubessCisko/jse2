import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/UI/navbar";
import Footer from "@/components/UI/footer";
import Navbar2 from "@/components/navbar2";

const montserrat = Montserrat({ subsets: ["latin"] ,weight:["100","200","300","500","600","700","800","900"] });

export const metadata: Metadata = {
  title: "JSE",
  description: "Jolof Stock Exchange",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={montserrat.className}>
          <Navbar2 />
          {children}
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  );
}
