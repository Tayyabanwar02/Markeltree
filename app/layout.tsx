import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/style.css";
import "../styles/fontawesome.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markeltree - Improve Your Business with software development services.",
  description: "AI Powered Startup & Technology Next JS Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        {children}
      </body>
    </html>
  );
}
