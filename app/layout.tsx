import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./auth/AuthProvider";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bridge In The Gap &#8211; Nonprofit Organization",
  description: "Bridge In The Gap &#8211; Nonprofit Organization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Topbar />
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
