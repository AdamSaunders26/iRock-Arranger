import type { Metadata } from "next";
import { Inter, Ubuntu, Raleway } from "next/font/google";
import { IRockContextProvider } from "./Context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Band Coach Arranger Tool",
  description: "A tool to help Band Coaches record arrangements",
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
