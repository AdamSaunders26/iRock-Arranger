import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Ubuntu, Raleway } from "next/font/google";
import { IRockContextProvider } from "./Context";
import "./globals.css";
import Head from "next/head";

const APP_NAME = "Band Coach Arrangement Tool";
const APP_DEFAULT_TITLE = "An Arrangement Tool for Band Coaches";
const APP_TITLE_TEMPLATE = "%s - BCAT";
const APP_DESCRIPTION =
  "This handy tool helps Band Coaches stay organised with the different arrangements they come up with";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: { default: APP_DEFAULT_TITLE, template: APP_TITLE_TEMPLATE },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0173EB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <IRockContextProvider>
        <body className={raleway.className}>{children}</body>
      </IRockContextProvider>
    </html>
  );
}
