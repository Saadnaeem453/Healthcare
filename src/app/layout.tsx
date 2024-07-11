import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes";
const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-sans'

});

export const metadata: Metadata = {
  title: "HealthCare App",
  description: "Developed By Saad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-dark-300 font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
