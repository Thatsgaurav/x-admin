import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from "@/providers/modal-provider";
import "./globals.css";
import { ToasterProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X-Store - admin",
  description: "Ecommerce admin panel for X-Store.",
  icons: {
    icon: '/assets/images/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={jost.className}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <ToasterProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
