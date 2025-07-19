import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  { NavBar }  from "@/components/navBar";
import Footer from "@/sections/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Simple & Quick Recipe",
  description: "Created by me",
  icons: {
    icon: "/globe.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">   
      
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header>
            <nav>
              <NavBar />
            </nav>
          </header> 
            {children}
          <footer>
            <Footer />
          </footer>
        </body>
    </html>
  );
}
