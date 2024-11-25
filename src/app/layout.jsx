// src/app/layout.jsx
import localFont from "next/font/local";
import "./globals.css";
import "normalize.css";
import ClientProvider from "./ClientProvider";
import { getDataFirst } from "@/db/utils";
import { cookies } from "next/headers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Birukova Landing",
  description: "start:08.10.2024 time:15:13 dev:mozdzer",
};

// RootLayout is a server component
export default async function RootLayout({ children }) {
  const { firstData, currentLanguage } = await getDataFirst();

  return (
    <html lang="en">
      <body>
        {/* Pass the fetched firstData to ClientProvider */}
        <ClientProvider
          firstServerData={firstData}
          initialLanguage={currentLanguage}
        >
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
