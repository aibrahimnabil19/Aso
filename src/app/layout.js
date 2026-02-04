import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aso",
  description: "Created by Nabil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Script
          src="https://kit.fontawesome.com/ab3f556224.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
          <Navbar/>
        
          <main className="flex-1 max-w-5xl mx-auto my-4 w-full">
            {children}
          </main>
          <Footer/>
      </body>
    </html>
  );
}
