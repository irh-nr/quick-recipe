import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/feature/navBar";
import Footer from "@/sections/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple & Quick Recipe",
  description: "Created by Irhamna NR",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Toaster richColors />
          <header>
            <nav>
              <NavBar />
            </nav>
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
