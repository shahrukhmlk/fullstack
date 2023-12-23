import type { Metadata } from "next"
import { Inter } from "next/font/google"
import RootProvider from "@/providers/RootProvider"
import HomeHeader from "@/components/headers/Home/HomeHeader"
import "./globals.css"
import ThemeSwitchUtility from "@/components/utilities/ThemeSwitch/ThemeSwitchUtility"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Shahrukh Malik",
  description: "Software Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={"flex flex-col"}>
        <RootProvider>
          <HomeHeader />
          {children}
          <ThemeSwitchUtility className="absolute right-4 bottom-4" />
        </RootProvider>
      </body>
    </html>
  )
}
