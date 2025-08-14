"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Briefcase, MessageSquare, Calendar, Settings } from "lucide-react"

const links = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/dashboard/jobs", label: "Jobs", icon: Briefcase },
  { href: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { href: "/dashboard/events", label: "Events", icon: Calendar },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

export function DashboardSidebar() {
  return (
    <motion.aside
      initial={{ x: -220, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="hidden md:block w-60 border-r bg-background"
    >
      <nav className="p-3 space-y-1">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent"
          >
            <Icon className="h-5 w-5" />
            <span className="text-sm font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </motion.aside>
  )
}
