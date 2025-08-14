"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b">
      <div className="flex items-center justify-between h-14 px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="hidden sm:inline font-bold">Campus HUB</span>
        </Link>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Avatar className="h-8 w-8">
            <AvatarImage src="/user-avatar.jpg" alt="User" />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
