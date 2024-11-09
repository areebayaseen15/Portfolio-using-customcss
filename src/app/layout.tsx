import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer  from "./Components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Areeba Yaseen",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        {children}
        <Footer/>
        </body>
    </html>
  );
}
