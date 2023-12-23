"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, SunMoon } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ToggleGroup
      variant={"outline"}
      type="single"
      value={theme}
      onValueChange={setTheme}
      className="absolute bottom-4 right-4"
    >
      <ToggleGroupItem value="light">
        <Sun />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark">
        <Moon />
      </ToggleGroupItem>
      <ToggleGroupItem value="system">
        <SunMoon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ThemeSwitch
