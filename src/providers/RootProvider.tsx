"use client"

import { ThemeProvider } from "next-themes"

/***
 * This components wraps all Root Level providers which should use "use client" into a single component.
 */

export default function RootProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
