import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import { SessionProviders } from "@/utils/SessionProvider";
import ContextWrapper from "@/contextapi/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Modern dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviders>
          <ContextWrapper>
            <Header />
            <Toaster position="bottom-center" reverseOrder={false} />
            <main className="flex min-h-custom ">
              <MainContent>{children}</MainContent>
            </main>
            <footer></footer>
          </ContextWrapper>
        </SessionProviders>
      </body>
    </html>
  );
}
