import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "./styles/responsive.css";
import BootstrapSetup from "./components/layout/BootstrapSetup";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shires Tech",
  description: "Generated by Shires Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
        <BootstrapSetup />
      </body>
    </html>
  );
}
