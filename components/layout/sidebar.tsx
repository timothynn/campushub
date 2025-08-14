"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, Calendar, MessageSquare, User, Settings, Bell, BarChart3 } from "lucide-react"
import { useSidebar } from "./sidebar-context"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/jobs", label: "Jobs", icon: Briefcase },
  { href: "/dashboard/events", label: "Events", icon: Calendar },
  { href: "/dashboard/posts", label: "Posts", icon: MessageSquare },
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

export default function Sidebar() {
  const { collapsed } = useSidebar()
  const pathname = usePathname()

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.25 }}
      className="border-r bg-background sticky top-0 h-screen hidden md:flex flex-col"
    >
      <div className="h-14 border-b flex items-center px-4">
        {/* Brand mini */}
        <div className="font-bold tracking-tight">
          {collapsed ? "CH" : "Campus HUB"}
        </div>
      </div>
      <nav className="flex-1 p-2 space-y-1">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors",
                active && "bg-accent"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span className="truncate">{label}</span>}
            </Link>
          )
        })}
      </nav>
      <div className="p-3 text-xs text-muted-foreground">
        {!collapsed && <span>v1.0 • student</span>}
      </div>
    </motion.aside>
  )
}
