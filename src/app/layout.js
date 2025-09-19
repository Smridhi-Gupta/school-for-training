import { Geist, Geist_Mono } from "next/font/google";
// import './styles/globals.css';
import './globals.css'
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "School For Training",
  description: "Next.js + Tailwind Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark"> {/* ✅ Dark mode enabled */}
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        {/* ✅ Header Added */}
        <Header />
        {children}
        {/* ✅ Footer Added */}
        <Footer />
      </body>
    </html>
  );
}
