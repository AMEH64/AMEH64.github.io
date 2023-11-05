import type { Metadata } from "next";
import { GeistMono } from "geist/font";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";
import { cn } from "@/lib/utils";
import { appConfig } from "@/config/app";

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("flex flex-col min-h-screen", GeistMono.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppHeader />
          <div className="flex flex-1 flex-col">{children}</div>
          <AppFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
