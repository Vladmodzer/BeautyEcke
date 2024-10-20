// src/app/layout.jsx
import localFont from "next/font/local";
import "./globals.css";
import ClientProvider from "./ClientProvider";



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

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
