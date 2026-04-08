import type { Metadata } from "next";
import { Epilogue, Public_Sans } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-epilogue",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jesus Milpa Lino | Full Stack Developer",
  description:
    "Ingeniero en Computación y desarrollador Full Stack especializado en FastAPI, React y Next.js. Portafolio profesional de Jesus Milpa Lino.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "FastAPI",
    "Python",
    "Node.js",
    ".NET",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${epilogue.variable} ${publicSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="font-body selection:bg-primary-container selection:text-on-primary-container">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
