import { ThemeProvider } from "@/components/ThemeProvider";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import Topbar from "../components/Topbar";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bridge in the Gap Worldwide",
  description:
    "Empowering Futures: Bridge in the Gap Worldwide for Students Supporting, Education, Period Equity, and Food Security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4928930579006434"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Theme>
            <div className="h-screen flex items-center justify-center">
              <Image
                src="/under.png"
                width={1920}
                height={1080}
                alt="under constraction"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* <Topbar />
            <Navbar />
            {children}
            <Footer /> */}
          </Theme>
        </ThemeProvider>

        <ToastContainer />
      </body>
    </html>
  );
}
