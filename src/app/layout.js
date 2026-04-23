import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/components/sheard/Navber/Navber";
import Footer from "@/components/sheard/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PH play store Next Js",
  description: "Easy to buy your apps",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navber></Navber>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
