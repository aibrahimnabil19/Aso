import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import Hero from "../components/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"]
})

export const metadata = {
  title: "Aso",
  description: "Created by Nabil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} antialiased min-h-screen flex flex-col`}
      >
        <Script
          src="https://kit.fontawesome.com/ab3f556224.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
          <Navbar/>
        
          <main className="flex-1 w-full font-['jakarta']">
            {children}
          </main>
          <Footer/>
      </body>
    </html>
  );
}
