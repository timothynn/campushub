"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Menu } from "lucide-react"
import { useSidebar } from "./sidebar-context"
import { useTheme } from "next-themes"
import Image from "next/image"
import { motion } from "framer-motion"
import { ModeToggle } from "../mode-toggle"

function Breadcrumbs() {
  const pathname = usePathname()
  const parts = pathname.split("/").filter(Boolean) // ["dashboard","jobs"]
  const buildHref = (i: number) => "/" + parts.slice(0, i + 1).join("/")

  return (
    <nav className="flex items-center gap-2 text-sm">
      <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
      {parts.map((seg, i) => {
        const href = buildHref(i)
        const isLast = i === parts.length - 1
        const label = seg.charAt(0).toUpperCase() + seg.slice(1)
        return (
          <span key={href} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            {isLast ? (
              <span className="font-medium">{label}</span>
            ) : (
              <Link href={href} className="text-muted-foreground hover:text-foreground">
                {label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export default function Navbar() {
  const { toggle } = useSidebar()
  const { theme } = useTheme()

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="h-14 w-full border-b bg-background/70 backdrop-blur sticky top-0 z-40"
    >
      <div className="h-full container mx-auto px-4 flex items-center justify-between">
        {/* Left: Toggle + Breadcrumbs */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle sidebar"
            className="rounded-md p-2 hover:bg-accent"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Breadcrumbs />
        </div>

        {/* Right: Theme toggle using logo */}
        <button
          aria-label="Toggle theme"
          className="rounded-full p-1 hover:opacity-90 transition"
          onClick={() => {
            // lazy import to avoid mismatch: keep using your existing ModeToggle if preferred
            const next = theme === "dark" ? "light" : "dark"
            document.documentElement.classList.remove(theme === "dark" ? "dark" : "light")
            document.documentElement.classList.add(next)
            // If using next-themes, replace above with setTheme(next)
          }}
        >
            <ModeToggle  />
        </button>
      </div>
    </motion.header>
  )
}
